import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    try {
        // 1. Get IP address
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1'

        // 2. Get location data
        // Using ip-api.com (free, no key required for non-commercial use)
        // In production, you might want to use a paid service or a different provider
        let city = 'Unknown'
        let country_code = 'XX'

        if (ip === '127.0.0.1' || ip === '::1') {
            // On localhost, fetch the server's public IP location
            try {
                const geoRes = await fetch('http://ip-api.com/json/')
                const geoData = await geoRes.json()
                if (geoData.status === 'success') {
                    city = geoData.city
                    country_code = geoData.countryCode
                }
            } catch (e) {
                console.warn('Failed to fetch localhost geo data:', e)
            }
        } else {
            // For real traffic, use the visitor's IP
            try {
                const geoRes = await fetch(`http://ip-api.com/json/${ip}`)
                const geoData = await geoRes.json()
                if (geoData.status === 'success') {
                    city = geoData.city
                    country_code = geoData.countryCode
                }
            } catch (e) {
                console.warn('Failed to fetch geo data:', e)
            }
        }

        // 3. Update Supabase (optional - gracefully handle failures)
        let newStats = {
            total_views: 1,
            city,
            country_code
        }

        try {
            const supabase = await createClient()

            // First, try to get the current stats
            const { data: currentStats, error: fetchError } = await supabase
                .from('visitor_stats')
                .select('*')
                .limit(1)
                .single()

            if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 is "The result contains 0 rows"
                console.warn('Error fetching stats:', fetchError)
                // Continue without database
                return NextResponse.json(newStats)
            }

            if (currentStats) {
                // Update existing row
                const { data, error } = await supabase
                    .from('visitor_stats')
                    .update({
                        total_views: currentStats.total_views + 1,
                        city,
                        country_code
                    })
                    .eq('id', currentStats.id)
                    .select()
                    .single()

                if (error) {
                    console.warn('Error updating stats:', error)
                    // Return with incremented count even if update fails
                    newStats.total_views = currentStats.total_views + 1
                } else {
                    newStats = data
                }
            } else {
                // Insert new row
                const { data, error } = await supabase
                    .from('visitor_stats')
                    .insert({
                        total_views: 1,
                        city,
                        country_code
                    })
                    .select()
                    .single()

                if (error) {
                    console.warn('Error inserting stats:', error)
                    // Continue with default stats
                } else {
                    newStats = data
                }
            }
        } catch (dbError) {
            console.warn('Database operation failed, continuing without persistence:', dbError)
            // Continue without database - return location data anyway
        }

        return NextResponse.json(newStats)
    } catch (error: unknown) {
        console.error('Visitor API Error:', error)
        const errorMessage = error instanceof Error ? error.message : 'Internal Server Error'
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        )
    }
}
