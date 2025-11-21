# System Architecture - Carpet Cleaning Service Platform
## Blowup Cleaners - Full-Stack Architecture Document

**Version:** 1.0
**Date:** 2025-11-16
**Architect:** Winston (BMad Architect Agent)
**Project:** Manchester-based Carpet Cleaning Service Platform
**Status:** Initial Architecture Design

---

## Executive Summary

This document defines the complete system architecture for Blowup Cleaners's customer-facing booking platform and administrative dashboard. The system enables instant quote generation, multi-step booking forms, payment processing, and comprehensive admin management for a carpet cleaning service operating within 100 miles of Manchester, UK.

**Key Architectural Decisions:**
- **Next.js 16** (App Router) for full-stack framework
- **Supabase (PostgreSQL)** for database + real-time + auth
- **TypeScript** for type safety across the stack
- **Server Actions** for form handling and mutations
- **Tailwind CSS** for responsive, mobile-first UI
- **Vercel** for deployment and edge optimization

---

## 1. Technology Stack

### 1.1 Frontend Stack

| Technology | Version | Purpose | Rationale |
|------------|---------|---------|-----------|
| **Next.js** | 16.0.3 | Full-stack React framework | App Router for layouts, Server Components for performance, built-in SEO optimization |
| **React** | 19.2.0 | UI library | Latest features including Server Components, Suspense, Transitions |
| **TypeScript** | Latest | Type safety | Catch errors at compile time, better IDE support, maintainability |
| **Tailwind CSS** | 3.x | Utility-first CSS | Rapid development, mobile-first, consistent design system, small bundle size |
| **React Hook Form** | 7.66.0 | Form management | Performance (uncontrolled components), Zod integration, validation |
| **Zod** | 4.1.12 | Schema validation | Type-safe validation, runtime type checking, form integration |
| **date-fns** | 4.1.0 | Date manipulation | Lightweight, tree-shakeable, comprehensive date utilities |

### 1.2 Backend Stack

| Technology | Version | Purpose | Rationale |
|------------|---------|---------|-----------|
| **Supabase** | Latest | Backend-as-a-Service | PostgreSQL + Auth + Storage + Real-time, excellent Next.js integration |
| **Prisma** | 6.19.0 | ORM | Type-safe database queries, migrations, schema management |
| **PostgreSQL** | Latest | Primary database | ACID compliance, JSON support, scalability, Supabase integration |
| **Next.js Server Actions** | Built-in | API layer | Type-safe mutations, progressive enhancement, simplified data flow |
| **Nodemailer** | 7.0.10 | Email sending | Reliable SMTP, widely used, HTML email support |

### 1.3 External APIs & Services

| Service | Purpose | Usage |
|---------|---------|-------|
| **Google Maps Distance Matrix API** | Distance calculation | Calculate travel distance from Manchester to customer postcode |
| **Google Sheets API** | Lead tracking | Export booking data to Google Sheets for business analysis |
| **Gmail SMTP** | Email notifications | Send booking confirmations and admin notifications |
| **Vercel** | Hosting & deployment | Edge functions, automatic scaling, preview deployments |

### 1.4 Development Tools

- **Git** - Version control
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Prisma Studio** - Database GUI
- **VS Code** - Primary IDE with Claude Code extension

---

## 2. System Architecture Overview

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT BROWSER                          │
│  ┌───────────────┐  ┌───────────────┐  ┌──────────────────┐   │
│  │  Public Pages │  │ Quote/Booking │  │  Admin Dashboard │   │
│  │  (SSR/SSG)    │  │  Form (CSR)   │  │  (Protected)     │   │
│  └───────┬───────┘  └───────┬───────┘  └────────┬─────────┘   │
└──────────┼──────────────────┼───────────────────┼─────────────┘
           │                  │                   │
           │ Server Components│ Server Actions    │ Auth Check
           ▼                  ▼                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                    NEXT.JS 16 APP ROUTER                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐     │
│  │ Route Groups │  │   Layouts    │  │  Middleware      │     │
│  │ (app/)       │  │  (Metadata)  │  │  (Auth Session)  │     │
│  └──────┬───────┘  └──────┬───────┘  └────────┬─────────┘     │
│         │                 │                   │                 │
│  ┌──────▼─────────────────▼───────────────────▼─────────┐     │
│  │           Server Actions Layer                       │     │
│  │  - createBooking()   - updateBookingStatus()         │     │
│  │  - calculateQuote()  - uploadPhoto()                 │     │
│  │  - sendEmail()       - exportToSheets()              │     │
│  └──────────────────────────┬───────────────────────────┘     │
└─────────────────────────────┼─────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     SUPABASE BACKEND                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐     │
│  │  PostgreSQL  │  │     Auth     │  │     Storage      │     │
│  │  (via Prisma)│  │  (Sessions)  │  │ (Photo Uploads)  │     │
│  └──────┬───────┘  └──────┬───────┘  └────────┬─────────┘     │
│         │                 │                   │                 │
│  ┌──────▼─────────────────▼───────────────────▼─────────┐     │
│  │              Database Schema                         │     │
│  │  - bookings        - services       - reviews        │     │
│  │  - gallery_items   - faqs           - blog_posts     │     │
│  │  - admin_users     - settings                        │     │
│  └──────────────────────────────────────────────────────┘     │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐     │
│  │ Google Maps  │  │Google Sheets │  │  Gmail SMTP      │     │
│  │  Distance API│  │  Export API  │  │  (Nodemailer)    │     │
│  └──────────────┘  └──────────────┘  └──────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Request Flow Examples

#### Example 1: Customer Gets Instant Quote

