"use client"

/**
 * Interactive Client Component for Rug Cleaning Cluster Page
 *
 * Provides search, filter, and interactive features for navigating
 * the comprehensive rug cleaning content and subtopics
 */

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search, X, Filter, Sparkles, ArrowRight,
  Palette, Target, Droplets, Shield, Leaf, BadgeCheck,
  Lightbulb, Heart, AlertCircle, Wind, Clock, Home,
  Scissors, Zap, Users, TrendingUp, Gem, Package
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui'

// Icon mapping to handle serialization from server component
const iconMap: Record<string, any> = {
  Sparkles,
  Target,
  Droplets,
  Shield,
  Leaf,
  BadgeCheck,
  Lightbulb,
  Heart,
  AlertCircle,
  Wind,
  Clock,
  Home,
  Scissors,
  Zap,
  Users,
  TrendingUp,
  Palette,
  Gem,
  Package
}

interface SubtopicCard {
  title: string
  url: string
  excerpt: string
  category: string
  iconName: string
  keywords: string[]
}

interface InteractiveSearchProps {
  subtopics: SubtopicCard[]
}

export default function InteractiveSearch({ subtopics }: InteractiveSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(subtopics.map(card => card.category)))
    return ['All', ...cats]
  }, [subtopics])

  // Filter subtopics based on search query and category
  const filteredSubtopics = useMemo(() => {
    return subtopics.filter(card => {
      const matchesSearch = searchQuery === '' ||
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [subtopics, searchQuery, selectedCategory])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
  }

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All'

  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Find What You Need</h3>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search rug topics, Persian rugs, Oriental rugs, stains, services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 items-center">
          <Filter className="h-4 w-4 text-gray-500 flex-shrink-0" />
          <span className="text-sm text-gray-600 font-medium">Categories:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="ml-2 px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors flex items-center gap-1"
            >
              <X className="h-3 w-3" />
              Clear Filters
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing <span className="font-bold text-blue-600">{filteredSubtopics.length}</span> of{' '}
          <span className="font-bold">{subtopics.length}</span> topics
        </div>
      </div>

      {/* Filtered Results Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubtopics.length > 0 ? (
          filteredSubtopics.map((card, index) => (
            <Link key={index} href={card.url} className="block h-full">
              <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-blue-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    {(() => {
                      const IconComponent = iconMap[card.iconName]
                      return IconComponent ? <IconComponent className="h-8 w-8 text-white" /> : null
                    })()}
                  </div>
                  <Badge variant="info" className="w-fit mb-2">{card.category}</Badge>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{card.excerpt}</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          // No Results State
          <div className="col-span-full">
            <Card className="border-2 border-dashed border-gray-300">
              <CardContent className="py-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Results Found</h3>
                <p className="text-gray-600 mb-6">
                  Cannot find any topics matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <Button onClick={clearFilters} className="mx-auto">
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Quick Links Section (Always Visible) */}
      <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Popular Searches</h3>
        <div className="flex flex-wrap gap-3">
          {[
            'Oriental Rug Cleaning',
            'Persian Rug Cleaning',
            'Antique Rug Care',
            'Silk Rug Cleaning',
            'Wool Rug Cleaning',
            'Rug Stain Removal',
            'Rug Restoration',
            'Commercial Rug Cleaning'
          ].map((term, idx) => (
            <button
              key={idx}
              onClick={() => setSearchQuery(term)}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
