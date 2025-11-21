"use client"

import { useState, useEffect } from 'react'
import { List, Calculator } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export default function SidebarClient() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx * 100
      setScrollProgress(scrolled)
    }
    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  const sections = [
    "Quick Answer: Yes, It Can Remove Pet Urine Smell",
    "Why Pet Urine Smell is So Difficult to Remove",
    "The Science Behind Professional Pet Odor Removal",
    "Professional vs DIY Methods",
    "Our 5-Step Treatment Process",
    "Types of Pet Accidents We Can Remove",
    "How Long Does Odor Removal Take?",
    "Preventing Future Pet Accidents",
    "Customer Success Stories",
    "Get Professional Help Today"
  ]

  return (
    <div className="sticky top-24 space-y-8">
      {/* Table of Contents */}
      <Card className="bg-white shadow-card border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <List className="h-5 w-5" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className="block text-sm hover:text-primary-600 transition-colors p-2 rounded hover:bg-gray-50"
              >
                {section}
              </a>
            ))}
          </nav>

          {/* Reading Progress */}
          <div className="mt-6 pt-4 border-t">
            <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
              <span>Reading Progress</span>
              <span>{Math.round(scrollProgress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary-600 to-accent-blue h-2 rounded-full transition-all"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Quote CTA */}
      <Card className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3">Get Pet Odor Removal Quote</h3>
          <p className="text-white/90 text-sm mb-4">
            Free quote in 60 seconds. Specialized pet urine treatment available.
          </p>
          <Link href="/quote">
            <Button variant="secondary" size="sm" className="w-full bg-white text-primary-600 hover:bg-white/90">
              <Calculator className="mr-2 h-4 w-4" />
              Get Free Quote
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
