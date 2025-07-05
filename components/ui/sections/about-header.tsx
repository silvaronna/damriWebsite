"use client"

interface AboutHeaderProps {
  isVisible: boolean
}

export default function AboutHeader({ isVisible }: AboutHeaderProps) {
  return (
    <div
      className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Tentang DAMRI
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Melayani transportasi Indonesia dengan dedikasi tinggi selama lebih dari 7 dekade
      </p>
    </div>
  )
}
