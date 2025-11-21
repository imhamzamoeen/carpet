"use client"

import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  service: {
    slug: string
    name: string
    shortDescription: string
    description: string
    features: string[]
    pricing: string
    gradient: string
    icon: string
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Spotlight Effect - Follows Cursor */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
        }}
      />

      {/* Animated Border - Blue/Yellow Theme */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-yellow-400 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      {/* Main Card - White Background per colorcode.json */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-300">
        {/* Gradient Mesh Background on Hover */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.03]`} />
        </div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 -translate-x-full"
          animate={{
            translateX: isHovered ? '100%' : '-100%'
          }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut'
          }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
          }}
        />

        <div className="relative p-8">
          {/* Icon & Title Section */}
          <div className="mb-6">
            <motion.div
              className="mb-4 flex items-start justify-between"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4">
                {/* Animated Icon Container */}
                <motion.div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-3xl filter drop-shadow-lg">{service.icon}</span>
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Animated Divider */}
            <motion.div
              className={`h-[2px] bg-gradient-to-r ${service.gradient} rounded-full`}
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-gray-700">
            {service.description}
          </p>

          {/* Features Grid with Stagger Animation */}
          <div className="mb-6 grid grid-cols-1 gap-2">
            {service.features.slice(0, 4).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                className="flex items-start gap-2 group/item"
              >
                <motion.div
                  className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${service.gradient}`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
                <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Pricing & CTA Section */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            {/* Pricing with Pulse Effect */}
            <div className="relative">
              <motion.div
                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 blur-lg group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <div className="relative">
                <p className="text-xs text-gray-500 mb-1">Starting from</p>
                <p className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.pricing}
                </p>
              </div>
            </div>

            {/* CTA Button with Magnetic Effect */}
            <Link href={`/services/${service.slug}`}>
              <motion.button
                className={`group/btn relative overflow-hidden rounded-xl bg-gradient-to-r ${service.gradient} px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    translateX: isHovered ? '200%' : '-100%'
                  }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeInOut'
                  }}
                />
                <span className="relative flex items-center gap-2">
                  Learn More
                  <motion.svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      x: isHovered ? 3 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </span>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Corner Accent */}
        <div className={`absolute top-0 right-0 h-32 w-32 bg-gradient-to-br ${service.gradient} opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20`} />
      </div>
    </motion.div>
  )
}
