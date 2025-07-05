"use client"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

interface CompanyFact {
  label: string
  value: string
  icon: string
  color: string
}

export default function CompanyFacts() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const companyFacts: CompanyFact[] = [
    { label: "Pendirian", value: "25 November 1946", icon: "🏛️", color: "from-blue-500 to-blue-600" },
    { label: "Mulai Beroperasi", value: "Tahun 1946", icon: "🚌", color: "from-green-500 to-green-600" },
    { label: "CEO", value: "Setia N. Milatia Moemin", icon: "👨‍💼", color: "from-purple-500 to-purple-600" },
    { label: "Situs Web", value: "damri.co.id", icon: "🌐", color: "from-orange-500 to-orange-600" },
    { label: "Wilayah Layanan", value: "Seluruh Indonesia", icon: "🗺️", color: "from-red-500 to-red-600" },
    { label: "Jumlah Cabang", value: "25", icon: "🏢", color: "from-teal-500 to-teal-600" },
    { label: "Jumlah Trayek", value: "90", icon: "🛣️", color: "from-indigo-500 to-indigo-600" },
    { label: "Jumlah Armada", value: "598", icon: "🚐", color: "from-pink-500 to-pink-600" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate numbers
          const numberFacts = companyFacts.filter(
            (fact) => fact.label.includes("Jumlah") && !isNaN(Number.parseInt(fact.value)),
          )

          numberFacts.forEach((fact) => {
            const targetValue = Number.parseInt(fact.value)
            let currentValue = 0
            const increment = targetValue / 50

            const timer = setInterval(() => {
              currentValue += increment
              if (currentValue >= targetValue) {
                currentValue = targetValue
                clearInterval(timer)
              }
              setAnimatedValues((prev) => ({
                ...prev,
                [fact.label]: Math.floor(currentValue),
              }))
            }, 30)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getDisplayValue = (fact: CompanyFact) => {
    if (fact.label.includes("Jumlah") && !isNaN(Number.parseInt(fact.value))) {
      return animatedValues[fact.label]?.toString() || "0"
    }
    return fact.value
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Profil Singkat DAMRI
            </h2>
            <p className="text-lg text-gray-600">Data dan fakta penting tentang Perusahaan Umum DAMRI</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyFacts.map((fact, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${fact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <CardContent className="relative p-6 text-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {fact.icon}
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-3 text-sm">{fact.label}</h3>

                  <div
                    className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${fact.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                  >
                    {getDisplayValue(fact)}
                  </div>

                  {/* Animated border */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${fact.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />
                </CardContent>
              </Card>
            ))}
         </div>
        </div>
      </div>
    </section>
  )
}
