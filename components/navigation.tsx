"use client"

import React, { useState } from "react"
import Image from "next/image"
import { DropdownMenu } from "./dropdown-menu"
import { useLanguage } from "@/context/language-context"
import { ContactsModal } from "./ContactModal"
import { contacts } from "@/lib/dataContact"

export function Navigation() {
  const { t } = useLanguage()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const tentangKamiItems = [
    { label: t.about.companyProfile, href: "/about-us/company-profile" },
    { label: t.about.visionMission, href: "/about-us/vision-mission" },
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
    <>
    <nav className="bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image
                src="/images/damri-logo.png"
                alt="DAMRI Logo"
                width={140}
                height={45}
                className="h-12 w-auto"
                priority
              />
            </a>
          </div>

          <div className="flex items-center space-x-10">
            <a href="/" className="text-nav text-gray-700 hover:text-damri-blue transition-colors">
              {t.nav.home}
            </a>

            <DropdownMenu title={t.nav.about} items={tentangKamiItems} />
            <DropdownMenu title={t.nav.services} items={segmentasiLayananItems} />
            <DropdownMenu title={t.nav.publications} items={publikasiItems} />


             <button
                onClick={() => setIsModalOpen(true)}
                className="text-nav text-gray-700 hover:text-damri-blue transition-colors cursor-pointer bg-transparent border-none"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ContactsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contacts={contacts}
      />
   </>
)
}