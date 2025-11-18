/**
 * Hero Section Component - Dark Neomorphic Design
 *
 * Two-column layout with gradient background mesh
 * Left: Bold text with accent words + pill button + avatar group
 * Right: Stacked ellipse-masked images with glow
 */

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative hero-spacing overflow-hidden">
      {/* Large radial gradient glows - Orange-pink-purple hues */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial-coral opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial-purple opacity-30 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN - Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-surface-glass border border-white/10 backdrop-blur-sm">
                <svg className="h-4 w-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-text-secondary">5-Star Rated</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-surface-glass border border-white/10 backdrop-blur-sm">
                <span className="text-sm font-medium text-text-secondary">100+ Happy Customers</span>
              </div>
            </div>

            {/* Big Bold Headline with Accent Words */}
            <h1 className="font-grotesk font-bold leading-tight">
              <span className="block text-text-primary">Professional</span>
              <span className="block text-gradient-accent">Carpet Cleaning</span>
              <span className="block text-text-primary">in Manchester</span>
            </h1>

            {/* Small Paragraph */}
            <p className="text-lg text-text-secondary max-w-xl">
              Experience deep, eco-friendly carpet cleaning that restores your home's freshness.
              Get an instant quote in 60 seconds and enjoy same-day service with our 100% satisfaction guarantee.
            </p>

            {/* Pill Button + Avatar Group */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link href="/quote">
                <button className="btn-primary text-base">
                  Get Instant Quote
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>

              {/* Avatar Group */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-coral to-accent-pink border-2 border-background-primary" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-yellow to-accent-coral border-2 border-background-primary" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-pink to-accent-purple border-2 border-background-primary" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-text-primary">500+ Clients</div>
                  <div className="text-text-label">Trust Fresh Fiber</div>
                </div>
              </div>
            </div>

            {/* Key Stats Pills */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-5 py-3 rounded-pill bg-surface-card border border-white/10">
                <span className="text-2xl font-bold text-accent-yellow font-grotesk">20mi</span>
                <span className="text-sm text-text-secondary">Free Travel</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 rounded-pill bg-surface-card border border-white/10">
                <span className="text-2xl font-bold text-accent-yellow font-grotesk">100%</span>
                <span className="text-sm text-text-secondary">Guaranteed</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Stacked Images with Glow */}
          <div className="relative lg:block hidden">
            <div className="relative space-y-6">
              {/* Top Image - Ellipse Masked */}
              <div className="relative group animate-float">
                <div className="absolute inset-0 bg-glow-card blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-[3rem] shadow-glow">
                  <Image
                    src="/images/hero-carpet-1.jpg"
                    alt="Professional carpet cleaning service"
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Bottom Image - Ellipse Masked */}
              <div className="relative group animate-float" style={{ animationDelay: '1s' }}>
                <div className="absolute inset-0 bg-gradient-radial-purple blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-[3rem] shadow-glow-soft ml-12">
                  <Image
                    src="/images/hero-carpet-2.jpg"
                    alt="Carpet cleaning results"
                    width={450}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
