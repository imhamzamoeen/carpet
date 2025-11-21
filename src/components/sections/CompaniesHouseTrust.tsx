"use client"

import { ShieldCheck, ExternalLink, CheckCircle, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"

export default function CompaniesHouseTrust() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              Verified & Registered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Fully Registered UK Company
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We're a legitimate, registered business with Companies House. Verify our registration and check our complete company details.
            </p>
          </div>

          {/* Companies House Card */}
          <Card className="bg-white shadow-card border-2 border-primary-100 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Badge */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 md:p-12 flex flex-col items-center justify-center text-white relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="mb-6">
                      <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border-4 border-white/30">
                        <Building2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Companies House</h3>
                      <p className="text-white/90 text-sm">Registered & Verified</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <p className="text-xs text-white/80 mb-1">Company Number</p>
                      <p className="text-3xl font-bold tracking-wider">16735427</p>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Active & Compliant</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-text-primary mb-4">Why This Matters</h4>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">Legitimate Business</p>
                        <p className="text-sm text-text-secondary">Registered with UK Companies House since incorporation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">Full Transparency</p>
                        <p className="text-sm text-text-secondary">Our company details are publicly available and verified</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">Consumer Protection</p>
                        <p className="text-sm text-text-secondary">Legal accountability and compliance with UK regulations</p>
                      </div>
                    </li>
                  </ul>

                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/16735427"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Verify on Companies House
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <p className="text-2xl font-bold text-primary-600 mb-1">100%</p>
              <p className="text-xs text-text-secondary">Legitimate</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <p className="text-2xl font-bold text-primary-600 mb-1">UK</p>
              <p className="text-xs text-text-secondary">Registered</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <p className="text-2xl font-bold text-primary-600 mb-1">Active</p>
              <p className="text-xs text-text-secondary">Status</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <p className="text-2xl font-bold text-primary-600 mb-1">Verified</p>
              <p className="text-xs text-text-secondary">Details</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
