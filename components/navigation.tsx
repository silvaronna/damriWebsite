"use client"

import Image from "next/image"
import { DropdownMenu } from "./dropdown-menu"
import { useLanguage } from "@/context/language-context"

export function Navigation() {
  const { t } = useLanguage()

  const tentangKamiItems = [
    { label: t.about.companyProfile, href: "/tentang/profil" },
    { label: t.about.visionMission, href: "/tentang/visi-misi" },
    { label: t.about.history, href: "/tentang/sejarah" },
    { label: t.about.organization, href: "/tentang/struktur" },
    { label: t.about.directors, href: "/tentang/direksi" },
    { label: t.about.awards, href: "/tentang/penghargaan" },
  ]

  const segmentasiLayananItems = [
    { label: t.services.cityTransport, href: "/layanan/angkutan-kota" },
    { label: t.services.intercityTransport, href: "/layanan/antar-kota" },
    { label: t.services.crossBorderTransport, href: "/layanan/lintas-batas" },
    { label: t.services.airportTransport, href: "/layanan/bandara" },
    { label: t.services.tourismTransport, href: "/layanan/pariwisata" },
    { label: t.services.logisticsTransport, href: "/layanan/logistik" },
    { label: t.services.pioneerTransport, href: "/layanan/perintis" },
  ]

  const publikasiItems = [
    { label: t.publications.news, href: "/publikasi/berita" },
    { label: t.publications.pressRelease, href: "/publikasi/siaran-pers" },
    { label: t.publications.annualReport, href: "/publikasi/laporan" },
    { label: t.publications.magazine, href: "/publikasi/majalah" },
    { label: t.publications.gallery, href: "/publikasi/galeri" },
    { label: t.publications.video, href: "/publikasi/video" },
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image
                src="/images/damri-logo.png"
                alt="DAMRI Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </a>
          </div>

          <div className="flex items-center space-x-8">
            <a href="/" className="text-nav text-gray-700 hover:text-damri-blue transition-colors">
              {t.nav.home}
            </a>

            <DropdownMenu title={t.nav.about} items={tentangKamiItems} />
            <DropdownMenu title={t.nav.services} items={segmentasiLayananItems} />
            <DropdownMenu title={t.nav.publications} items={publikasiItems} />

            <a href="/kontak" className="text-nav text-gray-700 hover:text-damri-blue transition-colors">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
