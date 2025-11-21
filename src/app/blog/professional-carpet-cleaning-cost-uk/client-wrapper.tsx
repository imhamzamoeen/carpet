"use client"

import { useState, useEffect, ReactNode } from 'react'
import { Calculator, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

interface ClientWrapperProps {
  children: ReactNode
  blogTitle: string
}

export default function ClientWrapper({ children, blogTitle }: ClientWrapperProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-600 to-accent-blue transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <Link href="/quote">
          <Button className="shadow-lg rounded-full w-14 h-14 p-0 bg-primary-600 hover:bg-primary-700">
            <Calculator className="h-6 w-6" />
          </Button>
        </Link>
        <a href="tel:+447405428259">
          <Button className="shadow-lg rounded-full w-14 h-14 p-0 bg-white text-primary-600 hover:bg-gray-100 border-2 border-primary-600">
            <Phone className="h-6 w-6" />
          </Button>
        </a>
      </div>

      {/* Main Content */}
      {children}
    </>
  )
}
