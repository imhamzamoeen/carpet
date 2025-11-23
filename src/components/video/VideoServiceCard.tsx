"use client"

/**
 * Video Service Card Component
 *
 * Individual service card with:
 * - Auto-playing background video
 * - Intersection Observer for viewport detection
 * - Gradient overlay for text readability
 * - Hover effects and animations
 * - Accessibility features
 */

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { VideoService } from '@/data/videoServices'
import { OptimizedVideoPlayer } from './OptimizedVideoPlayer'

interface VideoServiceCardProps {
  service: VideoService
  index: number
}

export function VideoServiceCard({ service, index }: VideoServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Intersection Observer for lazy loading and auto-play control
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
        threshold: 0.5, // 50% of card must be visible
        rootMargin: '50px' // Start loading 50px before entering viewport
      }
    )

    observer.observe(card)

    return () => {
      observer.unobserve(card)
    }
  }, [])

  return (
    <Link
      ref={cardRef}
      href={`/services/${service.slug}`}
      className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-video min-h-[280px] bg-gray-100"
      style={{
        animationDelay: `${index * 100}ms`
      }}
      aria-label={`${service.name} - Watch demonstration video and learn more`}
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        {isLoaded || isVisible ? (
          <OptimizedVideoPlayer
            src={service.videoUrl}
            isVisible={isVisible}
            className="group-hover:scale-105 transition-transform duration-500"
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          // Skeleton loader
          <div className="w-full h-full bg-gray-200 animate-pulse" />
        )}
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300" />

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        {/* Service Name */}
        <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/90 mb-4 line-clamp-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
          {service.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              {service.priceFrom}
            </span>
            <span className="text-sm text-white/80">{service.priceUnit}</span>
          </div>

          {/* CTA Arrow */}
          <div className="flex items-center gap-1 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
            <span>Learn more</span>
            <svg
              className="w-4 h-4"
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
            </svg>
          </div>
        </div>

        {/* Category Badge (Optional - positioned top-right) */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium capitalize">
          {service.category}
        </div>
      </div>

      {/* Focus ring for accessibility */}
      <div className="absolute inset-0 ring-2 ring-transparent group-focus:ring-primary-500 rounded-lg pointer-events-none" />
    </Link>
  )
}
