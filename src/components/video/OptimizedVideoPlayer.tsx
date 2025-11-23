"use client"

/**
 * Optimized Video Player Component
 *
 * Performance-optimized video player with:
 * - Lazy loading
 * - Metadata preloading
 * - Auto-play/pause control
 * - Error handling
 * - Reduced motion support
 */

import { useEffect, useRef, useState } from 'react'

interface OptimizedVideoPlayerProps {
  src: string
  poster?: string
  isVisible: boolean
  className?: string
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedVideoPlayer({
  src,
  poster,
  isVisible,
  className = '',
  onLoad,
  onError
}: OptimizedVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Control video playback based on visibility
  useEffect(() => {
    const video = videoRef.current
    if (!video || hasError || prefersReducedMotion) return

    if (isVisible) {
      // Play video when visible
      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented (usually needs user interaction)
          console.warn('Video autoplay prevented:', error)
          // Video will remain paused - user can click to play
        })
      }
    } else {
      // Pause video when not visible (save bandwidth)
      video.pause()
    }
  }, [isVisible, hasError, prefersReducedMotion])

  // Handle video load
  const handleLoadedMetadata = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  // Handle video error
  const handleError = () => {
    console.error('Video failed to load:', src)
    setHasError(true)
    onError?.()
  }

  // If reduced motion is preferred, show static poster
  if (prefersReducedMotion && poster) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <img
          src={poster}
          alt="Service preview"
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  // If video failed to load, show poster or fallback
  if (hasError) {
    return (
      <div className={`relative w-full h-full bg-gray-200 flex items-center justify-center ${className}`}>
        {poster ? (
          <img
            src={poster}
            alt="Service preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-center p-4">
            <svg
              className="mx-auto h-12 w-12 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Video unavailable</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <video
      ref={videoRef}
      className={`w-full h-full object-cover transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      src={src}
      poster={poster}
      preload="metadata"
      muted
      loop
      playsInline
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      onLoadedMetadata={handleLoadedMetadata}
      onError={handleError}
      aria-label="Service demonstration video"
    />
  )
}
