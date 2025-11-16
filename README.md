# Method Clean - Carpet Cleaning Service Platform

A comprehensive, production-ready Next.js web platform for Method Clean - a professional carpet cleaning service in Manchester. This platform provides a complete online presence with instant quotes, multi-step booking forms, admin panel, and integrated lead management.

## Features

### Customer-Facing Features
- **Instant Price Estimates**: Real-time pricing calculator based on service type, property size, and distance
- **Multi-Step Booking Form**: Intuitive 5-step form with validation and auto-save
- **8 Service Pages**: Dedicated pages for Carpet Cleaning, Upholstery, Rug Cleaning, Stain Removal, Pet Odor Removal, End of Tenancy, Mattress Cleaning, and Commercial
- **Distance-Based Pricing**: Automatic travel cost calculation (free within 20 miles, £0.78/mile beyond)
- **Service Locator**: Coverage map for 50+ locations across Greater Manchester
- **Reviews & Testimonials**: Display customer reviews with JSON-LD schema markup
- **Before/After Gallery**: Project showcase with category filtering
- **FAQs**: 26+ questions across 5 categories with schema markup
- **Contact Form**: Multi-purpose contact form with subject categorization
- **Legal Pages**: Privacy Policy, Terms & Conditions, Cookie Policy

### Admin Panel Features
- **Dashboard**: Overview statistics with recent bookings and quotes
- **Bookings Management**: View, filter, and manage all customer bookings
- **Quotes Management**: Track instant quotes and conversion rates
- **Contact Messages**: Centralized inbox for all customer inquiries
- **Booking Details**: Individual booking view with status updates and quick actions
- **Session-Based Authentication**: Secure admin access with httpOnly cookies

### Technical Features
- **SEO Optimized**: Dynamic sitemap, robots.txt, JSON-LD schema markup, meta tags
- **Type-Safe**: Full TypeScript coverage with Zod validation
- **Database**: PostgreSQL via Supabase with Prisma ORM
- **Responsive Design**: Mobile-first approach with Tailwind CSS v3
- **Server Components**: Next.js 16 App Router for optimal performance
- **Google Sheets Integration**: Automatic lead export (optional)
- **Email Notifications**: SMTP integration for automated emails (optional)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Database**: Supabase (PostgreSQL) with Prisma ORM
- **Form Handling**: React Hook Form + Zod validation
- **Authentication**: Session-based with encrypted cookies
- **Optional APIs**: Google Maps API, Google Sheets API, Nodemailer

## Project Structure

```
Carpet/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── layout.tsx                # Root layout with Header/Footer
│   │   ├── page.tsx                  # Homepage with sections
│   │   ├── globals.css               # Global styles & Tailwind imports
│   │   ├── about/                    # About us page
│   │   ├── areas/                    # Service areas page
│   │   ├── contact/                  # Contact form page
│   │   ├── faqs/                     # FAQs with schema markup
│   │   ├── gallery/                  # Before/after gallery
│   │   ├── quote/                    # Multi-step quote/booking form
│   │   ├── reviews/                  # Customer testimonials
│   │   ├── services/                 # Services pages
│   │   │   ├── page.tsx              # Services overview
│   │   │   └── [slug]/               # Dynamic service detail pages
│   │   ├── privacy/                  # Privacy policy
│   │   ├── terms/                    # Terms & conditions
│   │   ├── cookies/                  # Cookie policy
│   │   ├── admin/                    # Admin panel
│   │   │   ├── layout.tsx            # Admin layout with auth
│   │   │   ├── page.tsx              # Admin dashboard
│   │   │   ├── login/                # Admin login page
│   │   │   ├── bookings/             # Bookings management
│   │   │   │   ├── page.tsx          # All bookings list
│   │   │   │   └── [id]/             # Individual booking detail
│   │   │   ├── quotes/               # Quotes management
│   │   │   └── contacts/             # Contact messages
│   │   ├── sitemap.ts                # Dynamic sitemap generation
│   │   └── robots.ts                 # Robots.txt configuration
│   ├── components/
│   │   ├── ui/                       # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── index.ts
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── sections/                 # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── index.ts
│   │   └── forms/                    # Form components
│   │       └── QuoteForm/            # Multi-step form
│   │           ├── index.tsx
│   │           ├── useQuoteForm.ts
│   │           ├── Step1ContactInfo.tsx
│   │           ├── Step2ServiceDetails.tsx
│   │           ├── Step3PricingReview.tsx
│   │           ├── Step4Scheduling.tsx
│   │           └── Step5Confirmation.tsx
│   ├── lib/
│   │   ├── db.ts                     # Prisma client instance
│   │   ├── actions/                  # Server Actions
│   │   │   ├── booking.ts            # Create booking
│   │   │   ├── quote.ts              # Get instant quote
│   │   │   ├── contact.ts            # Submit contact form
│   │   │   ├── upload.ts             # File upload handling
│   │   │   ├── content.ts            # Content management
│   │   │   └── admin.ts              # Admin auth actions
│   │   ├── auth/                     # Authentication
│   │   │   └── admin.ts              # Admin session management
│   │   ├── utils/                    # Utility functions
│   │   │   ├── pricing.ts            # Price calculation logic
│   │   │   ├── distance.ts           # Distance calculation
│   │   │   ├── email.ts              # Email sending (optional)
│   │   │   └── sheets.ts             # Google Sheets integration (optional)
│   │   ├── validation/               # Zod schemas
│   │   │   └── schemas.ts            # All validation schemas
│   │   └── data/                     # Static data
│   │       └── services.ts           # Service data (8 services)
│   └── types/                        # TypeScript types
│       └── index.ts                  # Type definitions
├── prisma/
│   └── schema.prisma                 # Database schema (3 models)
├── public/                           # Static assets
│   └── (images, icons, etc.)
├── .env.example                      # Environment variables template
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies and scripts
```

