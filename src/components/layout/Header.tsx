/**
 * Header Component
 *
 * Main site header with navigation
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glassmorphic Navbar - Dark Neomorphic Style */}
      <div className="glass-surface border-b border-white/10 backdrop-blur-xl">
        <nav className="container-custom" aria-label="Top">
          <div className="flex h-[70px] items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-yellow to-accent-coral shadow-glow-accent transition-all duration-300 group-hover:scale-110">
                  <span className="text-xl font-bold text-black font-grotesk">FF</span>
                </div>
                <span className="text-xl font-bold text-text-primary font-grotesk hidden sm:block">
                  Fresh Fiber
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isActive(item.href)
                      ? 'text-text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-coral to-accent-yellow rounded-full" />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-coral to-accent-yellow rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              <Link href="tel:+441234567890">
                <button className="btn-glass text-sm">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </button>
              </Link>
              <Link href="/quote">
                <button className="btn-primary text-sm">
                  Get Free Quote
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl p-2.5 text-text-primary bg-surface-glass border border-white/10 hover:bg-white/15 transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/10 mt-2">
              <div className="space-y-1 pb-4 pt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-surface-card text-text-accent border border-text-accent/20'
                        : 'text-text-secondary hover:bg-surface-glass hover:text-text-primary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 space-y-3 px-4">
                  <Link href="tel:+441234567890" className="block">
                    <button className="btn-glass w-full justify-center">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Call Now
                    </button>
                  </Link>
                  <Link href="/quote" className="block">
                    <button className="btn-primary w-full justify-center">
                      Get Free Quote
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
