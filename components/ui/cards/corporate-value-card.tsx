import { Card, CardContent } from "@/components/ui/card"
import type { CorporateValue } from "../data/corporate-values"

interface CorporateValueCardProps {
  value: CorporateValue
}

export function CorporateValueCard({ value }: CorporateValueCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 bg-white">
      <CardContent className="p-8 text-center">
        <div className={`text-6xl font-bold ${value.color} mb-4`}>{value.letter}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
      </CardContent>
    </Card>
  )
}
