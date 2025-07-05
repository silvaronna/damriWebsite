import { TestimonialCard } from "./cards/testimonial-cards"


interface Props {
  testimonials: any[]
}

export function TestimonialsGrid({ testimonials }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  )
}