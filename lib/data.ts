import type { ServiceItem } from './types';

export const services: ServiceItem[] = [
  {
    id: 'lintas-negara',
    title: "Angkutan Lintas Negara",
    url: "https://www.damri.co.id/layanan/angkutan-lintas-batas",
    image: "https://www.damri.co.id/frontend/assets/img/sub-bisnis/lintasbatas.jpeg",
    description: "Perjalanan nyaman ke berbagai kota di Indonesia dengan armada modern dan fasilitas lengkap.",
    destinations: [
      { id: 'jkt-smr', name: 'Jakarta - Medan', price: 350000, duration: '24 jam', departureTimes: ['08:00', '20:00'] },
      { id: 'jkt-sby', name: 'Jakarta - Surabaya', price: 250000, duration: '12 jam', departureTimes: ['09:00', '21:00'] },
      { id: 'jkt-bdo', name: 'Jakarta - Bandung', price: 100000, duration: '3 jam', departureTimes: ['06:00', '12:00', '18:00'] },
      { id: 'jkt-yk', name: 'Jakarta - Yogyakarta', price: 200000, duration: '8 jam', departureTimes: ['10:00', '22:00'] },
      { id: 'jkt-bali', name: 'Jakarta - Denpasar', price: 400000, duration: '24 jam', departureTimes: ['09:00'] }
    ]
  },
  {
    id: 'perintis',
    title: "Angkutan Perintis",
    url: "https://www.damri.co.id/layanan/angkutan-perintis",
    image: "https://www.damri.co.id/frontend/assets/img/sub-bisnis/perintis.jpeg",
    description: "Melayani rute-rute perintis yang menghubungkan daerah terpencil dengan pusat kota.",
    destinations: [
      { id: 'pku-tpi', name: 'Pekanbaru - Tembilahan', price: 120000, duration: '5 jam', departureTimes: ['07:00', '13:00'] },
      { id: 'pdu-tsi', name: 'Padang - Tapan Selatan', price: 150000, duration: '6 jam', departureTimes: ['08:00'] },
    ]
  },
  {
    id: 'kota',
    title: "Angkutan Kota",
    url: "https://www.damri.co.id/layanan/angkutan-kota",
    image: "https://www.damri.co.id/frontend/assets/img/sub-bisnis/kota.jpeg",
    description: "Solusi transportasi umum yang nyaman dan terjangkau untuk mobilitas di dalam kota.",
    destinations: [
      { id: 'blokm-kp', name: 'Blok M - Kota', price: 3500, duration: '45 menit', departureTimes: ['05:00', '22:00', 'setiap 15 menit'] },
      { id: 'pgr-kby', name: 'Pondok Gede - Kebayoran', price: 5000, duration: '1 jam', departureTimes: ['05:30', '21:30', 'setiap 30 menit'] },
    ]
  },
  {
    id: 'bandara',
    title: "Angkutan Bandara",
    url: "https://www.damri.co.id/layanan/angkutan-bandara",
    image: "https://www.damri.co.id/frontend/assets/img/sub-bisnis/bandara.png",
    description: "Layanan antar-jemput bandara yang tepat waktu dengan kenyamanan maksimal.",
    destinations: [
      { id: 'cgk-bd', name: 'Bandara CGK - Blok M', price: 40000, duration: '45 menit', departureTimes: ['03:00', '24:00', 'setiap jam'] },
      { id: 'hlp-gm', name: 'Bandara HLP - Gambir', price: 30000, duration: '30 menit', departureTimes: ['04:00', '23:00', 'setiap 30 menit'] },
    ]
  },
  {
    id: 'pariwisata',
    title: "Angkutan Pariwisata",
    url: "https://www.damri.co.id/layanan/angkutan-pariwisata",
    image: "https://www.damri.co.id/frontend/assets/img/sub-bisnis/kspn.jpeg",
    description: "Jelajahi destinasi wisata favorit dengan armada nyaman dan sopir profesional.",
    destinations: [
      { id: 'jkt-borobudur', name: 'Jakarta - Candi Borobudur', price: 150000, duration: '10 jam', departureTimes: ['06:00'] },
      { id: 'bali-ubud', name: 'Kuta - Ubud', price: 75000, duration: '1.5 jam', departureTimes: ['08:00', '13:00'] },
    ]
  },
  {
    id: 'logistik',
    title: "Angkutan Logistik",
    url: "https://www.damri.co.id/layanan/angkutan-logistik",
    image: "https://www.damri.co.id/frontend/assets/img/sub-bisnis/logistik.jpeg",
    description: "Solusi pengiriman barang yang aman dan efisien ke seluruh penjuru negeri.",
    destinations: [
      { id: 'jkt-sby-cargo', name: 'Jakarta - Surabaya (Cargo)', price: 300000, duration: '24-48 jam', departureTimes: ['Setiap Hari'] },
      { id: 'bdg-jkt-cargo', name: 'Bandung - Jakarta (Cargo)', price: 150000, duration: '8-12 jam', departureTimes: ['Setiap Hari'] },
    ]
  }
];
