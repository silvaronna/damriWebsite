import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.png"
          alt="DAMRI Bus and Mobile App"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  )
}
