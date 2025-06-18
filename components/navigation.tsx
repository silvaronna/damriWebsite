import Image from "next/image"
import { DropdownMenu } from "./dropdown-menu"

const tentangKamiItems = [
  { label: "Profil Perusahaan", href: "/tentang/profil" },
  { label: "Visi & Misi", href: "/tentang/visi-misi" },
  { label: "Sejarah", href: "/tentang/sejarah" },
  { label: "Struktur Organisasi", href: "/tentang/struktur" },
  { label: "Direksi", href: "/tentang/direksi" },
  { label: "Penghargaan", href: "/tentang/penghargaan" },
]

const segmentasiLayananItems = [
  { label: "Angkutan Kota", href: "/layanan/angkutan-kota" },
  { label: "Angkutan Antar Kota", href: "/layanan/antar-kota" },
  { label: "Angkutan Lintas Batas", href: "/layanan/lintas-batas" },
  { label: "Angkutan Bandara", href: "/layanan/bandara" },
  { label: "Angkutan Pariwisata", href: "/layanan/pariwisata" },
  { label: "Angkutan Logistik", href: "/layanan/logistik" },
  { label: "Angkutan Perintis", href: "/layanan/perintis" },
]

const publikasiItems = [
  { label: "Berita Terkini", href: "/publikasi/berita" },
  { label: "Siaran Pers", href: "/publikasi/siaran-pers" },
  { label: "Laporan Tahunan", href: "/publikasi/laporan" },
  { label: "Majalah DAMRI", href: "/publikasi/majalah" },
  { label: "Galeri Foto", href: "/publikasi/galeri" },
  { label: "Video", href: "/publikasi/video" },
]

export function Navigation() {
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
              Beranda
            </a>

            <DropdownMenu title="Tentang Kami" items={tentangKamiItems} />
            <DropdownMenu title="Segmentasi Layanan" items={segmentasiLayananItems} />
            <DropdownMenu title="Publikasi" items={publikasiItems} />

            <a href="/kontak" className="text-nav text-gray-700 hover:text-damri-blue transition-colors">
              Kontak
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
