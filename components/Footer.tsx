"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "/styles/style.css";
import "/styles/globals.css";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer-container text-white transition-opacity transform duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >

      {/* Bagian atas footer */}
      <div className="w-full py-16 grid grid-cols-1 md:grid-cols-6 gap-2">
        {/* Kontak Kami */}
        <div className="md:col-span-2 py-0 px-16">
          <h4 className="font-bold mb-4 text-lg">Kontak Kami</h4>
          <p className="mb-2 text-lg">Butuh bantuan?</p>
          <div className="flex items-center mb-2">
            <FaPhoneAlt size={24} />
            <div className="ml-2">
              <p className="text-lg leading-relaxed">
                Pusat bantuan : <strong>(021)1500-825</strong>
                <br />
                Whatsapp Business: <strong>(+62) 811-2110-0825</strong>
                <br />
                Email: <strong>humas@damri.co.id</strong>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2 text-xl">Kantor Pusat</p>
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

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="social-icon"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Tentang Kami */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Tentang Kami</h4>
          <ul className="space-y-2 text-base">
            <li>
              <a href="#" className="hover:underline">
                Profil Perusahaan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Informasi Perusahaan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Keterbukaan Informasi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Barang dan Jasa
              </a>
            </li>
          </ul>
        </div>

        {/* Layanan */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Layanan</h4>
          <ul className="space-y-2 text-base">
            <li>
              <a href="#" className="hover:underline">
                Segmen Usaha
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Standar Pelayanan
              </a>
            </li>
          </ul>
        </div>

        {/* Tata Kelola Perusahaan */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Tata Kelola Perusahaan</h4>
          <ul className="space-y-2 text-base">
            <li>
              <a href="#" className="hover:underline">
                Pedoman & Kebijakan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sertifikat ISO
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Score GCG
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Laporan Keuangan
              </a>
            </li>
          </ul>
        </div>

        {/* Media dan Publikasi */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Media dan Publikasi</h4>
          <ul className="space-y-2 text-base">
            <li>
              <a href="#" className="hover:underline">
                Berita
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Siaran Pers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Majalah Internal
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bagian tengah dengan logo responsive dan menyesuaikan ukuran device */}
      <div className="footer-logo-section">
        <img
          src="/images/logo_bumn.png"
          alt="Logo BUMN"
          className="logo-bumn"
        />
        <img
          src="/images/damri-logo.png"
          alt="Damri Logo"
          className="logo-damri"
        />
      </div>

      {/* Bagian bawah footer */}
      <div className="footer-bottom text-white text-left px-16 py-6 text-base">
        © 2025 DAMRI . All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
