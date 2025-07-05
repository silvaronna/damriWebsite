import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  pagination: {
    currentPage: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
  currentPage: number
  onPageChange: (page: number) => void
}

export function TestimonialsPagination({ pagination, currentPage, onPageChange }: Props) {
  return (
    <div className="flex justify-center items-center mt-8 gap-4">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!pagination.hasPrev}
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </Button>

      <span className="text-sm text-gray-600">
        Page {pagination.currentPage} of {pagination.totalPages}
      </span>

      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!pagination.hasNext}
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  )
}