"use client"

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, X, Filter, Sparkles, ArrowRight, Droplet, FlaskConical, PawPrint, Home, Eye, Layers, Shield, Target, Lightbulb, AlertTriangle, Award } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from '@/components/ui'

// Icon mapping to handle serialization from server component
const iconMap: Record<string, any> = {
  Droplet,
  Flask: FlaskConical,
  PawPrint,
  Home,
  Eye,
  Layers,
  Shield,
  Sparkles,
  Target,
  Lightbulb,
  AlertTriangle,
  Award
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

  const categories = useMemo(() => {
    const cats = Array.from(new Set(subtopics.map(card => card.category)))
    return ['All', ...cats]
  }, [subtopics])

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
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search pet odor removal services... (e.g., 'cat urine', 'enzymatic', 'padding')"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          aria-label="Search pet odor removal services"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-3 items-center">
        <Filter className="h-5 w-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Filter by category:</span>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="ml-2 px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-all"
            aria-label="Clear all filters"
          >
            <X className="h-4 w-4 inline mr-1" />
            Clear Filters
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="text-center py-2">
        <p className="text-gray-600">
          Showing <span className="font-bold text-blue-600">{filteredSubtopics.length}</span> of{' '}
          <span className="font-bold">{subtopics.length}</span> pet odor removal services
        </p>
      </div>

      {/* Filtered Results Grid */}
      {filteredSubtopics.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubtopics.map((card) => {
            const IconComponent = iconMap[card.iconName] || Sparkles
            return (
              <Link key={card.url} href={card.url}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-blue-500 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <IconComponent className="h-10 w-10 text-blue-600 group-hover:text-blue-700 flex-shrink-0" />
                      <Badge variant="info" className="text-xs">
                        {card.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{card.excerpt}</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-2xl">
          <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No services found</h3>
          <p className="text-gray-600 mb-6">
            No pet odor removal services match your search criteria. Try different keywords or clear filters.
          </p>
          <Button onClick={clearFilters} variant="outline">
            <X className="mr-2 h-4 w-4" />
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Popular Searches Section */}
      {searchQuery === '' && selectedCategory === 'All' && (
        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Popular Pet Odor Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'cat urine',
              'dog accidents',
              'enzymatic cleaning',
              'black light detection',
              'padding treatment',
              'odor elimination',
              'sanitization',
              'emergency service'
            ].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-3 py-1.5 bg-white border border-blue-300 rounded-full text-sm text-blue-700 hover:bg-blue-100 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
