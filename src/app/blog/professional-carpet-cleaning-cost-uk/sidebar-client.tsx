"use client"

import { useState, useEffect } from 'react'
import { List, CheckCircle, Zap, Calculator } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export default function SidebarClient() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  const sections = [
    { id: "quick-answer", title: "Quick Answer: UK Costs" },
    { id: "room-based-pricing", title: "Room-Based Pricing" },
    { id: "area-based-pricing", title: "Square Metre Pricing" },
    { id: "whole-house-pricing", title: "Whole House Costs" },
    { id: "cost-factors", title: "What Affects Prices" },
    { id: "stairs-pricing", title: "Stairs & Landings" },
    { id: "commercial-pricing", title: "Commercial Pricing" },
    { id: "hidden-costs", title: "Hidden Costs" },
    { id: "money-saving-tips", title: "Save Money Tips" },
    { id: "worth-it", title: "Is It Worth It?" },
    { id: "regional-pricing", title: "Regional Variations" },
    { id: "getting-quotes", title: "Getting Quotes" },
    { id: "faq", title: "FAQ" }
  ]

  return (
    <div className="sticky top-24 space-y-8">
      {/* Table of Contents with Progress */}
      <Card className="bg-white shadow-card border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <List className="h-5 w-5" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.id}`}
                className="block text-sm hover:text-primary-600 transition-colors p-2 rounded hover:bg-gray-50 text-text-secondary"
              >
                {section.title}
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
      <Card className="bg-gradient-to-br from-primary-600 to-primary-700 text-white border-0 shadow-card-hover">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3">Get Instant Quote</h3>
          <p className="text-white/90 text-sm mb-4">
            Free quote in 60 seconds. No obligation. Same-day service available.
          </p>
          <Link href="/quote">
            <Button className="w-full bg-white text-primary-600 hover:bg-white/90 font-semibold">
              <Calculator className="mr-2 h-4 w-4" />
              Get Free Quote
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Expert Tips Widget */}
      <Card className="bg-accent-blue/5 border-accent-blue/20">
        <CardHeader>
          <CardTitle className="text-accent-blue flex items-center gap-2 text-lg">
            <Zap className="h-5 w-5" />
            Expert Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-text-secondary">Book 3+ rooms for 10-20% discount</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-text-secondary">Weekday appointments save 15-25%</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-text-secondary">Always ask about package deals</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-text-secondary">Regular cleaning extends carpet life 3-5 years</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
