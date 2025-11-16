# Supabase Setup Guide

This guide will help you set up Supabase for the Carpet Cleaning Service platform.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create a new account
3. Click "New Project"
4. Fill in the project details:
   - **Name**: carpet-cleaning-service
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose closest to your users (e.g., Europe West)
5. Click "Create new project"
6. Wait for the project to be provisioned (~2 minutes)

## Step 2: Get Your Supabase Credentials

Once your project is ready:

1. Go to **Project Settings** (gear icon in sidebar)
2. Navigate to **API** section
3. Copy the following values:

### Project URL
```
https://[YOUR-PROJECT-REF].supabase.co
```

### API Keys
- **anon/public key**: Used for client-side requests
- **service_role key**: Used for admin operations (keep secret!)

### Database Connection Strings

Go to **Project Settings** → **Database**:

#### Connection Pooling (for Prisma)
```
postgresql://postgres.[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres
```

#### Direct Connection
```
postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
```

## Step 3: Update Environment Variables

Update your `.env.local` file with your Supabase credentials:

```env
# Supabase Database
DATABASE_URL="postgresql://postgres.[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="https://[YOUR-PROJECT-REF].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key-here"
```

**Important**:
- Replace `[YOUR-PROJECT-REF]` with your actual project reference
- Replace `[YOUR-PASSWORD]` with your database password
- Replace `[region]` with your region (e.g., eu-west-1)
- Replace `your-anon-key-here` with your actual anon key

## Step 4: Initialize Database Schema

Run Prisma migrations to create your database tables:

```bash
# Generate Prisma Client
npm run prisma:generate

# Push schema to Supabase
npm run prisma:push
```

This will create the `bookings` table and `BookingStatus` enum in your Supabase database.

## Step 5: Verify Database Setup

1. Open **Table Editor** in Supabase dashboard
2. You should see the `bookings` table
3. Check the schema matches your requirements

### Expected Schema

**bookings** table:
- `id` (uuid, primary key)
- `createdAt` (timestamp)
- `updatedAt` (timestamp)
- `name` (text)
- `email` (text)
- `phone` (text)
- `address` (text)
- `postcode` (text)
- `serviceType` (text)
- `propertyType` (text)
- `propertySize` (text, nullable)
- `numberOfRooms` (integer, nullable)
- `squareMeters` (integer, nullable)
- `stainRemoval` (boolean, default: false)
- `additionalNotes` (text, nullable)
- `photoUrls` (text array)
- `preferredDate` (timestamp)
- `distance` (double precision)
- `travelCost` (double precision)
- `serviceCost` (double precision)
- `totalCost` (double precision)
- `status` (BookingStatus enum, default: PENDING)

## Step 6: Test the Connection

Create a simple test to verify everything works:

```bash
npm run dev
```

The application should start without database connection errors.

## Optional: Enable Row Level Security (RLS)

For production, you should enable RLS on your tables:

1. Go to **Authentication** → **Policies**
2. Select the `bookings` table
3. Click "New Policy"
4. Create policies based on your access requirements

### Example Policies

**Allow anonymous users to insert bookings** (for quote form):
```sql
CREATE POLICY "Allow public insert" ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

**Allow authenticated admin to view all bookings**:
```sql
CREATE POLICY "Allow admin read" ON bookings
  FOR SELECT
  TO authenticated
  USING (true);
```

## Optional: Set Up Supabase Storage (for photo uploads)

If you want to store customer photos:

1. Go to **Storage** in Supabase dashboard
2. Click "New bucket"
3. Name it `booking-photos`
4. Set it to **Public** or **Private** based on your needs
5. Configure upload policies

## Supabase Features You Can Use

### Real-time Subscriptions
Subscribe to booking changes in real-time:
```typescript
supabase
  .channel('bookings')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'bookings'
  }, (payload) => {
    console.log('New booking:', payload)
  })
  .subscribe()
```

### Authentication (Optional)
If you want to add admin authentication:
```typescript
// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@example.com',
  password: 'password'
})

// Sign out
await supabase.auth.signOut()
```

### Storage API
Upload photos:
```typescript
const { data, error } = await supabase.storage
  .from('booking-photos')
  .upload('photo.jpg', file)
```

## Troubleshooting

### Connection Issues
- Verify your credentials in `.env.local`
- Check if your IP is allowed in Supabase dashboard
- Ensure database password is correct

### Migration Errors
- Make sure `DATABASE_URL` and `DIRECT_URL` are both set
- Try running `npx prisma migrate reset` (warning: this deletes data!)
- Check Prisma schema syntax

### TypeScript Errors
- Run `npm run prisma:generate` after schema changes
- Restart your TypeScript server

## Next Steps

1. ✅ Supabase project created
2. ✅ Environment variables configured
3. ✅ Database schema initialized
4. 🔄 Start building your booking API
5. 🔄 Add form submission logic
6. 🔄 Set up email notifications

## Useful Links

- [Supabase Documentation](https://supabase.com/docs)
- [Prisma + Supabase Guide](https://supabase.com/docs/guides/integrations/prisma)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

---

Need help? Check the [Supabase Discord](https://discord.supabase.com) or [GitHub Discussions](https://github.com/supabase/supabase/discussions)
