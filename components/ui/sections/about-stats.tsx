"use client"
import { Users, Building2, MapPin, Award } from "lucide-react"

interface AboutStatsProps {
  isVisible: boolean
}

export default function AboutStats({ isVisible }: AboutStatsProps) {
  const stats = [
    { icon: Users, label: "Penumpang/Tahun", value: "50M+", color: "text-blue-600" },
    { icon: Building2, label: "Kantor Cabang", value: "25", color: "text-green-600" },
    { icon: MapPin, label: "Rute Aktif", value: "90", color: "text-purple-600" },
    { icon: Award, label: "Tahun Pengalaman", value: "77+", color: "text-orange-600" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
          <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
