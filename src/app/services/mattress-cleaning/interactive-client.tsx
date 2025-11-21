"use client"

import { useState } from 'react'
import Link from "next/link"
import {
  Search, ArrowRight, Sparkles, Target, Bug, Droplets, Wind, Bed,
  Heart, Building2, AlertCircle, Dog, Shield, Lightbulb
} from "lucide-react"
import { Button } from "@/components/ui"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Badge } from "@/components/ui/Badge"

interface Subtopic {
  title: string
  url: string
  excerpt: string
  category: string
  iconName: string
  keywords: string[]
}

interface InteractiveSearchProps {
  subtopics: Subtopic[]
}

// Icon mapping for string names
const iconMap: Record<string, any> = {
  'Sparkles': Sparkles,
  'Target': Target,
  'Bug': Bug,
  'Droplets': Droplets,
  'Wind': Wind,
  'Bed': Bed,
  'Heart': Heart,
  'Building2': Building2,
  'AlertCircle': AlertCircle,
  'Dog': Dog,
  'Shield': Shield,
  'Lightbulb': Lightbulb
}

export default function InteractiveSearch({ subtopics }: InteractiveSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  // Extract unique categories
  const categories = ["all", ...new Set(subtopics.map(s => s.category))]

  // Filter subtopics based on search and category
  const filteredSubtopics = subtopics.filter(subtopic => {
    const matchesSearch = subtopic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subtopic.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subtopic.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesFilter = activeFilter === "all" || subtopic.category === activeFilter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search mattress cleaning guides..."
              className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap ${activeFilter === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                {category === "all" ? "All Topics" : category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center text-gray-600">
        Showing {filteredSubtopics.length} of {subtopics.length} resources
      </div>

      {/* Interactive Card Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSubtopics.map((subtopic, index) => {
          const IconComponent = iconMap[subtopic.iconName] || Sparkles

          return (
            <Link href={subtopic.url} key={index}>
              <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 border-gray-100 hover:border-blue-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <Badge className="bg-sky-50 text-sky-700 border border-sky-200">
                      {subtopic.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {subtopic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {subtopic.excerpt}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* No Results Message */}
      {filteredSubtopics.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-600 mb-4">
            No resources found matching your search
          </p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setActiveFilter("all")
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
