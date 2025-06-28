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
  news: {
    title: string
    description: string
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
  download: {
    title: string
    description: string
    appStore: string
    googlePlay: string
    downloadNow: string
  }
  footer: {
    contact: string
    needHelp: string
    helpCenter: string
    whatsappBusiness: string
    email: string
    headOffice: string
    address: string
    aboutUs: string
    companyProfile: string
    companyInfo: string
    informationDisclosure: string
    goodsServices: string
    services: string
    businessSegments: string
    serviceStandards: string
    governance: string
    policies: string
    isoCertificate: string
    gcgScore: string
    financialReports: string
    mediaPublications: string
    news: string
    pressRelease: string
    internalMagazine: string
    copyright: string
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
      title: "Layanan Kami",
      description:
        "DAMRI menyediakan berbagai layanan transportasi untuk memenuhi kebutuhan perjalanan Anda, mulai dari angkutan kota hingga pariwisata.",
      cityTransport: "Angkutan Kota",
      intercityTransport: "Angkutan Antar Kota",
      crossBorderTransport: "Angkutan Lintas Batas",
      airportTransport: "Angkutan Bandara",
      tourismTransport: "Angkutan Pariwisata",
      logisticsTransport: "Angkutan Logistik",
      pioneerTransport: "Angkutan Perintis",
    },
    news: {
      title: "Berita Terbaru",
      description:
        "Ikuti perkembangan terkini seputar layanan DAMRI, inovasi transportasi, dan berbagai program unggulan yang kami hadirkan untuk masyarakat Indonesia.",
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
    download: {
      title: "Download & Enjoy",
      description:
        "Unduh aplikasi kami untuk cara tercepat dan ternyaman untuk memesan tiket Bus Damri. Kemudahan yang akan anda dapatkan jika menginstall Damri apps di Playstore.",
      appStore: "App Store",
      googlePlay: "Google Play",
      downloadNow: "Download Now",
    },
    footer: {
      contact: "Kontak Kami",
      needHelp: "Butuh bantuan?",
      helpCenter: "Pusat bantuan",
      whatsappBusiness: "Whatsapp Business",
      email: "Email",
      headOffice: "Kantor Pusat",
      address:
        "Jln. Matraman Raya No 25, Desa/Kelurahan Palmeriam Kec. Matraman, Kota Adm Jakarta Timur, Provinsi DKI Jakarta, 13140",
      aboutUs: "Tentang Kami",
      companyProfile: "Profil Perusahaan",
      companyInfo: "Informasi Perusahaan",
      informationDisclosure: "Keterbukaan Informasi",
      goodsServices: "Barang dan Jasa",
      services: "Layanan",
      businessSegments: "Segmen Usaha",
      serviceStandards: "Standar Pelayanan",
      governance: "Tata Kelola Perusahaan",
      policies: "Pedoman & Kebijakan",
      isoCertificate: "Sertifikat ISO",
      gcgScore: "Score GCG",
      financialReports: "Laporan Keuangan",
      mediaPublications: "Media dan Publikasi",
      news: "Berita",
      pressRelease: "Siaran Pers",
      internalMagazine: "Majalah Internal",
      copyright: "© 2025 DAMRI . All rights reserved",
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
      title: "Our Services",
      description:
        "DAMRI provides various transportation services to meet your travel needs, from city transport to tourism.",
      cityTransport: "City Transport",
      intercityTransport: "Intercity Transport",
      crossBorderTransport: "Cross Border Transport",
      airportTransport: "Airport Transport",
      tourismTransport: "Tourism Transport",
      logisticsTransport: "Logistics Transport",
      pioneerTransport: "Pioneer Transport",
    },
    news: {
      title: "Latest News",
      description:
        "Stay updated with the latest developments around DAMRI services, transportation innovations, and various flagship programs we present for the Indonesian people.",
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
    download: {
      title: "Download & Enjoy",
      description:
        "Download our app for the fastest and most comfortable way to book Damri Bus tickets. The convenience you will get if you install the Damri app on Playstore.",
      appStore: "App Store",
      googlePlay: "Google Play",
      downloadNow: "Download Now",
    },
    footer: {
      contact: "Contact Us",
      needHelp: "Need help?",
      helpCenter: "Help center",
      whatsappBusiness: "Whatsapp Business",
      email: "Email",
      headOffice: "Head Office",
      address:
        "Jln. Matraman Raya No 25, Palmeriam Village, Matraman District, East Jakarta Administrative City, DKI Jakarta Province, 13140",
      aboutUs: "About Us",
      companyProfile: "Company Profile",
      companyInfo: "Company Information",
      informationDisclosure: "Information Disclosure",
      goodsServices: "Goods and Services",
      services: "Services",
      businessSegments: "Business Segments",
      serviceStandards: "Service Standards",
      governance: "Corporate Governance",
      policies: "Guidelines & Policies",
      isoCertificate: "ISO Certificate",
      gcgScore: "GCG Score",
      financialReports: "Financial Reports",
      mediaPublications: "Media and Publications",
      news: "News",
      pressRelease: "Press Release",
      internalMagazine: "Internal Magazine",
      copyright: "© 2025 DAMRI . All rights reserved",
    },
  },
}
