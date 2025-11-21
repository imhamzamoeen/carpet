"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, MessageSquare } from 'lucide-react'

interface ServiceClientWrapperProps {
  children: React.ReactNode
  serviceTitle: string
}

export default function ServiceClientWrapper({
  children,
  serviceTitle
}: ServiceClientWrapperProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const trackLength = documentHeight - windowHeight
      const progress = (scrollTop / trackLength) * 100

      setScrollProgress(Math.min(progress, 100))

      // Show floating CTA after scrolling past hero
      setShowFloatingCTA(scrollTop > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-600 to-accent-blue transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Content */}
      {children}

      {/* Floating CTAs */}
      {showFloatingCTA && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          {/* Quote Button */}
          <Link href="/quote">
            <button
              className="group flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-primary-600/50 transition-all hover:scale-105"
              aria-label={`Get quote for ${serviceTitle}`}
            >
              <MessageSquare className="h-5 w-5" />
              <span className="font-semibold">Get Quote</span>
            </button>
          </Link>

          {/* Phone Button */}
          <a href="tel:+447405428259">
            <button
              className="group flex items-center gap-3 bg-success-600 hover:bg-success-700 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-success-600/50 transition-all hover:scale-105"
              aria-label="Call now"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Call Now</span>
            </button>
          </a>
        </div>
      )}
    </>
  )
}
