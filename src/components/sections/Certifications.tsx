"use client"

import { Award, Shield, CheckCircle, Star, Users, FileCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

const certifications = [
  {
    icon: Shield,
    title: "NCCA Certified",
    description: "National Carpet Cleaners Association accredited professionals",
    gradient: "from-blue-500 to-blue-600",
    badge: "Professional",
  },
  {
    icon: Award,
    title: "IICRC Certified",
    description: "Institute of Inspection, Cleaning and Restoration Certification",
    gradient: "from-green-500 to-green-600",
    badge: "Expert",
  },
  {
    icon: FileCheck,
    title: "Food Safety Certified",
    description: "Level 2 Food Hygiene & Safety for commercial cleaning",
    gradient: "from-purple-500 to-purple-600",
    badge: "Hygiene",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "£5 million public liability insurance coverage",
    gradient: "from-orange-500 to-orange-600",
    badge: "Protected",
  },
  {
    icon: CheckCircle,
    title: "DBS Checked",
    description: "All team members are DBS verified for your safety",
    gradient: "from-teal-500 to-teal-600",
    badge: "Trusted",
  },
  {
    icon: Star,
    title: "Trading Standards Approved",
    description: "Approved by local Trading Standards for quality service",
    gradient: "from-pink-500 to-pink-600",
    badge: "Approved",
  },
]

export default function Certifications() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent-blue/10 text-accent-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              Certifications & Accreditations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Certified Professionals You Can Trust
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our team holds industry-leading certifications and accreditations, ensuring the highest standards of service, safety, and hygiene.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-200 overflow-hidden"
                >
                  <CardContent className="p-6">
                    {/* Icon and Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        {cert.badge}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs text-green-600 font-semibold">Active & Verified</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Trust Stats */}
          <Card className="bg-gradient-to-br from-primary-50 to-accent-blue/5 border-2 border-primary-100">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-primary-600 mb-1">100%</p>
                  <p className="text-sm text-text-secondary">Certified Team</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-600 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-1">£5M</p>
                  <p className="text-sm text-text-secondary">Insurance Cover</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-600 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-blue-600 mb-1">6+</p>
                  <p className="text-sm text-text-secondary">Accreditations</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-600 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-purple-600 mb-1">5★</p>
                  <p className="text-sm text-text-secondary">Service Quality</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Trust Message */}
          <div className="mt-8 text-center">
            <p className="text-sm text-text-secondary max-w-3xl mx-auto">
              All certifications are independently verified and renewed regularly. We maintain the highest industry standards to ensure your complete satisfaction and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