```
1. User lands on /quote page (SSR)
2. User fills multi-step form (React Hook Form + Zod validation)
3. On address input → Server Action calls Google Maps API
4. Distance calculated → pricing logic runs server-side
5. Live quote displayed (serviceCost + travelCost)
6. User submits form → Server Action:
   a. Validates data with Zod
   b. Creates Booking record in Supabase (via Prisma)
   c. Exports to Google Sheets
   d. Sends confirmation email (Nodemailer)
   e. Returns booking ID
7. User redirected to /confirmation/[id]
```

#### Example 2: Admin Views Dashboard

```
1. Admin navigates to /admin/leads
2. Middleware checks Supabase session
3. If authenticated → Page loads with Server Component
4. Server Component fetches bookings via Prisma
5. Client receives rendered HTML + minimal JS
6. Admin filters/searches → Client-side state management
7. Admin updates status → Server Action updates DB + sends email
```

---

## 3. Data Model & Database Schema

### 3.1 Core Database Schema (Prisma)

```prisma
// prisma/schema.prisma

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

generator client {
  provider = "prisma-client-js"
}

// ═══════════════════════════════════════════════════════════════
// BOOKINGS & QUOTES
// ═══════════════════════════════════════════════════════════════

model Booking {
  id              String   @id @default(uuid())
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  // Contact Information
  name            String
  email           String
  phone           String
  address         String
  postcode        String

  // Service Details
  serviceType     String   // carpet, rug, upholstery, etc.
  propertyType    String   // house, flat, office, etc.
  propertySize    String?  // small, medium, large
  numberOfRooms   Int?
  squareMeters    Int?
  stainRemoval    Boolean  @default(false)
  additionalNotes String?  @db.Text

  // Photos
  photoUrls       String[] @default([])

  // Scheduling
  preferredDate   DateTime

  // Pricing Breakdown
  distance        Float    // Miles from Manchester
  travelCost      Float    // GBP
  serviceCost     Float    // GBP
  totalCost       Float    // GBP

  // Status Management
  status          BookingStatus @default(PENDING)
  adminNotes      String?  @db.Text
  completedAt     DateTime?

  @@map("bookings")
  @@index([status])
  @@index([createdAt])
  @@index([preferredDate])
  @@index([email])
}

enum BookingStatus {
  PENDING      // Awaiting admin review
  CONFIRMED    // Admin confirmed
  IN_PROGRESS  // Job in progress
  COMPLETED    // Job finished
  CANCELLED    // Cancelled by admin or customer
}

// ═══════════════════════════════════════════════════════════════
// CONTENT MANAGEMENT
// ═══════════════════════════════════════════════════════════════

model Service {
  id              String   @id @default(uuid())
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  slug            String   @unique // carpet-cleaning, rug-cleaning, etc.
  name            String   // "Carpet Cleaning"
  shortDescription String  @db.Text
  longDescription  String  @db.Text

  // SEO
  metaTitle       String
  metaDescription String
  keywords        String[] @default([])

  // Pricing Display
  basePriceFrom   Float
  priceUnit       String   // "per room", "per sqm", etc.

  // Features
  features        String[] @default([])

  // Display
  iconName        String   // For UI icon selection
  displayOrder    Int      @default(0)
  isActive        Boolean  @default(true)

  @@map("services")
  @@index([slug])
}

model Review {
  id              String   @id @default(uuid())
  createdAt       DateTime @default(now())

  customerName    String
  serviceType     String   // Links to Service.slug
  rating          Int      // 1-5 stars
  reviewText      String   @db.Text
  location        String   // "Manchester", "Stockport", etc.

  // Display
  isApproved      Boolean  @default(false)
  isFeatured      Boolean  @default(false)
  displayOrder    Int      @default(0)

  // Optional booking link
  bookingId       String?

  @@map("reviews")
  @@index([isApproved, isFeatured])
}

model GalleryItem {
  id              String   @id @default(uuid())
  createdAt       DateTime @default(now())

  title           String
  description     String?  @db.Text

  beforeImageUrl  String
  afterImageUrl   String

  serviceType     String   // Links to Service.slug
  location        String   // Town/city

  // Display
  isApproved      Boolean  @default(false)
  isFeatured      Boolean  @default(false)
  displayOrder    Int      @default(0)

  @@map("gallery_items")
  @@index([isApproved, isFeatured])
}

model FAQ {
  id              String   @id @default(uuid())
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  question        String   @db.Text
  answer          String   @db.Text
  category        String   // "booking", "pricing", "services", "general"

  // Display
  displayOrder    Int      @default(0)
  isActive        Boolean  @default(true)

  @@map("faqs")
  @@index([category])
}

model BlogPost {
  id              String   @id @default(uuid())
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  publishedAt     DateTime?

  slug            String   @unique
  title           String
  excerpt         String   @db.Text
  content         String   @db.Text // Markdown or HTML

  // SEO
  metaTitle       String
  metaDescription String
  keywords        String[] @default([])

  // Taxonomy
  category        String   // "cleaning-tips", "industry-news", etc.
  tags            String[] @default([])

  // Media
  featuredImageUrl String?

  // Publishing
  authorName      String   @default("Blowup Cleaners Team")
  isPublished     Boolean  @default(false)

  @@map("blog_posts")
  @@index([slug])
  @@index([isPublished, publishedAt])
}

// ═══════════════════════════════════════════════════════════════
// ADMIN & CONFIGURATION
// ═══════════════════════════════════════════════════════════════

model AdminUser {
  id              String   @id @default(uuid())
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  email           String   @unique
  name            String
  role            AdminRole @default(ADMIN)

  // Linked to Supabase Auth
  supabaseUserId  String   @unique

  lastLoginAt     DateTime?
  isActive        Boolean  @default(true)

  @@map("admin_users")
}

enum AdminRole {
  SUPER_ADMIN
  ADMIN
  VIEWER
}

model Setting {
  id              String   @id @default(uuid())
  key             String   @unique // "base_price_carpet_per_room"
  value           String   // Stored as string, parsed as needed
  type            String   // "number", "string", "boolean", "json"
  description     String?

  updatedAt       DateTime @updatedAt

  @@map("settings")
}
```

