import { DateTime } from "luxon";

export const formatDateIso = (value: string) => {
  return DateTime.fromFormat(value, "MM/dd/yyyy", { locale: "en" })
    .toISODate()
    ?.toString() as string;
};
