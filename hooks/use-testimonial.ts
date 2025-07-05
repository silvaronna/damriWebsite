"use client"

import { useState, useEffect } from "react"
import type { RealTestimonial } from "@/components/ui/data/testimonial-types"

interface UseTestimonialsProps {
  page?: number
  limit?: number
  serviceType?: string
  autoRefresh?: boolean
  refreshInterval?: number
}

interface TestimonialsResponse {
  testimonials: RealTestimonial[]
  pagination: {
    currentPage: number
    totalPages: number
    totalItems: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export function useTestimonials({
  page = 1,
  limit = 6,
  serviceType = "all",
  autoRefresh = false,
  refreshInterval = 30000, // 30 seconds
}: UseTestimonialsProps = {}) {
  const [data, setData] = useState<TestimonialsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTestimonials = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(serviceType !== "all" && { serviceType }),
      })

      const response = await fetch(`/api/testimonials?${params}`)
      if (!response.ok) throw new Error("Failed to fetch testimonials")

      const result = await response.json()
      setData(result)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTestimonials()
  }, [page, limit, serviceType])

  // Auto refresh untuk real-time updates
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(fetchTestimonials, refreshInterval)
    return () => clearInterval(interval)
  }, [autoRefresh, refreshInterval])

  return {
    testimonials: data?.testimonials || [],
    pagination: data?.pagination,
    loading,
    error,
    refetch: fetchTestimonials,
  }
}
