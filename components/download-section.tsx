"use client"
import { motion } from "framer-motion"
import { FaApple, FaGooglePlay } from "react-icons/fa"
import { useLanguage } from "@/context/language-context"

export function DownloadSection() {
  const { language } = useLanguage()

  const downloadText = {
    id: {
      title: "Download & Enjoy",
      description:
        "Unduh aplikasi kami untuk cara tercepat dan ternyaman untuk memesan tiket Bus Damri. Kemudahan yang akan anda dapatkan jika menginstall Damri apps di Playstore.",
      appStore: "App Store",
      downloadNow: "Download Now",
      googlePlay: "Google Play",
    },
    en: {
      title: "Download & Enjoy",
      description:
        "Download our app for the fastest and most comfortable way to book Damri Bus tickets. The convenience you will get if you install the Damri app on Playstore.",
      appStore: "App Store",
      downloadNow: "Download Now",
      googlePlay: "Google Play",
    },
  }

  const t = downloadText[language]

  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t.title}</h2>

              <p className="text-lg md:text-xl leading-relaxed mb-10 text-blue-100">{t.description}</p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                {/* App Store Button */}
                <motion.a
                  href="#"
                  className="flex items-center justify-start px-8 py-5 rounded-xl border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 transition-all duration-300 min-w-[200px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaApple className="text-3xl mr-4 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-base font-semibold leading-tight">{t.appStore}</div>
                    <div className="text-sm opacity-90 leading-tight">{t.downloadNow}</div>
                  </div>
                </motion.a>

                {/* Google Play Button */}
                <motion.a
                  href="#"
                  className="flex items-center justify-start px-8 py-5 rounded-xl border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 transition-all duration-300 min-w-[200px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGooglePlay className="text-3xl mr-4 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-base font-semibold leading-tight">{t.googlePlay}</div>
                    <div className="text-sm opacity-90 leading-tight">{t.downloadNow}</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="/images/download-illustration.png"
                  alt="Mobile App Illustration"
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-0 w-12 h-12 bg-white rounded-full opacity-10 animate-pulse delay-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
