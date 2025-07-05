"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FormField } from "@/components/ui/form-field"
import { RatingStars } from "@/components/ui/rating-stars"
import { TestimonialSuccess } from "@/components/ui/testimonial-success"

import { useTestimonialForm } from "@/hooks/use-testimonial-form"
import { serviceTypes } from "@/components/ui/data/service-types"

export function TestimonialForm() {
  const { formData, setFormData, isSubmitting, submitStatus, handleSubmit, resetForm, setSubmitStatus} = useTestimonialForm()

  const handleReset = () => {
    setSubmitStatus("idle")
  }

  if (submitStatus === "success") {
    return <TestimonialSuccess onReset={handleReset} /> 
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Bagikan Pengalaman Anda</CardTitle>
        <p className="text-center text-gray-600">Ceritakan pengalaman Anda menggunakan layanan DAMRI</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Nama Lengkap *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <FormField
              label="Email *"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Layanan *</label>
              <select
                required
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih Jenis Layanan</option>
                {serviceTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <FormField
              label="Rute/Tujuan *"
              required
              placeholder="Contoh: Jakarta - Bandung"
              value={formData.route}
              onChange={(e) => setFormData({ ...formData, route: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating Layanan *</label>
            <RatingStars
              rating={formData.rating}
              onRate={(rating) => setFormData({ ...formData, rating })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Testimoni *</label>
            <textarea
              required
              rows={4}
              placeholder="Ceritakan pengalaman Anda menggunakan layanan DAMRI..."
              value={formData.testimonial}
              onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-600">Terjadi kesalahan. Silakan coba lagi.</p>
            </div>
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Mengirim..." : "Kirim Testimoni"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
