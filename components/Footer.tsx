"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

import "/styles/style.css"
import "/styles/globals.css"

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return
      const rect = footerRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight - 100) {
        setVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className={`footer-container text-white transition-opacity transform duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Bagian atas footer */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Kontak Kami */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-xl">Kontak Kami</h4>
            <p className="mb-4 text-lg">Butuh bantuan?</p>
            <div className="flex items-start mb-6">
              <FaPhoneAlt size={24} className="mt-1 mr-4" />
              <div>
                <p className="text-lg leading-relaxed">
                  Pusat bantuan : <strong>(021)1500-825</strong>
                  <br />
                  Whatsapp Business: <strong>(+62) 811-2110-0825</strong>
                  <br />
                  Email: <strong>humas@damri.co.id</strong>
                </p>
              </div>
            </div>
            <div className="mt-8">
              <p className="font-bold mb-4 text-xl">Kantor Pusat</p>
              <address className="not-italic text-lg leading-relaxed">
                Jln. Matraman Raya No 25,
                <br />
                Desa/Kelurahan Palmeriam Kec.
                <br />
                Matraman, Kota Adm Jakarta Timur,
                <br />
                Provinsi DKI Jakarta, 13140
              </address>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="#" aria-label="Facebook" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Tentang Kami */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Tentang Kami</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Profil Perusahaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Informasi Perusahaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Keterbukaan Informasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Barang dan Jasa
                </a>
              </li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Layanan</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Segmen Usaha
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Standar Pelayanan
                </a>
              </li>
            </ul>
          </div>

          {/* Tata Kelola Perusahaan */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Tata Kelola Perusahaan</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Pedoman & Kebijakan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Sertifikat ISO
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Score GCG
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Laporan Keuangan
                </a>
              </li>
            </ul>
          </div>

          {/* Media dan Publikasi */}
          <div>
            <h4 className="font-bold mb-6 text-xl">Media dan Publikasi</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Berita
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Siaran Pers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all duration-200">
                  Majalah Internal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bagian tengah dengan logo responsive dan menyesuaikan ukuran device */}
      <div className="footer-logo-section">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex justify-between items-center py-10">
          <img src="/images/logo_bumn.png" alt="Logo BUMN" className="logo-bumn" />
          <img src="/images/damri-logo.png" alt="Damri Logo" className="logo-damri" />
        </div>
      </div>

      {/* Bagian bawah footer */}
      <div className="footer-bottom text-white text-left py-8 text-base">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">© 2025 DAMRI . All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