### 3.2 Data Relationships

```
Booking (1) ←→ (0..1) Review
  - Optional review after job completion

Service (1) ←→ (*) Review
  - Reviews categorized by service type

Service (1) ←→ (*) GalleryItem
  - Before/after photos organized by service

BlogPost (*) ←→ (*) Service (via tags)
  - Blog posts can reference services

AdminUser (1) ←→ (*) Booking (via status updates)
  - Audit trail for status changes (future enhancement)
```

---

## 4. Application Structure

### 4.1 Directory Structure

```
c:\laragon\www\Carpet\
├── .claude/                    # Claude Code configuration
│   ├── BMad/                   # Multi-agent orchestration
│   ├── rules/                  # Development guidelines
│   └── Todo/                   # Project planning
│
├── docs/                       # Documentation
│   ├── architecture.md         # This file
│   ├── api-reference.md        # API documentation
│   └── deployment.md           # Deployment guide
│
├── prisma/                     # Database
│   ├── schema.prisma           # Database schema
│   ├── migrations/             # Migration history
│   └── seed.ts                 # Seed data
│
├── public/                     # Static assets
│   ├── images/                 # Images (logos, icons)
│   ├── fonts/                  # Custom fonts
│   └── robots.txt              # SEO
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/           # Public route group
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── quote/          # Quote/booking form
│   │   │   ├── services/       # Services pages
│   │   │   │   ├── page.tsx    # Services overview
│   │   │   │   └── [slug]/     # Individual service pages
│   │   │   ├── areas-we-cover/ # Coverage area
│   │   │   ├── about/          # About us
│   │   │   ├── reviews/        # Testimonials
│   │   │   ├── gallery/        # Before/after gallery
│   │   │   ├── faqs/           # FAQs
│   │   │   ├── contact/        # Contact page
│   │   │   ├── blog/           # Blog
│   │   │   │   ├── page.tsx    # Blog index
│   │   │   │   └── [slug]/     # Individual posts
│   │   │   ├── privacy-policy/ # Legal pages
│   │   │   ├── terms/
│   │   │   └── cookies/
│   │   │
│   │   ├── (admin)/            # Admin route group
│   │   │   ├── admin/
│   │   │   │   ├── layout.tsx  # Admin layout (auth check)
│   │   │   │   ├── login/      # Admin login
│   │   │   │   ├── dashboard/  # Admin dashboard
│   │   │   │   ├── leads/      # Booking management
│   │   │   │   ├── content/    # Content management
│   │   │   │   │   ├── services/
│   │   │   │   │   ├── reviews/
│   │   │   │   │   ├── gallery/
│   │   │   │   │   └── blog/
│   │   │   │   └── settings/   # System settings
│   │   │
│   │   ├── api/                # API routes (fallback)
│   │   │   ├── webhooks/       # External webhooks
│   │   │   └── health/         # Health check
│   │   │
│   │   ├── layout.tsx          # Root layout
│   │   ├── error.tsx           # Error boundary
│   │   ├── not-found.tsx       # 404 page
│   │   └── globals.css         # Global styles
│   │
│   ├── components/             # React components
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Toast.tsx
│   │   │
│   │   ├── forms/              # Form components
│   │   │   ├── QuoteForm/      # Multi-step quote form
│   │   │   │   ├── index.tsx
│   │   │   │   ├── Step1ContactInfo.tsx
│   │   │   │   ├── Step2ServiceDetails.tsx
│   │   │   │   ├── Step3PhotoUpload.tsx
│   │   │   │   ├── Step4Scheduling.tsx
│   │   │   │   └── Step5Confirmation.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── ReviewForm.tsx
│   │   │
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── AdminSidebar.tsx
│   │   │
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── BeforeAfter.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── CoverageArea.tsx
│   │   │   └── CTABanner.tsx
│   │   │
│   │   └── admin/              # Admin-specific components
│   │       ├── BookingTable.tsx
│   │       ├── StatusBadge.tsx
│   │       ├── ContentEditor.tsx
│   │       └── StatsCard.tsx
│   │
│   ├── lib/                    # Utilities & libraries
│   │   ├── prisma.ts           # Prisma client
│   │   ├── supabase/           # Supabase clients
│   │   │   ├── client.ts       # Browser client
│   │   │   ├── server.ts       # Server client
│   │   │   └── middleware.ts   # Session management
│   │   ├── validation/         # Zod schemas
│   │   │   ├── booking.schema.ts
│   │   │   ├── contact.schema.ts
│   │   │   └── admin.schema.ts
│   │   ├── utils/              # Helper functions
│   │   │   ├── pricing.ts      # Pricing calculations
│   │   │   ├── distance.ts     # Google Maps integration
│   │   │   ├── email.ts        # Nodemailer setup
│   │   │   ├── sheets.ts       # Google Sheets export
│   │   │   ├── format.ts       # Formatting utilities
│   │   │   └── seo.ts          # SEO helpers
│   │   └── constants/          # Constants
│   │       ├── pricing.ts      # Base pricing config
│   │       ├── services.ts     # Service definitions
│   │       └── coverage.ts     # Coverage areas
│   │
│   ├── actions/                # Server Actions
│   │   ├── booking.actions.ts  # Booking CRUD
│   │   ├── quote.actions.ts    # Quote calculation
│   │   ├── email.actions.ts    # Email sending
│   │   ├── upload.actions.ts   # Photo uploads
│   │   ├── admin.actions.ts    # Admin operations
│   │   └── content.actions.ts  # Content management
│   │
│   ├── types/                  # TypeScript types
│   │   ├── database.types.ts   # Supabase generated types
│   │   ├── booking.types.ts
│   │   ├── service.types.ts
│   │   └── admin.types.ts
│   │
│   └── middleware.ts           # Next.js middleware (auth)
│
├── .env.local                  # Environment variables
├── .env.example                # Environment template
├── .gitignore
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
├── SUPABASE_SETUP.md
└── README.md
```

