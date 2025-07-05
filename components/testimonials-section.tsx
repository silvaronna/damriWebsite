"use client"

import { useState } from "react"
import { useTestimonials } from "@/hooks/use-testimonial"
import { TestimonialForm } from "./testimonial-form"
import { TestimonialsHeader } from "./ui/testimonials-header"
import { TestimonialsFilter } from "./ui/testimonials-filter"
import { TestimonialsGrid } from "./ui/testimonials-grid"
import { TestimonialsLoading } from "./ui/testimonials-loading"
import { TestimonialsEmpty } from "./ui/testimonials-empty"
import { TestimonialsPagination } from "./ui/testimonials-pagination"

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [serviceFilter, setServiceFilter] = useState("all")
  const [showForm, setShowForm] = useState(false)

  const { testimonials, pagination, loading, error, refetch } = useTestimonials({
    page: currentPage,
    limit: 6,
    serviceType: serviceFilter,
    autoRefresh: true,
    refreshInterval: 30000,
  })

  const serviceTypes = [
    { value: "all", label: "Semua Layanan" },
    { value: "antar-kota", label: "Antar Kota" },
    { value: "dalam-kota", label: "Dalam Kota" },
    { value: "airport", label: "Airport Shuttle" },
    { value: "pariwisata", label: "Pariwisata" },
    { value: "perintis", label: "Perintis" },
    { value: "eksekutif", label: "Eksekutif" },
  ]

  if (showForm) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <button onClick={() => setShowForm(false)} className="mb-4 underline">
            ← Kembali ke Testimoni
          </button>
          <TestimonialForm />
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <TestimonialsHeader loading={loading} onAdd={() => setShowForm(true)} onRefresh={refetch} />
        <TestimonialsFilter
          serviceTypes={serviceTypes}
          activeFilter={serviceFilter}
          onFilterChange={(val) => {
            setServiceFilter(val)
            setCurrentPage(1)
          }}
        />

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <p className="text-red-600">Error: {error}</p>
          </div>
        )}

        {loading && testimonials.length === 0 ? (
          <TestimonialsLoading />
        ) : testimonials.length === 0 ? (
          <TestimonialsEmpty onAdd={() => setShowForm(true)} />
        ) : (
          <>
            <TestimonialsGrid testimonials={testimonials} />
            {pagination && pagination.totalPages > 1 && (
              <TestimonialsPagination
                pagination={pagination}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </section>
  )
}
