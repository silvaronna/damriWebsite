"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface TestimonialSuccessProps {
  onReset: () => void
}

export function TestimonialSuccess({ onReset }: TestimonialSuccessProps) {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8 text-center">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Terima Kasih!</h3>
        <p className="text-gray-600 mb-4">
          Testimoni Anda telah berhasil dikirim 
        </p>
        <Button onClick={onReset}>Kirim Testimoni Lain</Button>
      </CardContent>
    </Card>
  )
}
