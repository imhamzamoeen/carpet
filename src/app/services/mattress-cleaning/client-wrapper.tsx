"use client"

import { useState, useEffect, ReactNode } from 'react'
import { Calculator, Phone, ArrowUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui"

interface ClientWrapperProps {
  children: ReactNode
  pageTitle: string
}

export default function ClientWrapper({ children, pageTitle }: ClientWrapperProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const updateScroll = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx * 100
      setScrollProgress(scrolled)
      setShowScrollTop(scrollPx > 500)
    }

    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Content */}
      {children}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <Link href="/quote">
          <Button className="rounded-full shadow-lg bg-yellow-400 text-blue-900 hover:bg-yellow-500 px-6 whitespace-nowrap transform hover:scale-105 transition-all duration-300">
            <Calculator className="mr-2 h-4 w-4" />
            Get Quote
          </Button>
        </Link>

        <a href="tel:07405428259" className="lg:hidden">
          <Button className="rounded-full shadow-lg bg-green-600 text-white hover:bg-green-700 px-6 whitespace-nowrap transform hover:scale-105 transition-all duration-300">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </a>

        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="rounded-full shadow-lg bg-white text-blue-600 hover:bg-gray-50 w-12 h-12 p-0 border-2 border-blue-600"
            title="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}
      </div>
    </>
  )
}