### 4.2 Route Structure

#### Public Routes (No Authentication Required)

| Route | Purpose | Rendering |
|-------|---------|-----------|
| `/` | Home page with all 12 sections | SSR/ISR |
| `/quote` | Multi-step booking form | CSR (interactive) |
| `/confirmation/[id]` | Booking confirmation | SSR |
| `/services` | Services overview grid | SSR/SSG |
| `/services/[slug]` | Individual service pages (8 total) | SSG |
| `/areas-we-cover` | Coverage area map + towns list | SSR/SSG |
| `/about` | Company story, team, certifications | SSR/SSG |
| `/reviews` | Customer testimonials | SSR/ISR |
| `/gallery` | Before/after photo gallery | SSR/ISR |
| `/faqs` | FAQ accordion | SSR/SSG |
| `/contact` | Contact form | SSR |
| `/blog` | Blog index | SSR/ISR |
| `/blog/[slug]` | Individual blog posts | SSG |
| `/privacy-policy` | Privacy policy | SSG |
| `/terms` | Terms & conditions | SSG |
| `/cookies` | Cookie policy | SSG |

#### Admin Routes (Authentication Required)

| Route | Purpose | Access |
|-------|---------|--------|
| `/admin/login` | Admin login | Public |
| `/admin/dashboard` | Overview stats & recent bookings | ADMIN+ |
| `/admin/leads` | Booking management table | ADMIN+ |
| `/admin/leads/[id]` | Individual booking details | ADMIN+ |
| `/admin/content/services` | Manage service pages | ADMIN+ |
| `/admin/content/reviews` | Approve/edit reviews | ADMIN+ |
| `/admin/content/gallery` | Manage before/after photos | ADMIN+ |
| `/admin/content/blog` | Blog post management | ADMIN+ |
| `/admin/settings` | System settings & pricing config | SUPER_ADMIN |

---

## 5. API Layer & Server Actions

### 5.1 Server Actions Architecture

Next.js Server Actions provide a type-safe, progressive enhancement approach to data mutations. All actions are defined in `src/actions/` and are server-only.

#### 5.1.1 Booking Actions (`src/actions/booking.actions.ts`)

```typescript
'use server'

import { prisma } from '@/lib/prisma'
import { bookingSchema } from '@/lib/validation/booking.schema'
import { calculateDistance } from '@/lib/utils/distance'
import { calculateQuote } from '@/lib/utils/pricing'
import { sendBookingConfirmation } from '@/lib/utils/email'
import { exportToGoogleSheets } from '@/lib/utils/sheets'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export async function createBooking(formData: z.infer<typeof bookingSchema>) {
  // 1. Validate input
  const validated = bookingSchema.parse(formData)

  // 2. Calculate distance from Manchester
  const distance = await calculateDistance('M1 1AA', validated.postcode)

  if (distance > 100) {
    return {
      success: false,
      error: 'Sorry, we only service areas within 100 miles of Manchester'
    }
  }

  // 3. Calculate pricing
  const quote = calculateQuote({
    serviceType: validated.serviceType,
    propertyType: validated.propertyType,
    numberOfRooms: validated.numberOfRooms,
    squareMeters: validated.squareMeters,
    stainRemoval: validated.stainRemoval,
    distance
  })

  // 4. Create booking in database
  const booking = await prisma.booking.create({
    data: {
      ...validated,
      distance,
      travelCost: quote.travelCost,
      serviceCost: quote.serviceCost,
      totalCost: quote.totalCost,
      status: 'PENDING'
    }
  })

  // 5. Send confirmation email (async, don't await)
  sendBookingConfirmation(booking).catch(console.error)

  // 6. Export to Google Sheets (async, don't await)
  exportToGoogleSheets(booking).catch(console.error)

  // 7. Revalidate relevant pages
  revalidatePath('/admin/leads')

  return {
    success: true,
    bookingId: booking.id
  }
}

export async function getBookingById(id: string) {
  return await prisma.booking.findUnique({
    where: { id }
  })
}

export async function updateBookingStatus(
  id: string,
  status: BookingStatus,
  adminNotes?: string
) {
  const booking = await prisma.booking.update({
    where: { id },
    data: {
      status,
      adminNotes,
      completedAt: status === 'COMPLETED' ? new Date() : undefined
    }
  })

  revalidatePath('/admin/leads')
  revalidatePath(`/admin/leads/${id}`)

  return { success: true, booking }
}
```

#### 5.1.2 Quote Actions (`src/actions/quote.actions.ts`)

