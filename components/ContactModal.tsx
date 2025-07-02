"use client"

import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Contact } from "@/lib/dataContact"

interface ContactsModalProps {
  isOpen: boolean
  onClose: () => void
  contacts: Contact[]
}

const regionColors: Record<string, string> = {
  "All": "from-gray-400 to-gray-600",
  "Regional I": "from-red-400 to-red-600",
  "Regional II": "from-blue-400 to-blue-600",
  "Regional III": "from-green-400 to-green-600",
  "Regional IV": "from-purple-400 to-purple-600",
}

export function ContactsModal({ isOpen, onClose, contacts }: ContactsModalProps) {
  const [filterRegion, setFilterRegion] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  // Extract unique regions plus "All"
  const regions = useMemo(() => ["All", ...Array.from(new Set(contacts.map(c => c.region)))], [contacts])

  // To simulate loading effect on region change
  const onChangeRegion = (region: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setFilterRegion(region)
      setIsLoading(false)
    }, 250)
  }

  // Filter contacts by region
  const filteredByRegion = useMemo(() => {
    if (filterRegion === "All") return contacts
    return contacts.filter(c => c.region === filterRegion)
  }, [contacts, filterRegion])

  // Filter contacts by search query
  const filteredContacts = useMemo(() => {
    if (!searchQuery.trim()) return filteredByRegion
    const q = searchQuery.toLowerCase()
    return filteredByRegion.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.address.toLowerCase().includes(q) ||
      c.phone.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q)
    )
  }, [filteredByRegion, searchQuery])

  if (!isOpen) return null

  return (
    <motion.div
      key="modal-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
    >
      <motion.div
        key="modal"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
        className="relative max-w-4xl w-full max-h-[85vh] bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden flex flex-col"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 text-gray-600 hover:text-red-600 transition-colors text-4xl font-bold select-none z-50"
        >
          &times;
        </button>

        <header className="p-8 pt-14 text-center select-none">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-sm">
            Kantor Cabang DAMRI
          </h2>
          <p className="mt-4 text-lg font-semibold text-gray-700 drop-shadow-md transition-all select-text">
            {filterRegion === "All"
              ? `Menampilkan semua kontak (${contacts.length})`
              : `Menampilkan kontak di ${filterRegion} (${filteredByRegion.length})`}
          </p>
        </header>

        <nav className="flex flex-wrap justify-center gap-5 p-6 border-t border-white/30 bg-white/40 backdrop-blur-md">
          {regions.map(region => {
            const isActive = filterRegion === region
            const gradientClass = regionColors[region] ?? "from-blue-500 to-indigo-600"
            return (
              <motion.button
                key={region}
                onClick={() => onChangeRegion(region)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-7 py-3 rounded-full font-semibold text-sm cursor-pointer transition-all 
                  ${isActive 
                    ? `bg-gradient-to-r ${gradientClass} text-white shadow-xl border-2 border-white`
                    : `bg-white/70 text-gray-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500 hover:text-white shadow-md`
                  }`}
              >
                {region}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1.5 w-10 rounded-full bg-indigo-700 shadow-md"
                  />
                )}
              </motion.button>
            )
          })}
        </nav>

        <div className="p-6 border-b border-white/30 bg-white/60 backdrop-blur-md flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Cari nama, alamat, telepon, email..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-300 py-3 pl-14 pr-6 shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:border-transparent transition"
            />
            <svg
              className="w-6 h-6 absolute top-3.5 left-4 text-indigo-600 opacity-80 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5-5m0 0A7 7 0 1111 4a7 7 0 015 12z"></path>
            </svg>
          </div>
        </div>

        <section className="flex-1 overflow-y-auto p-8 bg-white/70 backdrop-blur-lg scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-200 rounded-b-3xl">
          <AnimatePresence>
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-36 rounded-xl bg-gray-200 animate-pulse" />
                ))}
              </motion.div>
            ) : filteredContacts.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center italic text-gray-400 select-none"
              >
                Tidak ada kontak yang sesuai pencarian dan filter.
              </motion.p>
            ) : (
              <motion.ul
                key="list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="grid gap-8 grid-cols-1 sm:grid-cols-2"
              >
                {filteredContacts.map(contact => (
                  <motion.li
                    key={contact.email}
                    whileHover={{ scale: 1.04, boxShadow: "0 20px 30px rgba(0,0,0,0.12)" }}
                    className="bg-white border border-indigo-300 rounded-2xl p-6 cursor-pointer relative shadow-md hover:shadow-xl transform transition-transform"
                    title={`Regional: ${contact.region}`}
                  >
                    <h3 className="font-extrabold text-indigo-700 text-2xl mb-2 select-text">{contact.name}</h3>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed mb-1 select-text"><span className="font-semibold">Alamat:</span> {contact.address}</p>
                    <p className="text-gray-700 text-sm mb-1 select-text"><span className="font-semibold">Telepon:</span> {contact.phone}</p>
                    <p className="text-gray-700 text-sm select-text"><span className="font-semibold">Email:</span> {contact.email}</p>
                    {/* Animated gradient bar bottom */}
                    <span
                      aria-hidden="true"
                      className={`block absolute bottom-0 left-0 h-1.5 rounded-b-2xl w-full bg-gradient-to-r ${regionColors[contact.region] ?? "from-blue-500 to-indigo-600"}`}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </section>
      </motion.div>
    </motion.div>
  )
}