## Getting Started

### Prerequisites

- **Node.js** 18+ and npm/yarn
- **PostgreSQL Database** (Supabase recommended, free tier available)
- **Admin Credentials** (set in environment variables)
- **Optional APIs**:
  - Google Maps API key (for accurate distance calculation)
  - Google Sheets API credentials (for lead export)
  - SMTP credentials (for email notifications)

### Quick Start

1. **Clone and install dependencies**:
   ```bash
   git clone <repository-url>
   cd Carpet
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.example` to `.env` or `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   **Required variables**:
   ```env
   DATABASE_URL="postgresql://user:password@host:5432/database?pgbouncer=true"
   DIRECT_URL="postgresql://user:password@host:5432/database"
   ADMIN_USERNAME="admin"
   ADMIN_PASSWORD="your-secure-password"
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   ```

   **Optional variables** (see `.env.example` for all options):
   - `GOOGLE_MAPS_API_KEY` - For distance calculation
   - `SMTP_*` - For email notifications
   - `GOOGLE_SHEETS_*` - For lead export to Google Sheets

3. **Set up the database**:

   **Option A: Using Supabase** (Recommended)
   - Create a free account at [supabase.com](https://supabase.com)
   - Create a new project
   - Get your connection strings from Settings > Database
   - Update `DATABASE_URL` and `DIRECT_URL` in `.env.local`

   **Option B: Local PostgreSQL**
   - Install PostgreSQL locally
   - Create a database: `createdb carpet_cleaning`
   - Update connection strings in `.env.local`

4. **Initialize the database**:
   ```bash
   npm run prisma:generate
   npm run prisma:push
   ```

   This will:
   - Generate the Prisma Client
   - Create all tables in your database (Booking, Quote, ContactMessage)

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Access the application**:
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Admin Panel**: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
     - Default credentials: `admin` / `changeme123` (change in `.env.local`)
   - **Database GUI**: `npm run prisma:studio` (opens at localhost:5555)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:push` - Push schema changes to database
- `npm run prisma:studio` - Open Prisma Studio (database GUI)

## Configuration

### Pricing Configuration

Base prices are configured in `.env.local`:
- `BASE_PRICE_CARPET_PER_ROOM`: Price per room for carpet cleaning (default: £25)
- `BASE_PRICE_RUG_CLEANING`: Base price for rug cleaning (default: £30)
- `BASE_PRICE_UPHOLSTERY_PER_SEAT`: Price per seat for upholstery (default: £20)
- And more...

### Travel Cost Configuration

- `NEXT_PUBLIC_SERVICE_RADIUS_MILES`: Maximum service distance (default: 100 miles)
- `NEXT_PUBLIC_FREE_RADIUS_MILES`: Distance with no travel charge (default: 20 miles)
- `NEXT_PUBLIC_TRAVEL_COST_PER_MILE`: Cost per mile beyond free radius (default: £0.78)

## Database Schema

The platform uses PostgreSQL (via Supabase or local) with Prisma ORM. Three main models:

### 1. Booking
Complete booking submissions from the multi-step form:
- **Identity**: `id` (UUID, primary key)
- **Contact**: name, email, phone, address, postcode
- **Service**: serviceType, numberOfRooms, squareMeters, stainRemoval
- **Scheduling**: preferredDate, preferredTime
- **Pricing**: distance, serviceCost, travelCost, totalCost
- **Media**: photoUrls (array), specialRequirements
- **Status**: status (pending/confirmed/completed/cancelled)
- **Timestamps**: createdAt, updatedAt

### 2. Quote
Instant quote requests (before full booking):
- **Identity**: `id` (UUID, primary key)
- **Service**: serviceType, numberOfRooms, squareMeters, stainRemoval
- **Location**: postcode, distance
- **Pricing**: serviceCost, travelCost, totalCost
- **Conversion**: converted (boolean - tracks if quote became booking)
- **Timestamps**: createdAt, updatedAt

### 3. ContactMessage
General contact form submissions:
- **Identity**: `id` (UUID, primary key)
- **Contact**: name, email, phone (optional)
- **Content**: subject, message
- **Timestamps**: createdAt

See [prisma/schema.prisma](prisma/schema.prisma) for complete schema definition.

