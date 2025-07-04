"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface DropdownItem {
  label: string
  href: string
}

interface DropdownMenuProps {
  title: string
  items: DropdownItem[]
}

export function DropdownMenu({ title, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  let hoverTimeout: NodeJS.Timeout

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsOpen(false)
    }, 100) // Smooth delay
  }

  const leftItems = items.slice(0, Math.ceil(items.length / 2))
  const rightItems = items.slice(Math.ceil(items.length / 2))

  return (
    <div
      className="relative z-50 inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 text-nav text-gray-700 hover:text-damri-blue transition-colors">
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                {leftItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-submenu text-gray-600 hover:text-damri-blue transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                {rightItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-submenu text-gray-600 hover:text-damri-blue transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