```typescript
'use server'

import { calculateDistance } from '@/lib/utils/distance'
import { calculateQuote } from '@/lib/utils/pricing'

export async function getInstantQuote(data: {
  postcode: string
  serviceType: string
  propertyType: string
  numberOfRooms?: number
  squareMeters?: number
  stainRemoval: boolean
}) {
  try {
    const distance = await calculateDistance('M1 1AA', data.postcode)

    if (distance > 100) {
      return {
        success: false,
        error: 'Outside service area'
      }
    }

    const quote = calculateQuote({
      ...data,
      distance
    })

    return {
      success: true,
      quote: {
        distance,
        travelCost: quote.travelCost,
        serviceCost: quote.serviceCost,
        totalCost: quote.totalCost,
        breakdown: quote.breakdown
      }
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to calculate quote'
    }
  }
}
```

#### 5.1.3 Upload Actions (`src/actions/upload.actions.ts`)

```typescript
'use server'

import { createClient } from '@/lib/supabase/server'

export async function uploadBookingPhoto(
  formData: FormData
) {
  const file = formData.get('file') as File

  if (!file) {
    return { success: false, error: 'No file provided' }
  }

  // Validate file type and size
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
  if (!allowedTypes.includes(file.type)) {
    return { success: false, error: 'Invalid file type' }
  }

  if (file.size > 10 * 1024 * 1024) { // 10MB
    return { success: false, error: 'File too large (max 10MB)' }
  }

  const supabase = await createClient()

  // Generate unique filename
  const ext = file.name.split('.').pop()
  const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`

  const { data, error } = await supabase.storage
    .from('booking-photos')
    .upload(filename, file, {
      contentType: file.type,
      upsert: false
    })

  if (error) {
    return { success: false, error: error.message }
  }

  const { data: { publicUrl } } = supabase.storage
    .from('booking-photos')
    .getPublicUrl(data.path)

  return {
    success: true,
    url: publicUrl
  }
}
```

### 5.2 Utility Functions

#### 5.2.1 Pricing Calculation (`src/lib/utils/pricing.ts`)

```typescript
interface QuoteParams {
  serviceType: string
  propertyType: string
  numberOfRooms?: number
  squareMeters?: number
  stainRemoval: boolean
  distance: number
}

interface Quote {
  serviceCost: number
  travelCost: number
  totalCost: number
  breakdown: {
    basePrice: number
    stainRemovalFee: number
    travelCost: number
  }
}

export function calculateQuote(params: QuoteParams): Quote {
  const {
    serviceType,
    numberOfRooms,
    squareMeters,
    stainRemoval,
    distance
  } = params

  // Base pricing from environment variables
  const basePrices = {
    'carpet-cleaning': parseFloat(process.env.BASE_PRICE_CARPET_PER_ROOM || '25'),
    'rug-cleaning': parseFloat(process.env.BASE_PRICE_RUG_CLEANING || '30'),
    'upholstery-cleaning': parseFloat(process.env.BASE_PRICE_UPHOLSTERY_PER_SEAT || '20'),
    'leather-cleaning': parseFloat(process.env.BASE_PRICE_LEATHER_CLEANING || '35'),
    'mattress-cleaning-single': parseFloat(process.env.BASE_PRICE_MATTRESS_SINGLE || '40'),
    'mattress-cleaning-double': parseFloat(process.env.BASE_PRICE_MATTRESS_DOUBLE || '50'),
    'mattress-cleaning-king': parseFloat(process.env.BASE_PRICE_MATTRESS_KING || '60'),
    'stain-removal': parseFloat(process.env.BASE_PRICE_STAIN_REMOVAL || '15'),
    'commercial-cleaning': parseFloat(process.env.BASE_PRICE_COMMERCIAL_PER_SQM || '2'),
    'car-valeting': parseFloat(process.env.BASE_PRICE_CAR_VALETING || '50'),
  }

  let basePrice = 0

  // Calculate base price based on service type
  switch (serviceType) {
    case 'carpet-cleaning':
      basePrice = basePrices['carpet-cleaning'] * (numberOfRooms || 1)
      break
    case 'rug-cleaning':
      basePrice = basePrices['rug-cleaning']
      break
    case 'upholstery-cleaning':
      basePrice = basePrices['upholstery-cleaning'] * (numberOfRooms || 1) // Treat as seats
      break
    case 'commercial-cleaning':
      basePrice = basePrices['commercial-cleaning'] * (squareMeters || 50)
      break
    case 'car-valeting':
      basePrice = basePrices['car-valeting']
      break
    default:
      basePrice = basePrices['carpet-cleaning'] * (numberOfRooms || 1)
  }

  // Add stain removal fee
  const stainRemovalFee = stainRemoval ? basePrices['stain-removal'] : 0

  // Calculate travel cost
  const freeRadiusMiles = parseFloat(process.env.NEXT_PUBLIC_FREE_RADIUS_MILES || '20')
  const travelCostPerMile = parseFloat(process.env.NEXT_PUBLIC_TRAVEL_COST_PER_MILE || '0.78')

  const travelCost = distance > freeRadiusMiles
    ? (distance - freeRadiusMiles) * travelCostPerMile
    : 0

  const serviceCost = basePrice + stainRemovalFee
  const totalCost = serviceCost + travelCost

  return {
    serviceCost,
    travelCost,
    totalCost,
    breakdown: {
      basePrice,
      stainRemovalFee,
      travelCost
    }
  }
}
```

#### 5.2.2 Distance Calculation (`src/lib/utils/distance.ts`)

```typescript
import axios from 'axios'

