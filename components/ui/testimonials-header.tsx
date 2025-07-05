import { Plus, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  loading: boolean
  onAdd: () => void
  onRefresh: () => void
}

export function TestimonialsHeader({ loading, onAdd, onRefresh }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Testimoni Pengguna Layanan
          {loading && <RefreshCw className="inline-block ml-2 w-5 h-5 animate-spin" />}
        </h2>
        <p className="text-gray-600">Real-time testimonials dari pengguna DAMRI</p>
      </div>
      <div className="flex gap-2">
        <Button onClick={onAdd} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Tulis Testimoni
        </Button>
        <Button variant="outline" onClick={onRefresh}>
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}