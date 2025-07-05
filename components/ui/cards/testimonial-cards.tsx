import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { RealTestimonial } from "../data/testimonial-types"

interface TestimonialCardProps {
  testimonial: RealTestimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  return (
    <Card className="h-full shadow-lg border-0 bg-white hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-lg mb-1">{testimonial.name}</h3>
            <Badge variant="outline" className="mb-2 text-xs capitalize">
              {testimonial.serviceType.replace("-", " ")}
            </Badge>
            <p className="text-sm text-gray-600 mb-1">Rute: {testimonial.route}</p>
            <p className="text-xs text-gray-500">{new Date(testimonial.createdAt).toLocaleDateString("id-ID")}</p>
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
          {testimonial.testimonial}
        </p>

        <div className="flex items-center gap-1">{renderStars(testimonial.rating)}</div>
      </CardContent>
    </Card>
  )
}
