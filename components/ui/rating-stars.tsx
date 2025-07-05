"use client"

interface RatingStarsProps {
  rating: number
  onRate: (rating: number) => void
}

export function RatingStars({ rating, onRate }: RatingStarsProps) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: 5 }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onRate(index + 1)}
          className={`text-4xl ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          } hover:text-yellow-400 cursor-pointer`}
        >
          ★
        </button>
      ))}
    </div>
  )
}
