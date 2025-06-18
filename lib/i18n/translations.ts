export type Language = "id" | "en"

export interface Translations {
  header: {
    phone: string
    email: string
  }
  nav: {
    home: string
    about: string
    services: string
    publications: string
    contact: string
  }
  about: {
    companyProfile: string
    visionMission: string
    history: string
    organization: string
    directors: string
    awards: string
  }
  services: {
    title: string
    description: string
    cityTransport: string
    intercityTransport: string
    crossBorderTransport: string
    airportTransport: string
    tourismTransport: string
    logisticsTransport: string
    pioneerTransport: string
  }
  publications: {
    news: string
    pressRelease: string
    annualReport: string
    magazine: string
    gallery: string
    video: string
  }
  hero: {
    ticketBooking: string
    easy: string
    fast: string
    comfortable: string
    with: string
    apps: string
    download: string
  }
}

export const translations: Record<Language, Translations> = {
  id: {
    header: {
      phone: "(021) 1500 825",
      email: "humas@damri.co.id",
    },
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      services: "Segmentasi Layanan",
      publications: "Publikasi",
      contact: "Kontak",
    },
    about: {
      companyProfile: "Profil Perusahaan",
      visionMission: "Visi & Misi",
      history: "Sejarah",
      organization: "Struktur Organisasi",
      directors: "Direksi",
      awards: "Penghargaan",
    },
    services: {
      title: "Layanan",
      description:
        "Saat ini Perum Damri memiliki 7 Layanan dengan tujuan untuk meningkatkan kinerja layanan perusahaan diantaranya sebagai berikut:",
      cityTransport: "Angkutan Kota",
      intercityTransport: "Angkutan Antar Kota",
      crossBorderTransport: "Angkutan Lintas Batas",
      airportTransport: "Angkutan Bandara",
      tourismTransport: "Angkutan Pariwisata",
      logisticsTransport: "Angkutan Logistik",
      pioneerTransport: "Angkutan Perintis",
    },
    publications: {
      news: "Berita Terkini",
      pressRelease: "Siaran Pers",
      annualReport: "Laporan Tahunan",
      magazine: "Majalah DAMRI",
      gallery: "Galeri Foto",
      video: "Video",
    },
    hero: {
      ticketBooking: "Pesan Tiket",
      easy: "Mudah",
      fast: "Cepat",
      comfortable: "dan Nyaman",
      with: "dengan",
      apps: "DAMRI Apps",
      download: "Download Now!",
    },
  },
  en: {
    header: {
      phone: "(021) 1500 825",
      email: "humas@damri.co.id",
    },
    nav: {
      home: "Home",
      about: "About Us",
      services: "Service Segments",
      publications: "Publications",
      contact: "Contact",
    },
    about: {
      companyProfile: "Company Profile",
      visionMission: "Vision & Mission",
      history: "History",
      organization: "Organization Structure",
      directors: "Directors",
      awards: "Awards",
    },
    services: {
      title: "Services",
      description:
        "Currently, Perum Damri has 7 Services with the aim of improving the company's service performance, including the following:",
      cityTransport: "City Transport",
      intercityTransport: "Intercity Transport",
      crossBorderTransport: "Cross Border Transport",
      airportTransport: "Airport Transport",
      tourismTransport: "Tourism Transport",
      logisticsTransport: "Logistics Transport",
      pioneerTransport: "Pioneer Transport",
    },
    publications: {
      news: "Latest News",
      pressRelease: "Press Release",
      annualReport: "Annual Report",
      magazine: "DAMRI Magazine",
      gallery: "Photo Gallery",
      video: "Video",
    },
    hero: {
      ticketBooking: "Book Tickets",
      easy: "Easy",
      fast: "Fast",
      comfortable: "and Comfortable",
      with: "with",
      apps: "DAMRI Apps",
      download: "Download Now!",
    },
  },
}
