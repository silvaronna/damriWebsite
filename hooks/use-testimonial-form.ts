"use client"

import { useState } from "react"
import type { TestimonialFormData } from "@/components/ui/data/testimonial-types"

export function useTestimonialForm() {
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    route: "",
    rating: 5,
    testimonial: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to submit testimonial")

      setSubmitStatus("success")
      resetForm()
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      route: "",
      rating: 5,
      testimonial: "",
    })
    setSubmitStatus("idle")
  }

  return {
    formData,
    setFormData,
    isSubmitting,
    submitStatus,
    handleSubmit,
    resetForm,
    setSubmitStatus
  }
}
