import { DATE_FORMAT, MONTHS_IN_YEAR } from "@/constants/date";
import {  differenceInMonths, format } from "date-fns";

export const formatPeriod = (startDate: Date, endDate?: Date) => {
  if (endDate && startDate > endDate) {
    throw new Error('startDate must be before endDate');
  }

  // Add one month to include the start month
  const totalMonths = differenceInMonths(endDate ?? new Date(), startDate) + 1;

  const years = Math.floor(totalMonths / MONTHS_IN_YEAR);
  const months = totalMonths % MONTHS_IN_YEAR;
  const yearPart = years > 0 ? `${years}년` : '';
  const monthPart = months > 0 ? `${years > 0 ? ' ' : ''}${months}개월` : '';
  const formattedDuration = yearPart + monthPart;

  const startDateStr = format(startDate, DATE_FORMAT);
  const end = endDate ? format(endDate, DATE_FORMAT) : '현재';
  
  return `${startDateStr} ~ ${end} (${formattedDuration})`
};