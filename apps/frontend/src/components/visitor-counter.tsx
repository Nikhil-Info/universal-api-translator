"use client"

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { getCountryCode } from '@/lib/country-codes'

interface VisitorStats {
    total_views: number
    city?: string
    country_code?: string
}

export function VisitorCounter() {
    const [stats, setStats] = useState<VisitorStats | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchVisitorStats = async () => {
            const supabase = createClient()

            try {
                const { data, error } = await supabase
                    .from('visitor_stats')
                    .select('*')
                    .limit(1)
                    .single()

                if (error) {
                    console.error('[v0] Error fetching visitor stats:', error.message)
                    setStats({
                        total_views: 1,
                        city: 'Unknown',
                        country_code: 'XX'
                    })
                    setLoading(false)
                    return
                }

                if (data) {
                    setStats({
                        total_views: data.total_views || 1,
                        city: data.city || 'Unknown',
                        country_code: data.country_code || 'XX'
                    })
                }
            } catch (error) {
                console.error('[v0] Error fetching visitor stats:', error)
                setStats({
                    total_views: 1,
                    city: 'Unknown',
                    country_code: 'XX'
                })
            } finally {
                setLoading(false)
            }
        }

        fetchVisitorStats()
    }, [])

    if (loading) {
        return <span className="text-xs text-muted-foreground">Loading...</span>
    }

    if (!stats) {
        return <span className="text-xs text-muted-foreground">No data</span>
    }

    const countryDisplay = getCountryCode(stats.country_code)
    const ordinalSuffix = (num: number) => {
        const j = num % 10
        const k = num % 100
        if (j === 1 && k !== 11) return 'st'
        if (j === 2 && k !== 12) return 'nd'
        if (j === 3 && k !== 13) return 'rd'
        return 'th'
    }

    return (
        <span className="text-xs text-muted-foreground">
            Last visitor from {stats.city}, {countryDisplay} ({stats.total_views}
            {ordinalSuffix(stats.total_views)} view)
        </span>
    )
}
