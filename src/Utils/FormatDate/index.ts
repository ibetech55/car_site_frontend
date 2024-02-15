import { DateTime } from "luxon";

export const formatDate = (dateString:string): string => {
    const date = DateTime.fromISO(dateString);
    return date.toFormat('MM/dd/yyyy');
}