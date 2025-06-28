import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-[700px] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 h-full">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.png"
            alt="DAMRI Bus and Mobile App"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}
