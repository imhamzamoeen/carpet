export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: string
          createdAt: string
          updatedAt: string
          name: string
          email: string
          phone: string
          address: string
          postcode: string
          serviceType: string
          propertyType: string
          propertySize: string | null
          numberOfRooms: number | null
          squareMeters: number | null
          stainRemoval: boolean
          additionalNotes: string | null
          photoUrls: string[]
          preferredDate: string
          distance: number
          travelCost: number
          serviceCost: number
          totalCost: number
          status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'
        }
        Insert: {
          id?: string
          createdAt?: string
          updatedAt?: string
          name: string
          email: string
          phone: string
          address: string
          postcode: string
          serviceType: string
          propertyType: string
          propertySize?: string | null
          numberOfRooms?: number | null
          squareMeters?: number | null
          stainRemoval?: boolean
          additionalNotes?: string | null
          photoUrls?: string[]
          preferredDate: string
          distance: number
          travelCost: number
          serviceCost: number
          totalCost: number
          status?: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'
        }
        Update: {
          id?: string
          createdAt?: string
          updatedAt?: string
          name?: string
          email?: string
          phone?: string
          address?: string
          postcode?: string
          serviceType?: string
          propertyType?: string
          propertySize?: string | null
          numberOfRooms?: number | null
          squareMeters?: number | null
          stainRemoval?: boolean
          additionalNotes?: string | null
          photoUrls?: string[]
          preferredDate?: string
          distance?: number
          travelCost?: number
          serviceCost?: number
          totalCost?: number
          status?: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      BookingStatus: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'
    }
  }
}
