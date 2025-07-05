import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { missionPoints } from "../data/company-data"

export function MissionSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <Badge variant="outline" className="mb-1 text-blue-600 border-blue-600 text-2xl">
          MISI PERUSAHAAN
        </Badge>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-6">
          {missionPoints.map((mission, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{mission}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
