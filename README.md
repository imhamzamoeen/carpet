# Carpet Cleaning Service Platform

A modern, Next.js-based web platform for Method Clean - a professional carpet cleaning service in Manchester. This platform enables online lead generation with instant price estimates and automated booking management.

## Features

- **Instant Price Estimates**: Dynamic pricing calculator based on service type, property size, and distance
- **Multi-Step Booking Form**: Optimized UX with high conversion rates
- **Service Pages**: Dedicated pages for each cleaning service (Carpet, Rug, Upholstery, Leather, Mattress, Stain Removal, Commercial, Car Valeting)
- **Distance-Based Pricing**: Automatic travel cost calculation for locations within 100 miles of Manchester
- **Database Storage**: Supabase (PostgreSQL) with Prisma ORM
- **Google Sheets Integration**: Automatic lead export to Google Sheets
- **Email Notifications**: Automated emails for customers and admin
- **SEO Optimized**: Server-side rendering, meta tags, and Local Business Schema
- **Mobile-First Design**: Responsive UI with Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL) with Prisma ORM
- **Form Handling**: React Hook Form + Zod validation
- **APIs**: Google Maps API, Google Sheets API
- **Email**: Nodemailer

## Project Structure

```
carpet-cleaning-service/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Global styles
│   │   ├── quote/           # Quote form pages
│   │   ├── services/        # Service pages
│   │   └── api/             # API routes
│   ├── components/          # Reusable components
│   ├── lib/                 # Utility functions
│   ├── types/               # TypeScript type definitions
│   └── styles/              # Additional styles
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
└── project-requirements.md  # Detailed project requirements

```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (free tier available)
- Google Maps API key
- Google Sheets API credentials (optional)

### Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Set up Supabase**:
   Follow the detailed guide in [SUPABASE_SETUP.md](SUPABASE_SETUP.md) to:
   - Create a Supabase project
   - Get your credentials
   - Initialize the database schema

3. **Set up environment variables**:
   Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```

   Required variables:
   - `DATABASE_URL`: Supabase connection pooling URL
   - `DIRECT_URL`: Supabase direct connection URL
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
   - `GOOGLE_MAPS_API_KEY`: For distance calculation
   - `GOOGLE_SHEETS_PRIVATE_KEY`: For Google Sheets integration (optional)
   - `GOOGLE_SHEETS_CLIENT_EMAIL`: Service account email (optional)
   - `GOOGLE_SPREADSHEET_ID`: Target spreadsheet ID (optional)
   - `SMTP_USER` and `SMTP_PASSWORD`: Email credentials (optional)

4. **Generate Prisma Client and push schema**:
   ```bash
   npm run prisma:generate
   npm run prisma:push
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

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

The platform uses Supabase (PostgreSQL) with the following main model:

**Booking**:
- `id` (UUID, primary key)
- Contact information (name, email, phone, address, postcode)
- Service details (type, property info, room count, square meters)
- Additional options (stain removal, notes, photo URLs)
- Scheduling (preferred date)
- Pricing breakdown (distance, travel cost, service cost, total)
- Status tracking (PENDING, CONFIRMED, COMPLETED, CANCELLED)
- Timestamps (createdAt, updatedAt)

See [prisma/schema.prisma](prisma/schema.prisma) for the complete schema definition.

## API Routes

- `POST /api/bookings` - Create new booking/lead
- `GET /api/bookings` - List all bookings (admin)
- `POST /api/calculate-quote` - Calculate price estimate
- `POST /api/send-email` - Send notification emails

## Deployment

### Prerequisites for Production

1. Supabase project (production tier recommended for high traffic)
2. Configure Google Sheets API service account (optional)
3. Set up email service (Gmail SMTP or other)
4. Obtain Google Maps API key

### Deploy to Vercel

Vercel is the recommended platform for Next.js deployment:

```bash
npm run build
```

Then deploy to Vercel:
1. Import your Git repository to Vercel
2. Add all environment variables in Vercel dashboard (from `.env.local`)
3. Deploy
4. Vercel will automatically detect Next.js and configure build settings

**Note**: Supabase works seamlessly with Vercel's edge functions and serverless architecture.

## Google Sheets Integration Setup

1. Create a Google Cloud project
2. Enable Google Sheets API
3. Create a service account and download credentials
4. Share your target Google Sheet with the service account email
5. Add credentials to `.env.local`

## Contributing

This is a private project for Method Clean. For any issues or feature requests, please contact the development team.

## License

Proprietary - All rights reserved

## Support

For support or questions about this platform, please contact the development team.

---

Built with ❤️ for Method Clean
