import dayjs from 'dayjs';

export function formatDate(date: string | Date, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
  if (!date) {
    return ''
  }
  
  return dayjs(date).format(format);
}

export function diffHours(day1: string, day2?: string) {
  const date1 = dayjs(day1);
  let date2 = dayjs();
  if (day2) {
    date2 = dayjs(day2)
  }

  return date1.diff(date2, 'hours');
}

/**
 * 一年中的第几天
 * @param date 
 * @returns 
 */
export function dayOfYear(date: Date) {
  const day = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
  return day;
}