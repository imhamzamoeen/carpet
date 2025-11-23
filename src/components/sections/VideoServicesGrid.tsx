"use client"

/**
 * Premium Video Services Grid Section
 *
 * Award-winning UI with:
 * - 3D interactive cards
 * - Animated background beams
 * - Cinematic video presentations
 * - Micro-interactions and smooth transitions
 */

import { videoServices } from '@/data/videoServices'
import { PremiumVideoServiceCard } from '@/components/video/PremiumVideoServiceCard'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function VideoServicesGrid() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background Beams */}
      <BackgroundBeams className="opacity-40" />

      {/* Gradient Orbs for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        {/* Section Header - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          {/* Glowing subtitle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-500/10 border border-primary-500/20 rounded-full backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-semibold text-primary-400 speakable-headline">
              Premium Cleaners in Manchester
            </span>
          </motion.div>

          {/* Main heading with gradient */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 speakable-headline">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Complete Cleaning Services
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              for Your Home & Business
            </span>
          </h2>

          {/* Description with better contrast */}
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto speakable-tldr">
            As trusted cleaners in Manchester, we provide professional carpet cleaning, upholstery cleaning,
            deep cleaning, and commercial cleaning services. Watch our demonstration videos to see the quality of our work.
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
            <div className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
          </div>
        </motion.div>

        {/* Premium Video Services Grid - 2 Cards Per Row */}
        <div className="mx-auto grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-x-32 md:gap-y-32 max-w-6xl">
          {videoServices.map((service, index) => (
            <PremiumVideoServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Premium CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 speakable-cta overflow-hidden"
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <span className="relative">Explore All Services</span>
            <motion.svg
              className="w-5 h-5 relative"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </Link>
        </motion.div>

        {/* TL;DR Section - Premium Glass Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-8 lg:p-12 shadow-2xl">
            {/* Decorative gradient orb */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/30 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary-500" />
                  <div className="h-1 w-1 rounded-full bg-purple-500" />
                  <div className="h-1 w-1 rounded-full bg-pink-500" />
                </div>
                <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wide speakable-tldr">
                  TL;DR - Quick Summary
                </h3>
              </div>

              <div className="prose prose-invert prose-sm max-w-none speakable-summary">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Blowup Cleaners</strong> offers 8 professional cleaning services in Manchester including
                  carpet cleaning (from £25/room), rug cleaning (from £30), upholstery cleaning (from £20/seat),
                  mattress cleaning (from £40), stain removal (from £15), commercial cleaning (from £2/sqm),
                  end of tenancy cleaning (from £150), and pet odor removal (from £25).
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We serve Manchester and within 100 miles radius with same-day service, eco-friendly products,
                  and 100% satisfaction guarantee. Watch our demonstration videos to see our professional cleaning
                  techniques in action.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
