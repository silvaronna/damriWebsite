export interface Testimonial {
  id: number
  name: string
  position: string
  department: string
  location: string
  date: string
  rating: number
  testimonial: string
  avatar: string
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    position: "Pengguna Layanan Bus Antar Kota",
    department: "Pelanggan DAMRI",
    location: "Rute Jakarta - Bandung",
    date: "21 Juni 2025",
    rating: 5,
    testimonial:
      "Pelayanan DAMRI sangat memuaskan! Bus selalu tepat waktu, kondisi kendaraan bersih dan nyaman. Sopir dan kondektur sangat ramah dan profesional. Perjalanan Jakarta-Bandung jadi lebih menyenangkan.",
    avatar: "/placeholder.svg?height=60&width=60&text=BS",
  },
]
