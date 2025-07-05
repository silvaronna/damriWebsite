import { type NextRequest, NextResponse } from "next/server"

// Simulasi database - dalam real app gunakan database seperti Supabase, Neon, dll
const testimonials: any[] = [
  {
    id: "1",
    name: "Budi Santoso",
    email: "budi@email.com",
    serviceType: "antar-kota",
    route: "Jakarta - Bandung",
    rating: 5,
    testimonial: "Pelayanan DAMRI sangat memuaskan! Bus selalu tepat waktu.",
    isVerified: true,
    isApproved: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "6")
  const serviceType = searchParams.get("serviceType")
  const showPending = searchParams.get("showPending") === "true"

  try {
    // Filter testimonial - untuk testing, tampilkan semua atau hanya yang approved
    let filteredTestimonials = showPending
      ? testimonials // Tampilkan semua untuk testing
      : testimonials.filter((t) => t.isApproved) // Hanya yang approved

    // Filter berdasarkan service type jika ada
    if (serviceType && serviceType !== "all") {
      filteredTestimonials = filteredTestimonials.filter((t) => t.serviceType === serviceType)
    }

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedTestimonials = filteredTestimonials.slice(startIndex, endIndex)

    return NextResponse.json({
      testimonials: paginatedTestimonials,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredTestimonials.length / limit),
        totalItems: filteredTestimonials.length,
        hasNext: endIndex < filteredTestimonials.length,
        hasPrev: page > 1,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newTestimonial = {
      id: Date.now().toString(),
      ...body,
      isVerified: false,
      isApproved: true, // AUTO-APPROVE untuk testing - ubah ke false untuk production
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    testimonials.push(newTestimonial)

    return NextResponse.json({
      message: "Testimoni berhasil dikirim dan langsung ditampilkan",
      testimonial: newTestimonial,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 })
  }
}
