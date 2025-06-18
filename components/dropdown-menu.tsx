"use client"

import { useState } from "react"
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

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center gap-1 text-nav text-gray-700 hover:text-damri-blue transition-colors">
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block text-submenu text-gray-600 hover:text-damri-blue transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block text-submenu text-gray-600 hover:text-damri-blue transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
