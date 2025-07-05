import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { companyInfo } from "../data/company-data"

export function VisionSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600 text-2xl">
          VISI PERUSAHAAN
        </Badge>
      </div>
      <Card className="max-w-4xl mx-auto shadow-lg border-l-4 border-l-blue-600">
        <CardContent className="p-8">
          <p className="text-xl text-gray-700 leading-relaxed text-center font-medium">"{companyInfo.vision}"</p>
        </CardContent>
      </Card>
    </section>
  )
}
