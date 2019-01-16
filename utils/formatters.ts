import { format, parseISO } from 'date-fns'

export const formatAsDollarAmount = (value: number) => `$${value.toFixed(2)}`

export const formatAsNumber = (value: string) => value.replace(/\D+/, '')

export const formatDate = format

export const dateParseISO = parseISO

export const formatAsExpirationDate = (value: string) => {
  const sep = ' / '
  const empty = ''

  const isValidMonth = (month: string) => {
    if (month.length === 1) {
      return !isNaN(Number(month)) && Number(month) >= 0 && Number(month) < 2
    }

    if (month.length === 2) {
      return !isNaN(Number(month)) && Number(month) > 0 && Number(month) <= 12
    }

    return false
  }

  /* Month can start with 0, 1 */
  /* Month must be between 1 and 12 */
  if (isValidMonth(value.trim())) {
    return value.length === 1 ? value.trim() : value.trim() + sep
  }

  /* Year must be valid */
  if (value.length > 5) {
    const parts = value.split(sep)

    const monthPart = parts[0]

    if (!isValidMonth(monthPart)) {
      let month = monthPart.substr(0, 2)
      if (isValidMonth(month)) {
        return month + sep
      }

      month = monthPart.substr(0, 1)
      if (isValidMonth(month)) {
        return month
      }

      return empty
    }

    const yearPart = parts[1]

    // Typing is stopped
    if (yearPart && yearPart.length > 2) {
      return value.substr(0, 7)
    }

    if (yearPart && !isNaN(Number(yearPart))) {
      return value
    }
  }

  return empty
}
