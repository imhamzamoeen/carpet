/**
 * Admin Server Actions
 *
 * Server actions for admin authentication and management
 */

'use server'

import { redirect } from 'next/navigation'
import { verifyAdminCredentials, createAdminSession, logoutAdmin } from '@/lib/auth/admin'

export async function loginAdmin(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  if (!username || !password) {
    return {
      success: false,
      error: 'Username and password are required'
    }
  }

  const isValid = await verifyAdminCredentials(username, password)

  if (!isValid) {
    return {
      success: false,
      error: 'Invalid username or password'
    }
  }

  await createAdminSession()
  redirect('/admin')
}

export async function logoutAdminAction() {
  await logoutAdmin()
  redirect('/admin/login')
}
