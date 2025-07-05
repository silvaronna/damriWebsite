import { Button } from "@/components/ui/button"

interface Props {
  onAdd: () => void
}

export function TestimonialsEmpty({ onAdd }: Props) {
  return (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">Belum ada testimoni untuk filter ini.</p>
      <Button onClick={onAdd} className="mt-4">
        Jadilah yang pertama memberikan testimoni
      </Button>
    </div>
  )
}