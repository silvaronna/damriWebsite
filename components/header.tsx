import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-8">
            <span className="text-header text-gray-600">(021) 1500 825</span>
            <span className="text-header text-gray-600">humas@damri.co.id</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Facebook className="w-4 h-4 text-gray-400 hover:text-damri-blue cursor-pointer" />
              <Twitter className="w-4 h-4 text-gray-400 hover:text-damri-blue cursor-pointer" />
              <Instagram className="w-4 h-4 text-gray-400 hover:text-damri-blue cursor-pointer" />
              <Linkedin className="w-4 h-4 text-gray-400 hover:text-damri-blue cursor-pointer" />
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  )
}
