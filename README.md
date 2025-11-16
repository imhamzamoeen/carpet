# Carpet Cleaning Service Platform

A modern, Next.js-based web platform for Method Clean - a professional carpet cleaning service in Manchester. This platform enables online lead generation with instant price estimates and automated booking management.

## Features

- **Instant Price Estimates**: Dynamic pricing calculator based on service type, property size, and distance
- **Multi-Step Booking Form**: Optimized UX with high conversion rates
- **Service Pages**: Dedicated pages for each cleaning service (Carpet, Rug, Upholstery, Leather, Mattress, Stain Removal, Commercial, Car Valeting)
- **Distance-Based Pricing**: Automatic travel cost calculation for locations within 100 miles of Manchester
- **Database Storage**: MongoDB integration with Prisma ORM
- **Google Sheets Integration**: Automatic lead export to Google Sheets
- **Email Notifications**: Automated emails for customers and admin
- **SEO Optimized**: Server-side rendering, meta tags, and Local Business Schema
- **Mobile-First Design**: Responsive UI with Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Prisma ORM
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
- MongoDB database (local or cloud)
- Google Maps API key
- Google Sheets API credentials (optional)

### Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.example` to `.env.local` and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

   Required variables:
   - `DATABASE_URL`: MongoDB connection string
   - `GOOGLE_MAPS_API_KEY`: For distance calculation
   - `GOOGLE_SHEETS_PRIVATE_KEY`: For Google Sheets integration
   - `GOOGLE_SHEETS_CLIENT_EMAIL`: Service account email
   - `GOOGLE_SPREADSHEET_ID`: Target spreadsheet ID
   - `SMTP_USER` and `SMTP_PASSWORD`: Email credentials

3. **Generate Prisma Client**:
   ```bash
   npm run prisma:generate
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
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

The platform uses MongoDB with the following main model:

**Booking**:
- Contact information (name, email, phone, address)
- Service details (type, property info, room count)
- Pricing breakdown (distance, travel cost, service cost, total)
- Status tracking (pending, confirmed, completed, cancelled)

## API Routes

- `POST /api/bookings` - Create new booking/lead
- `GET /api/bookings` - List all bookings (admin)
- `POST /api/calculate-quote` - Calculate price estimate
- `POST /api/send-email` - Send notification emails

## Deployment

### Prerequisites for Production

1. Set up MongoDB database (MongoDB Atlas recommended)
2. Configure Google Sheets API service account
3. Set up email service (Gmail SMTP or other)
4. Obtain Google Maps API key

### Deploy to Vercel

```bash
npm run build
```

Then deploy to Vercel:
1. Import your Git repository
2. Add environment variables in Vercel dashboard
3. Deploy

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
