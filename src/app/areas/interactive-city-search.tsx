"use client"

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, X, Filter, MapPin, ArrowRight, AlertTriangle, Lightbulb } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from '@/components/ui'

interface CityCard {
  name: string
  url: string
  region: string
  keywords: string[]
}

interface InteractiveCitySearchProps {
  cities: CityCard[]
}

export default function InteractiveCitySearch({ cities }: InteractiveCitySearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<string>('All')

  const regions = useMemo(() => {
    const regionSet = Array.from(new Set(cities.map(city => city.region)))
    return ['All', ...regionSet.sort()]
  }, [cities])

  const filteredCities = useMemo(() => {
    return cities.filter(city => {
      const matchesSearch = searchQuery === '' ||
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesRegion = selectedRegion === 'All' || city.region === selectedRegion

      return matchesSearch && matchesRegion
    })
  }, [cities, searchQuery, selectedRegion])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedRegion('All')
  }

  const hasActiveFilters = searchQuery !== '' || selectedRegion !== 'All'

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search for your city... (e.g., 'Manchester', 'Leeds', 'Birmingham')"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          aria-label="Search for cities"
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

      {/* Region Filter Pills */}
      <div className="flex flex-wrap gap-3 items-center">
        <Filter className="h-5 w-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Filter by region:</span>
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
              selectedRegion === region
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-pressed={selectedRegion === region}
          >
            {region}
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
          Showing <span className="font-bold text-blue-600">{filteredCities.length}</span> of{' '}
          <span className="font-bold">{cities.length}</span> cities
        </p>
      </div>

      {/* Filtered Results Grid */}
      {filteredCities.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCities.map((city) => (
            <Link key={city.name} href={city.url}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-blue-500 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <MapPin className="h-8 w-8 text-blue-600 group-hover:text-blue-700 flex-shrink-0" />
                    <Badge variant="info" className="text-xs">
                      {city.region}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {city.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Professional carpet cleaning services available in {city.name}.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-2xl">
          <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No cities found</h3>
          <p className="text-gray-600 mb-6">
            No cities match your search criteria. Try different keywords or clear filters.
          </p>
          <Button onClick={clearFilters} variant="outline">
            <X className="mr-2 h-4 w-4" />
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Popular Searches Section */}
      {searchQuery === '' && selectedRegion === 'All' && (
        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Popular City Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Manchester',
              'Leeds',
              'Liverpool',
              'Birmingham',
              'Sheffield',
              'Newcastle',
              'Nottingham',
              'Leicester'
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