## Server Actions (API)

The application uses Next.js Server Actions instead of traditional API routes:

### Booking Actions (`src/lib/actions/booking.ts`)
- `createBooking(data)` - Create new booking from multi-step form
- Validates data with Zod, saves to database, optional email/sheets integration

### Quote Actions (`src/lib/actions/quote.ts`)
- `getInstantQuote(data)` - Calculate instant price quote
- Returns pricing breakdown with distance calculation

### Contact Actions (`src/lib/actions/contact.ts`)
- `submitContactForm(data)` - Handle contact form submissions
- Saves to ContactMessage model

### Admin Actions (`src/lib/actions/admin.ts`)
- `loginAdmin(formData)` - Admin authentication
- `logoutAdminAction()` - Admin logout

### Upload Actions (`src/lib/actions/upload.ts`)
- `uploadPhotos(files)` - Handle photo uploads (optional, requires Supabase Storage)

## Deployment

### Deploy to Vercel (Recommended)

Vercel provides seamless Next.js deployment with zero configuration:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel auto-detects Next.js configuration

3. **Configure Environment Variables**:
   Add all variables from `.env.example` in Vercel dashboard:
   - Go to Settings > Environment Variables
   - Add production values for:
     - `DATABASE_URL` (from Supabase)
     - `DIRECT_URL` (from Supabase)
     - `ADMIN_USERNAME` (your choice)
     - `ADMIN_PASSWORD` (strong password)
     - `NEXT_PUBLIC_BASE_URL` (your domain, e.g., `https://methodclean.com`)
     - Optional: `GOOGLE_MAPS_API_KEY`, `SMTP_*`, `GOOGLE_SHEETS_*`

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Get your production URL (e.g., `https://your-project.vercel.app`)

5. **Custom Domain** (Optional):
   - Go to Settings > Domains
   - Add your custom domain (e.g., `methodclean.com`)
   - Update `NEXT_PUBLIC_BASE_URL` environment variable

### Production Checklist

- [ ] Change `ADMIN_PASSWORD` to a strong password
- [ ] Update `NEXT_PUBLIC_BASE_URL` to production domain
- [ ] Set up production Supabase project (not development)
- [ ] Configure Google Maps API key with domain restrictions
- [ ] Test booking form submission
- [ ] Test admin panel login
- [ ] Verify email notifications (if enabled)
- [ ] Check sitemap.xml and robots.txt
- [ ] Submit sitemap to Google Search Console

## Optional Integrations

### Google Sheets Integration

Export leads automatically to Google Sheets:

1. **Create Service Account**:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create new project or select existing
   - Enable Google Sheets API
   - Create Service Account and download JSON key

2. **Configure Environment**:
   ```env
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEETS_CLIENT_EMAIL="your-service@project.iam.gserviceaccount.com"
   GOOGLE_SPREADSHEET_ID="your-spreadsheet-id-from-url"
   ```

3. **Share Spreadsheet**:
   - Share your Google Sheet with the service account email
   - Grant "Editor" permissions

### Email Notifications

Send automated emails for bookings and quotes:

1. **Gmail Setup** (Recommended for small businesses):
   - Enable 2-Factor Authentication
   - Create App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

2. **Configure Environment**:
   ```env
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT=587
   SMTP_USER="your-email@gmail.com"
   SMTP_PASSWORD="your-app-password"
   ADMIN_EMAIL="admin@methodclean.co.uk"
   ```

### Google Maps API

Enable accurate distance calculation:

1. **Get API Key**:
   - Go to [Google Maps Platform](https://console.cloud.google.com/google/maps-apis)
   - Enable Distance Matrix API and Geocoding API
   - Create API key

2. **Configure Environment**:
   ```env
   GOOGLE_MAPS_API_KEY="your-api-key"
   ```

3. **Set Restrictions** (Production):
   - Restrict to your domain in Google Cloud Console
   - Enable only Distance Matrix and Geocoding APIs

## Admin Panel

Access the admin panel at `/admin/login`:

- **Default Credentials**: `admin` / `changeme123` (change in production!)
- **Dashboard**: Overview statistics and recent activity
- **Bookings**: View and manage all bookings with detail view
- **Quotes**: Track instant quotes and conversion rates
- **Contacts**: Centralized inbox for contact messages
- **Logout**: Secure session termination

## Troubleshooting

### Database Connection Issues
```bash
# Test database connection
npm run prisma:studio

# Reset database (caution: deletes all data)
npm run prisma:push -- --force-reset
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Admin Login Not Working
- Verify `ADMIN_USERNAME` and `ADMIN_PASSWORD` in `.env.local`
- Check browser cookies are enabled
- Clear browser cache and cookies

## Contributing

This is a proprietary project for Method Clean. For bug reports or feature requests, please contact the development team.

## License

Proprietary - All rights reserved © Method Clean 2024

## Support

For technical support or questions:
- Email: support@methodclean.co.uk
- Phone: 0161 123 4567

---

**Built with Next.js 16 for Method Clean - Professional Carpet Cleaning in Manchester**
