import type React from "react"
interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">{children}</div>
}
