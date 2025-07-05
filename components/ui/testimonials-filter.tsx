import { Badge } from "@/components/ui/badge"

interface Props {
  serviceTypes: { value: string; label: string }[]
  activeFilter: string
  onFilterChange: (val: string) => void
}

export function TestimonialsFilter({ serviceTypes, activeFilter, onFilterChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-4 mb-8">
      {serviceTypes.map((type) => (
        <Badge
          key={type.value}
          variant={activeFilter === type.value ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => onFilterChange(type.value)}
        >
          {type.label}
        </Badge>
      ))}
    </div>
  )
}