export async function calculateDistance(
  origin: string,
  destination: string
): Promise<number> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    throw new Error('Google Maps API key not configured')
  }

  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/distancematrix/json',
      {
        params: {
          origins: origin,
          destinations: destination,
          units: 'imperial', // Miles
          key: apiKey
        }
      }
    )

    const result = response.data.rows[0].elements[0]

    if (result.status === 'OK') {
      // Distance in meters, convert to miles
      const distanceInMiles = result.distance.value * 0.000621371
      return Math.round(distanceInMiles * 10) / 10 // Round to 1 decimal
    } else {
      throw new Error(`Distance calculation failed: ${result.status}`)
    }
  } catch (error) {
    console.error('Distance calculation error:', error)
    throw new Error('Failed to calculate distance')
  }
}
```

#### 5.2.3 Email Sending (`src/lib/utils/email.ts`)

```typescript
import nodemailer from 'nodemailer'
import type { Booking } from '@prisma/client'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
})

export async function sendBookingConfirmation(booking: Booking) {
  const customerEmail = {
    from: `"${process.env.NEXT_PUBLIC_BUSINESS_NAME}" <${process.env.SMTP_USER}>`,
    to: booking.email,
    subject: 'Booking Confirmation - Blowup Cleaners',
    html: `
      <h1>Thank you for your booking!</h1>
      <p>Hi ${booking.name},</p>
      <p>We've received your booking request for ${booking.serviceType}.</p>

      <h2>Booking Details</h2>
      <ul>
        <li><strong>Service:</strong> ${booking.serviceType}</li>
        <li><strong>Address:</strong> ${booking.address}, ${booking.postcode}</li>
        <li><strong>Preferred Date:</strong> ${new Date(booking.preferredDate).toLocaleDateString()}</li>
        <li><strong>Total Cost:</strong> £${booking.totalCost.toFixed(2)}</li>
      </ul>

      <p>We'll review your booking and confirm within 24 hours.</p>

      <p>Best regards,<br>Blowup Cleaners Team</p>
    `
  }

  const adminEmail = {
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Booking: ${booking.name} - ${booking.serviceType}`,
    html: `
      <h1>New Booking Received</h1>
      <p>Booking ID: ${booking.id}</p>

      <h2>Customer Details</h2>
      <ul>
        <li><strong>Name:</strong> ${booking.name}</li>
        <li><strong>Email:</strong> ${booking.email}</li>
        <li><strong>Phone:</strong> ${booking.phone}</li>
        <li><strong>Address:</strong> ${booking.address}, ${booking.postcode}</li>
      </ul>

      <h2>Service Details</h2>
      <ul>
        <li><strong>Service:</strong> ${booking.serviceType}</li>
        <li><strong>Property Type:</strong> ${booking.propertyType}</li>
        <li><strong>Rooms:</strong> ${booking.numberOfRooms || 'N/A'}</li>
        <li><strong>Preferred Date:</strong> ${new Date(booking.preferredDate).toLocaleDateString()}</li>
        <li><strong>Total Cost:</strong> £${booking.totalCost.toFixed(2)}</li>
      </ul>

      <p><a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin/leads/${booking.id}">View in Dashboard</a></p>
    `
  }

  await Promise.all([
    transporter.sendMail(customerEmail),
    transporter.sendMail(adminEmail)
  ])
}

export async function sendBookingStatusUpdate(
  booking: Booking,
  newStatus: string
) {
  const statusMessages = {
    CONFIRMED: 'Your booking has been confirmed!',
    IN_PROGRESS: 'We\'re on our way!',
    COMPLETED: 'Thank you for choosing Blowup Cleaners',
    CANCELLED: 'Your booking has been cancelled'
  }

  await transporter.sendMail({
    from: `"${process.env.NEXT_PUBLIC_BUSINESS_NAME}" <${process.env.SMTP_USER}>`,
    to: booking.email,
    subject: `Booking Update - ${statusMessages[newStatus as keyof typeof statusMessages]}`,
    html: `
      <h1>${statusMessages[newStatus as keyof typeof statusMessages]}</h1>
      <p>Hi ${booking.name},</p>
      <p>Your booking status has been updated to: <strong>${newStatus}</strong></p>

      ${booking.adminNotes ? `<p>Note from our team: ${booking.adminNotes}</p>` : ''}

      <p>If you have any questions, please don't hesitate to contact us.</p>

      <p>Best regards,<br>Blowup Cleaners Team</p>
    `
  })
}
```

#### 5.2.4 Google Sheets Export (`src/lib/utils/sheets.ts`)

```typescript
import { google } from 'googleapis'
import type { Booking } from '@prisma/client'

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

const sheets = google.sheets({ version: 'v4', auth })

export async function exportToGoogleSheets(booking: Booking) {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

  if (!spreadsheetId) {
    console.warn('Google Sheets integration not configured')
    return
  }

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Bookings!A:P',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date(booking.createdAt).toISOString(),
          booking.id,
          booking.name,
          booking.email,
          booking.phone,
          booking.address,
          booking.postcode,
          booking.serviceType,
          booking.propertyType,
          booking.numberOfRooms || '',
          new Date(booking.preferredDate).toLocaleDateString(),
          `£${booking.serviceCost.toFixed(2)}`,
          `£${booking.travelCost.toFixed(2)}`,
          `£${booking.totalCost.toFixed(2)}`,
          booking.status,
          booking.additionalNotes || ''
        ]]
      }
    })
  } catch (error) {
    console.error('Failed to export to Google Sheets:', error)
    // Don't throw - this is a non-critical operation
  }
}
```

---

## 6. Security Architecture

### 6.1 Authentication & Authorization

**Admin Authentication:**
- Supabase Auth with email/password
- Session-based authentication via cookies
- Middleware checks on all `/admin/*` routes
- Role-based access control (SUPER_ADMIN, ADMIN, VIEWER)

**Public API Protection:**
- Rate limiting on Server Actions (via Vercel)
- CORS configuration for API routes
- Input validation with Zod on all endpoints
- SQL injection prevention via Prisma

### 6.2 Data Protection

**Sensitive Data:**
- Environment variables for API keys (never in client code)
- Database credentials stored in `.env.local` (gitignored)
- Supabase RLS (Row Level Security) for database protection

**File Uploads:**
- File type validation (images only)
- File size limits (10MB max)
- Unique filename generation
- Supabase Storage with public/private bucket options

**GDPR Compliance:**
- Cookie consent banner
- Privacy policy page
- Data export capability (future)
- Right to deletion (admin function)

### 6.3 API Security Best Practices

```typescript
// Example: Secure Server Action with validation
'use server'

import { ratelimit } from '@/lib/ratelimit'

export async function createBooking(formData: FormData) {
  // 1. Rate limiting
  const identifier = headers().get('x-forwarded-for') || 'anonymous'
  const { success } = await ratelimit.limit(identifier)

  if (!success) {
    return { error: 'Too many requests. Please try again later.' }
  }

  // 2. Input validation
  const validated = bookingSchema.safeParse(formData)

  if (!validated.success) {
    return { error: 'Invalid input', details: validated.error.flatten() }
  }

  // 3. Sanitize inputs (Prisma handles SQL injection)
  // 4. Business logic
  // 5. Return non-sensitive data only
}
```

---

## 7. SEO Architecture

### 7.1 Technical SEO

**Next.js Metadata API:**
```typescript
// Example: Service page metadata
import type { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug)

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://methodclean.co.uk/services/${service.slug}`,
      siteName: 'Blowup Cleaners',
      images: ['/images/og-image.jpg'],
      locale: 'en_GB',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: ['/images/og-image.jpg']
    },
    alternates: {
      canonical: `https://methodclean.co.uk/services/${service.slug}`
    }
  }
}
```

**Structured Data (Schema.org):**
```typescript
// Local Business Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Blowup Cleaners',
  'image': 'https://methodclean.co.uk/images/logo.png',
  'telephone': '+44-XXX-XXX-XXXX',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '123 Main Street',
    'addressLocality': 'Manchester',
    'postalCode': 'M1 1AA',
    'addressCountry': 'GB'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 53.4808,
    'longitude': -2.2426
  },
  'areaServed': {
    '@type': 'GeoCircle',
    'geoMidpoint': {
      '@type': 'GeoCoordinates',
      'latitude': 53.4808,
      'longitude': -2.2426
    },
    'geoRadius': '100 miles'
  },
  'priceRange': '££',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.8',
    'reviewCount': '127'
  }
}
```

### 7.2 Content SEO Strategy

**Service Pages:**
- 8 individual service pages targeting specific keywords
- "Carpet Cleaning Manchester", "Rug Cleaning Near Me", etc.
- Long-form content (1000+ words) with H2/H3 structure
- FAQ sections with FAQ schema markup
- Before/after image galleries

**Location Pages:**
- `/areas-we-cover` with list of towns/cities
- Internal links to service pages
- Google Maps integration showing coverage area

**Blog Strategy:**
- Educational content ("How to Remove Wine Stains")
- Industry news ("Latest Carpet Cleaning Technology")
- Local content ("Best Carpet Cleaners in Stockport")

### 7.3 Performance SEO

**Core Web Vitals Targets:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Optimization Techniques:**
- Next.js Image optimization with WebP/AVIF
- Font optimization (next/font)
- Code splitting and lazy loading
- Static generation where possible
- CDN delivery via Vercel Edge Network

---

## 8. Performance Architecture

### 8.1 Rendering Strategy

| Page Type | Strategy | Rationale |
|-----------|----------|-----------|
| Home | SSR/ISR (revalidate: 3600) | Frequent updates to reviews/gallery |
| Service Pages | SSG | Static content, fast load times |
| Quote Form | CSR | Interactive, client-side state |
| Blog Posts | SSG (on-demand ISR) | Static but can be updated |
| Admin Pages | SSR | Fresh data required |
| Reviews | SSR/ISR | Balance freshness and performance |

### 8.2 Caching Strategy

**Next.js Cache:**
```typescript
// Static pages: Cache indefinitely
export const revalidate = false

