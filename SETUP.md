# Quick Setup Guide

This guide will help you get the Carpet Cleaning Service platform up and running quickly.

## Initial Setup Checklist

### 1. Install Dependencies ✅
Already completed! All npm packages are installed.

### 2. Database Setup

**Option A: Local MongoDB**
```bash
# Install MongoDB locally or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

**Option B: MongoDB Atlas (Recommended for production)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `DATABASE_URL` in `.env.local`

### 3. Environment Variables

Open `.env.local` and configure:

```env
# Required
DATABASE_URL="mongodb://localhost:27017/carpet-cleaning"
GOOGLE_MAPS_API_KEY="your_google_maps_key"

# Optional (for full functionality)
GOOGLE_SHEETS_PRIVATE_KEY="your_private_key"
GOOGLE_SHEETS_CLIENT_EMAIL="your_service_account@project.iam.gserviceaccount.com"
GOOGLE_SPREADSHEET_ID="your_sheet_id"
SMTP_USER="your_email@gmail.com"
SMTP_PASSWORD="your_app_password"
ADMIN_EMAIL="admin@methodcleanbiz.com"
```

### 4. Generate Prisma Client

```bash
npm run prisma:generate
```

### 5. Start Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

## Getting API Keys

### Google Maps API
1. Go to https://console.cloud.google.com/
2. Create a new project
3. Enable "Distance Matrix API" and "Geocoding API"
4. Create credentials → API Key
5. Add to `.env.local`

### Google Sheets API (Optional)
1. In Google Cloud Console, enable Google Sheets API
2. Create Service Account
3. Download JSON credentials
4. Extract `private_key` and `client_email`
5. Share your Google Sheet with the service account email

### Email Setup (Optional)
For Gmail:
1. Enable 2-factor authentication
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use App Password in `SMTP_PASSWORD`

## Project Status

✅ Git repository initialized
✅ Next.js with TypeScript configured
✅ Tailwind CSS set up
✅ Database schema created
✅ Basic homepage created
✅ Dependencies installed

## Next Steps

1. Configure your environment variables
2. Set up MongoDB database
3. Run `npm run prisma:generate`
4. Start the dev server: `npm run dev`
5. Begin building the quote form and service pages

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run prisma:generate # Generate Prisma client
npm run prisma:push     # Push schema to database
npm run prisma:studio   # Open database GUI

# Code Quality
npm run lint            # Run ESLint
```

## Troubleshooting

### Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### Prisma Client not generated
```bash
npm run prisma:generate
```

### MongoDB connection issues
- Check if MongoDB is running
- Verify `DATABASE_URL` in `.env.local`
- Ensure network access is allowed (for MongoDB Atlas)

## Support

For issues or questions, refer to:
- [README.md](./README.md) - Full documentation
- [project-requirements.md](./project-requirements.md) - Detailed requirements
- Next.js docs: https://nextjs.org/docs
- Prisma docs: https://www.prisma.io/docs

---

Ready to start building! 🚀
