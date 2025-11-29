"use client"

import { useEffect, useState } from 'react'
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
            try {
                const response = await fetch('/api/visitor')
                if (!response.ok) {
                    throw new Error('Failed to fetch stats')
                }
                const data = await response.json()

                if (data) {
                    setStats({
                        total_views: data.total_views || 1,
                        city: data.city || 'Unknown',
                        country_code: data.country_code || 'XX'
                    })
                }
            } catch (error) {
                // Silently fail for network errors to avoid console noise
                console.warn('[v0] Failed to fetch visitor stats')
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
        <span className="text-xs text-muted-foreground" role="status" aria-live="polite">
            Last visitor from {stats.city}, {countryDisplay} ({stats.total_views}
            {ordinalSuffix(stats.total_views)} view)
        </span>
    )
}