// ISR pages: Revalidate hourly
export const revalidate = 3600

// Dynamic pages: No caching
export const dynamic = 'force-dynamic'
```

**Server Action Revalidation:**
```typescript
import { revalidatePath, revalidateTag } from 'next/cache'

// After creating booking
revalidatePath('/admin/leads')

// After updating service
revalidateTag('services')
```

**Client-side Caching:**
- React Query for server state (future enhancement)
- LocalStorage for form drafts
- Service Worker for offline functionality (future)

### 8.3 Database Performance

**Prisma Optimizations:**
```typescript
// Index frequently queried fields
@@index([status])
@@index([createdAt])
@@index([preferredDate])

// Connection pooling via Supabase
DATABASE_URL="postgresql://...?pgbouncer=true"

// Efficient queries with select
const bookings = await prisma.booking.findMany({
  select: {
    id: true,
    name: true,
    status: true,
    createdAt: true
  },
  where: { status: 'PENDING' },
  orderBy: { createdAt: 'desc' },
  take: 20
})
```

---

## 9. Testing Strategy

### 9.1 Testing Pyramid

```
              /\
             /  \          E2E Tests (10%)
            /────\         - Critical user flows
           /      \        - Quote submission
          /────────\       - Admin booking management
         /          \
        /────────────\     Integration Tests (30%)
       /              \    - Server Actions
      /────────────────\   - API integrations
     /                  \  - Database operations
    /────────────────────\
   /                      \ Unit Tests (60%)
  /________________________\ - Utility functions
                              - Pricing calculations
                              - Validation schemas
