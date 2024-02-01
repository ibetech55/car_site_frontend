import { DateTime } from 'luxon';
import { formatDateIso } from '../FormatDateIso';

export const isDateValid = (value: string): boolean => {
   return DateTime.fromISO(formatDateIso(value) as string, { zone: 'utc' }).isValid
}  