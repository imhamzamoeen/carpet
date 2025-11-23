"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Spotlight } from '@/components/ui/aceternity/spotlight'
import { TextGenerateEffect } from '@/components/ui/aceternity/text-generate-effect'
import { CardContainer, CardBody, CardItem } from '@/components/ui/aceternity/card-3d'
import { ArrowRight, Star, CheckCircle, MapPin, Shield } from 'lucide-react'

export function HeroPremium() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as any,
      },
    },
  }

  return (
    <section className="relative min-h-screen py-20 lg:py-32 overflow-hidden bg-slate-950">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(59, 130, 246, 0.5)"
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-900" />

      {/* Animated Gradient Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN - Text Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Badge Pills with Animation */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-white">5-Star Rated</span>
              </motion.div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-green-500/10 border border-green-500/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm font-semibold text-white">100+ Happy Customers</span>
              </motion.div>
            </motion.div>

            {/* Animated Headline - Voice Search Optimized */}
            <motion.div variants={itemVariants}>
              <TextGenerateEffect
                words="Professional Cleaners in Manchester"
                className="speakable-headline font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white"
              />
              <h2 className="mt-4 text-2xl md:text-3xl font-grotesk font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                Carpet, Upholstery & Deep Cleaning
              </h2>
            </motion.div>

            {/* TL;DR Summary - Optimized for LLMs, AI Overviews & Voice Search */}
            <motion.div
              variants={itemVariants}
              className="speakable-tldr p-4 rounded-lg bg-primary-500/10 border-l-4 border-l-primary-400"
            >
              <div className="flex items-start gap-2">
                <span className="text-xs font-bold text-primary-400 uppercase tracking-wider mt-0.5">TL;DR</span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Professional cleaners in Manchester offering carpet, upholstery, rug and deep cleaning. Same-day service available with 100% satisfaction guarantee. Get instant quote in 60 seconds.
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Looking for reliable cleaners in Manchester? We offer professional carpet, upholstery, rug, and deep cleaning services for homes and businesses.
              Eco-friendly products, NCCA certified professionals, and fully insured for your peace of mind.
            </motion.p>

            {/* CTA Buttons - Voice Search Optimized */}
            <motion.div
              variants={itemVariants}
              className="speakable-cta flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link href="/quote">
                <motion.button
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#60a5fa_50%,#3b82f6_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary-600 px-8 py-1 text-base font-semibold text-white backdrop-blur-3xl gap-2">
                    Get Instant Quote
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="btn-outline border-slate-700 text-white hover:bg-white/5 text-base px-8"
                  whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators with Animation */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-slate-900 shadow-sm"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-white">500+ Happy Clients</div>
                <div className="text-slate-400">Across Manchester</div>
              </div>
            </motion.div>

            {/* Key Stats with Hover Effects */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <motion.div
                className="flex items-center gap-3 px-5 py-3 rounded-card bg-white/5 border border-white/10 shadow-soft backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500/20">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-grotesk">20 miles</div>
                  <div className="text-xs text-slate-400">Free Travel</div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 px-5 py-3 rounded-card bg-white/5 border border-white/10 shadow-soft backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-grotesk">100%</div>
                  <div className="text-xs text-slate-400">Guaranteed</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - 3D Card with Hero Image */}
          <motion.div
            className="relative lg:block hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CardContainer className="inter-var w-full">
              <CardBody className="relative group/card hover:shadow-2xl hover:shadow-primary-500/[0.1] bg-black/40 border-white/[0.2] w-full h-auto rounded-xl p-6 border backdrop-blur-sm">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white mb-2"
                >
                  Professional Cleaning Services
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-300 text-sm max-w-sm mt-2 mb-4"
                >
                  Trusted by 500+ customers across Manchester
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="relative overflow-hidden rounded-xl">
                    {/* TikTok-Style Optimized Video - ENLARGED */}
                    <video
                      src="https://op9ck9o1huaxywp5.public.blob.vercel-storage.com/Blowup%20cleaner%20landing%20video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-cover group-hover/card:scale-105 transition-transform duration-500"
                      style={{
                        minHeight: '500px',
                        maxHeight: '700px',
                        aspectRatio: '16/10'
                      }}
                      onLoadedMetadata={(e) => {
                        // TikTok-style optimization: Set playback rate for smooth performance
                        const video = e.currentTarget;
                        video.playbackRate = 1.0;
                      }}
                      onCanPlay={(e) => {
                        // Ensure video plays smoothly on mobile
                        const video = e.currentTarget;
                        video.play().catch(() => {
                          // Fallback for browsers that block autoplay
                          console.log('Video autoplay blocked by browser');
                        });
                      }}
                    />
                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-lg shadow-xl p-3 border border-white/20">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400">
                          <Star className="w-5 h-5 text-slate-900 fill-slate-900" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-lg">5.0</div>
                          <div className="text-xs text-slate-600">Google Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