```

### 9.2 Testing Tools

- **Unit Tests:** Vitest or Jest
- **Integration Tests:** Vitest + Prisma Test Environment
- **E2E Tests:** Playwright
- **Visual Regression:** Playwright Screenshots
- **Type Checking:** TypeScript strict mode

### 9.3 CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run build
```

---

## 10. Deployment Architecture

### 10.1 Vercel Deployment

**Environment Configuration:**
- Production: `production` branch → methodclean.co.uk
- Staging: `staging` branch → staging.methodclean.co.uk
- Preview: All PRs → auto-generated URLs

**Environment Variables:**
- Set in Vercel dashboard
- Separate values for production/preview
- Encrypted at rest

**Build Configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm ci",
  "devCommand": "npm run dev",
  "framework": "nextjs"
}
```

### 10.2 Supabase Configuration

**Production Database:**
- Dedicated Supabase project
- Connection pooling enabled
- Automatic backups (daily)
- Point-in-time recovery

**Database Migrations:**
```bash
# Development
npm run prisma:push

# Production (via CI/CD)
npx prisma migrate deploy
```

### 10.3 Monitoring & Logging

**Vercel Analytics:**
- Real User Monitoring (RUM)
- Web Vitals tracking
- Deployment logs

**Error Tracking:**
- Sentry integration (future)
- Server Action error boundaries
- Client error boundaries

**Logging:**
```typescript
// Structured logging
console.log(JSON.stringify({
  level: 'info',
  message: 'Booking created',
  bookingId: booking.id,
  timestamp: new Date().toISOString()
}))
```

---

## 11. Scalability Considerations

### 11.1 Current Architecture Limits

**Expected Scale:**
- 1,000 bookings/month (33/day)
- 10,000 page views/month
- 10 concurrent admin users

**Current Capacity:**
- Vercel: 100GB bandwidth/month (Hobby)
- Supabase: 500MB database (Free tier)
- Next.js: Scales automatically with Vercel

### 11.2 Future Scaling Strategies

**When hitting limits:**

1. **Database Scaling:**
   - Upgrade to Supabase Pro ($25/month for 8GB)
   - Add read replicas for heavy read operations
   - Implement database sharding (if > 100k bookings)

2. **CDN & Caching:**
   - Cloudflare in front of Vercel
   - Aggressive ISR caching (24hr revalidation)
   - Redis for session storage (if needed)

3. **Job Queue:**
   - Background job processing for emails/exports
   - Use Vercel Cron or external service (Trigger.dev)

4. **Search Optimization:**
   - Elasticsearch for admin search (if > 10k bookings)
   - Algolia for public search (if needed)

---

## 12. Development Workflow

### 12.1 Git Branching Strategy

```
main (production)
  ↑
staging
  ↑
develop
  ↑
feature/quote-form
feature/admin-dashboard
```

### 12.2 BMad Agent Workflow

Following the BMad orchestration system:

**Phase 1: Planning (Current)**
- Architect (Winston) → System Architecture (this document)

**Phase 2: Story Breakdown (Next)**
- Scrum Master (Bob) → Break architecture into user stories
- Product Owner (Sarah) → Prioritize stories

**Phase 3: Development**
- Developer (James) → Implement stories iteratively
- UX Expert (Sally) → Design review for UI components

**Phase 4: Quality Assurance**
- QA (Quinn) → Test completed features
- Master → Final integration review

### 12.3 Commit Conventions

```
feat: Add quote calculation logic
fix: Correct distance calculation for postcodes
docs: Update architecture document
style: Format pricing utilities
refactor: Extract email sending to separate module
test: Add unit tests for pricing calculator
chore: Update dependencies
```

---

## 13. Open Questions & Future Enhancements

### 13.1 Open Questions

1. **Payment Integration:** Should we integrate Stripe/PayPal for upfront deposits?
2. **Booking Scheduling:** Do we need a calendar view for admin scheduling?
3. **Customer Portal:** Should customers be able to track their booking status?
4. **Multi-language:** Support for Welsh language content?

### 13.2 Future Enhancements (Phase 2+)

1. **Real-time Chat:** WhatsApp/Intercom integration
2. **SMS Notifications:** Twilio for booking reminders
3. **Advanced Analytics:** Custom dashboard with charts
4. **Mobile App:** React Native app for admin on-the-go
5. **AI Chatbot:** Answer common questions automatically
6. **Loyalty Program:** Repeat customer discounts
7. **Referral System:** Customer referral tracking
8. **Advanced Search:** Elasticsearch for admin search
9. **Multi-location:** Expand beyond Manchester

---

## 14. Conclusion

This architecture provides a solid foundation for Blowup Cleaners's digital presence, balancing:

✅ **Performance** - Fast load times, excellent Core Web Vitals
✅ **Scalability** - Can grow from 100 to 10,000 bookings/month
✅ **Maintainability** - Clean code structure, TypeScript safety
✅ **SEO** - Strong technical SEO foundation for local search
✅ **Developer Experience** - Modern tools, clear patterns
✅ **Cost Efficiency** - Free tier to start, scales with revenue

**Next Steps:**
1. ✅ Architecture document complete
2. 🔄 Story breakdown (Scrum Master)
3. 🔄 UI/UX design (UX Expert)
4. 🔄 Iterative development (Developer)
5. 🔄 Quality gates (QA)

---

**Document Approval:**

- [ ] Technical Review (Architect)
- [ ] Business Review (PM/PO)
- [ ] Security Review (if required)
- [ ] Final Approval (Master)

---

*This document is a living artifact and will be updated as the system evolves.*
