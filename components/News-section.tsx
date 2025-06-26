"use client";

import React from "react";
import "/styles/style.css";
import "/styles/globals.css";

const newsItems = [
  {
    src: "/images/News1.png",
    link: "https://www.damri.co.id/berita/libur-panjang-sekolah-dan-tahun-baru-islam-ke-wonosobo-bersama-damri-tarif-terjangkau-makin-mudah",
  },
  {
    src: "/images/News2.png",
    link: "https://www.damri.co.id/berita/libur-panjang-sekolah-dan-tahun-baru-islam-damri-diskon-tiket-hingga-20-untuk-rute-akap",
  },
  {
    src: "/images/News3.png",
    link: "https://www.damri.co.id/berita/damri-perkuat-infrastruktur-charging-station-untuk-mendukung-ekspansi-armada-bus-listrik-hingga-200-unit-di-tahun-2025",
  },
  {
    src: "/images/News4.png",
    link: "https://www.damri.co.id/berita/besok-damri-resmi-layani-rute-bogor-bandara-halim",
  },
  {
    src: "/images/News5.png",
    link: "https://www.damri.co.id/berita/ribuan-pelajar-terbantu-untuk-sekolah-damri-layani-angkutan-gratis-di-kabupaten-tangerang",
  },
  {
    src: "/images/News6.png",
    link: "https://www.damri.co.id/berita/damri-hadirkan-promo-spesial-potongan-rp50-ribu-untuk-tiket-pulang-pergi-rute-akap",
  },
  {
    src: "/images/News7.png",
    link: "https://www.damri.co.id/berita/damri-catat-rekor-pertumbuhan-penumpang-di-libur-iduladha-melonjak-176",
  },
  {
    src: "/images/News8.png",
    link: "https://www.damri.co.id/berita/damri-kedatangan-70-unit-bus-listrik-siap-dioperasikan-akhir-bulan-juni",
  },
];

const doubledNewsItems = [...newsItems, ...newsItems];

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="news-container">
        <div className="container mx-auto px-4">
          <h2 className="text-service-title text-gray-900 font-semibold leading-tight mb-4">
            Berita Terbaru
          </h2>
        </div>

        <div className="news-carousel-wrapper">
          <div className="news-carousel">
            {doubledNewsItems.map(({ src, link }, index) => (
              <a
                key={index}
                className="news-slide-item"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={src} alt={`Berita ${index + 1}`} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
