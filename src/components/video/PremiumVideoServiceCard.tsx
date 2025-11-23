"use client"

/**
 * Premium Video Service Card with 3D Effects
 *
 * Award-winning UI with:
 * - 3D tilt interaction
 * - Cinematic video background
 * - Smooth micro-animations
 * - Glass morphism design
 */

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { VideoService } from '@/data/videoServices'
import { OptimizedVideoPlayer } from './OptimizedVideoPlayer'
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card'
import { cn } from '@/lib/utils'

interface PremiumVideoServiceCardProps {
  service: VideoService
  index: number
}

export function PremiumVideoServiceCard({ service, index }: PremiumVideoServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        threshold: 0.3,
        rootMargin: '100px'
      }
    )

    observer.observe(card)
    return () => observer.unobserve(card)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="p-2"
    >
      <CardContainer className="inter-var w-full">
        <CardBody className="relative group/card w-full h-auto">
          <Link
            ref={cardRef}
            href={`/services/${service.slug}`}
            className="block w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={`${service.name} - Watch demonstration and learn more`}
          >
            {/* Main Card - 3D effect container */}
            <CardItem
              translateZ="100"
              className="w-full"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 shadow-2xl aspect-[4/3] min-h-[380px]">
                {/* Video Background Layer */}
                <div className="absolute inset-0">
                  {isLoaded || isVisible ? (
                    <div className="relative w-full h-full">
                      <OptimizedVideoPlayer
                        src={service.videoUrl}
                        isVisible={isVisible}
                        className="scale-105 group-hover/card:scale-110 transition-transform duration-700"
                        onLoad={() => setIsLoaded(true)}
                      />
                      {/* Cinematic vignette effect */}
                      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none" />
                    </div>
                  ) : (
                    // Premium skeleton with shimmer
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 animate-pulse relative overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                  )}
                </div>

                {/* Glass morphism gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover/card:from-black/100 group-hover/card:via-black/60 transition-all duration-500" />

                {/* Animated border glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/50 via-purple-500/50 to-pink-500/50 blur-xl" />
                </div>

                {/* Content Layer with 3D depth */}
                <div className="relative h-full flex flex-col justify-between p-6 z-10">
                  {/* Category Badge - Floating */}
                  <CardItem
                    translateZ="60"
                    translateX="10"
                    className="self-end"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-white capitalize shadow-lg"
                    >
                      {service.category}
                    </motion.div>
                  </CardItem>

                  {/* Bottom Content */}
                  <div className="space-y-4">
                    {/* Service Name */}
                    <CardItem
                      translateZ="80"
                      className="w-full"
                    >
                      <h3
                        className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover/card:text-primary-400 transition-colors duration-300"
                        style={{
                          textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        {service.name}
                      </h3>
                    </CardItem>

                    {/* Description */}
                    <CardItem
                      translateZ="60"
                      className="w-full"
                    >
                      <p
                        className="text-sm text-white/90 line-clamp-2 leading-relaxed"
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                      >
                        {service.description}
                      </p>
                    </CardItem>

                    {/* Price and CTA Row */}
                    <CardItem
                      translateZ="70"
                      className="w-full"
                    >
                      <div className="flex items-center justify-between pt-2">
                        {/* Price */}
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-2xl lg:text-3xl font-bold text-white group-hover/card:text-primary-400 transition-colors duration-300"
                            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                          >
                            {service.priceFrom}
                          </span>
                          <span className="text-sm text-white/70">
                            {service.priceUnit}
                          </span>
                        </div>

                        {/* CTA Button with shine effect */}
                        <motion.div
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative group/cta"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg blur opacity-0 group-hover/cta:opacity-75 transition duration-500" />
                          <div className="relative flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white/20 transition-all duration-300">
                            <span>Learn more</span>
                            <motion.svg
                              className="w-4 h-4"
                              animate={{ x: isHovered ? 4 : 0 }}
                              transition={{ duration: 0.3 }}
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
                          </div>
                        </motion.div>
                      </div>
                    </CardItem>
                  </div>
                </div>
              </div>
            </CardItem>
          </Link>
        </CardBody>
      </CardContainer>
    </motion.div>
  )
}
