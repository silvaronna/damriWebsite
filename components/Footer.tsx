"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronUp } from "react-icons/fa"
import { useLanguage } from "@/context/language-context"

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const { t } = useLanguage()

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      ref={footerRef}
      className={`transition-opacity transform duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Main Footer Section */}
      <div className="bg-[#224d8f] text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Kontak Kami */}
            <div className="md:col-span-1">
              <h4 className="font-bold mb-6 text-lg">{t.footer.contact}</h4>
              <div className="space-y-4">
                <p className="text-sm">{t.footer.needHelp}</p>
                <div className="flex items-start space-x-3">
                  <FaPhoneAlt className="text-white mt-1 flex-shrink-0" size={16} />
                  <div className="text-sm leading-relaxed">
                    <p>
                      {t.footer.helpCenter} : <strong>{t.header.phone}</strong>
                    </p>
                    <p>
                      {t.footer.whatsappBusiness}: <strong>(+62) 811-2110-0825</strong>
                    </p>
                    <p>
                      {t.footer.email}: <strong>{t.header.email}</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h5 className="font-bold mb-4 text-lg">{t.footer.headOffice}</h5>
                <address className="not-italic text-sm leading-relaxed">
                  Jln. Matraman Raya No 25,
                  <br />
                  Desa/Kelurahan Palmeriam Kec.
                  <br />
                  Matraman, Kota Adm Jakarta Timur,
                  <br />
                  Provinsi DKI Jakarta, 13140
                </address>
              </div>

              <div className="flex space-x-3 mt-8">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#224d8f] transition-all duration-300"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#224d8f] transition-all duration-300"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#224d8f] transition-all duration-300"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#224d8f] transition-all duration-300"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>

            {/* Tentang Kami */}
            <div>
              <h4 className="font-bold mb-6 text-lg">{t.footer.aboutUs}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.companyProfile}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.companyInfo}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.informationDisclosure}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.goodsServices}
                  </a>
                </li>
              </ul>
            </div>

            {/* Layanan */}
            <div>
              <h4 className="font-bold mb-6 text-lg">{t.footer.services}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.businessSegments}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.serviceStandards}
                  </a>
                </li>
              </ul>
            </div>

            {/* Tata Kelola Perusahaan */}
            <div>
              <h4 className="font-bold mb-6 text-lg">{t.footer.governance}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.policies}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.isoCertificate}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.gcgScore}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.financialReports}
                  </a>
                </li>
              </ul>
            </div>

            {/* Media dan Publikasi */}
            <div>
              <h4 className="font-bold mb-6 text-lg">{t.footer.mediaPublications}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.news}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.pressRelease}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:underline transition-all duration-200">
                    {t.footer.internalMagazine}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex justify-between items-center py-8">
          <img src="/images/logo_bumn.png" alt="Logo BUMN" className="h-12 w-auto" />
          <img src="/images/damri-logo.png" alt="Damri Logo" className="h-12 w-auto" />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#224d8f] text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex justify-between items-center py-6">
          <p className="text-sm">{t.footer.copyright}</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white text-[#224d8f] rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
            aria-label="Back to top"
          >
            <FaChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
