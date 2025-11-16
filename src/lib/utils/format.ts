/**
 * Formatting Utilities
 *
 * Helper functions for formatting dates, numbers, strings, etc.
 */

import { format as formatDate, formatDistance, formatRelative, isValid } from 'date-fns'
import { enGB } from 'date-fns/locale'

/**
 * Format a date for display
 *
 * @param date - Date to format
 * @param formatStr - Format string (defaults to "d MMMM yyyy")
 * @returns Formatted date string
 */
export function formatDateDisplay(date: Date | string, formatStr: string = 'd MMMM yyyy'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  if (!isValid(dateObj)) {
    return 'Invalid date'
  }

  return formatDate(dateObj, formatStr, { locale: enGB })
}

/**
 * Format a date and time for display
 *
 * @param date - Date to format
 * @returns Formatted datetime string (e.g., "15 January 2024, 2:30 PM")
 */
export function formatDateTimeDisplay(date: Date | string): string {
  return formatDateDisplay(date, 'd MMMM yyyy, h:mm a')
}

/**
 * Format a relative time (e.g., "2 hours ago")
 *
 * @param date - Date to format
 * @returns Relative time string
 */
export function formatRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  if (!isValid(dateObj)) {
    return 'Invalid date'
  }

  return formatDistance(dateObj, new Date(), { addSuffix: true, locale: enGB })
}

/**
 * Format a date relative to now (e.g., "today at 2:30 PM", "yesterday at 10:00 AM")
 *
 * @param date - Date to format
 * @returns Relative date string
 */
export function formatRelativeDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  if (!isValid(dateObj)) {
    return 'Invalid date'
  }

  return formatRelative(dateObj, new Date(), { locale: enGB })
}

/**
 * Format a phone number for display (UK format)
 *
 * @param phone - Phone number to format
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')

  // Format based on length
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    // UK mobile or landline: 07700 900000 or 0161 123 4567
    return cleaned.replace(/^(\d{4})(\d{3})(\d{4})$/, '$1 $2 $3')
  }

  if (cleaned.length === 10) {
    // UK landline without leading 0
    return cleaned.replace(/^(\d{3})(\d{3})(\d{4})$/, '0$1 $2 $3')
  }

  // Return as-is if format doesn't match
  return phone
}

/**
 * Truncate a string to a specified length
 *
 * @param str - String to truncate
 * @param maxLength - Maximum length
 * @param suffix - Suffix to add (defaults to "...")
 * @returns Truncated string
 */
export function truncate(str: string, maxLength: number, suffix: string = '...'): string {
  if (str.length <= maxLength) {
    return str
  }

  return str.slice(0, maxLength - suffix.length) + suffix
}

/**
 * Capitalize first letter of a string
 *
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Convert kebab-case to Title Case
 *
 * @param str - Kebab-case string (e.g., "carpet-cleaning")
 * @returns Title case string (e.g., "Carpet Cleaning")
 */
export function kebabToTitle(str: string): string {
  return str
    .split('-')
    .map(word => capitalize(word))
    .join(' ')
}

/**
 * Convert Title Case to kebab-case
 *
 * @param str - Title case string (e.g., "Carpet Cleaning")
 * @returns Kebab-case string (e.g., "carpet-cleaning")
 */
export function titleToKebab(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
}

/**
 * Format a file size in bytes to human-readable format
 *
 * @param bytes - File size in bytes
 * @returns Formatted file size (e.g., "1.5 MB")
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

/**
 * Format a number with thousand separators
 *
 * @param num - Number to format
 * @returns Formatted number string
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-GB').format(num)
}

/**
 * Format a percentage
 *
 * @param value - Value to format (0-1 or 0-100)
 * @param decimals - Number of decimal places
 * @param isDecimal - Whether value is 0-1 (true) or 0-100 (false)
 * @returns Formatted percentage string
 */
export function formatPercentage(
  value: number,
  decimals: number = 0,
  isDecimal: boolean = true
): string {
  const percentage = isDecimal ? value * 100 : value
  return `${percentage.toFixed(decimals)}%`
}

/**
 * Pluralize a word based on count
 *
 * @param count - Count to check
 * @param singular - Singular form
 * @param plural - Plural form (defaults to singular + "s")
 * @returns Pluralized word
 */
export function pluralize(count: number, singular: string, plural?: string): string {
  if (count === 1) {
    return singular
  }

  return plural || singular + 's'
}

/**
 * Format a count with pluralization
 *
 * @param count - Count to format
 * @param singular - Singular form
 * @param plural - Plural form (optional)
 * @returns Formatted count with word (e.g., "1 room", "3 rooms")
 */
export function formatCount(count: number, singular: string, plural?: string): string {
  return `${formatNumber(count)} ${pluralize(count, singular, plural)}`
}

/**
 * Extract initials from a name
 *
 * @param name - Full name
 * @returns Initials (e.g., "John Smith" -> "JS")
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2)
}

/**
 * Sanitize a string for use in URLs (slug)
 *
 * @param str - String to sanitize
 * @returns URL-safe slug
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}
