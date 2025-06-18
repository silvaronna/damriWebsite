"use client"

import { useLanguage } from "@/context/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-service-title text-gray-900 font-semibold leading-tight">{t.services.title}</h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-service-desc text-gray-600 leading-relaxed">{t.services.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
