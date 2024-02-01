import type { Day } from './types';

export const isoDate = (date: Date) => date.toISOString().split('T')[0];

export const today = isoDate(new Date());

export const gapFillStreak = (gappedStreak: Day[]) => {
  function addDays(inputDateStr: string, days: number) {
    const inputDate = new Date(inputDateStr);
    const nextDate = new Date(inputDate);
    nextDate.setDate(inputDate.getDate() + days);
    const nextDateStr = isoDate(nextDate);
    return nextDateStr;
  }

  const gapFilledStreak: Day[] = [];
  gappedStreak.forEach((day, i) => {
    gapFilledStreak.push(day);
    const nextDay = gappedStreak[i + 1];
    if (!nextDay) return;
    const dayDate = new Date(day.date);
    const nextDayDate = new Date(nextDay.date);
    const timeDiff = Number(nextDayDate) - Number(dayDate);
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

    for (let i = 1; i < daysDiff; i++) {
      const middleDate = addDays(isoDate(dayDate), i);
      gapFilledStreak.push({
        date: middleDate,
        streakAlive: false,
      });
    }
  });
  return gapFilledStreak;
};
