import { expect, test } from 'vitest';
import { gapFillStreak } from '../utils';
import type { Day } from '../types';

function datesToDays(dates: string[]) {
  return dates.map((date) => ({ date, streakAlive: false }));
}
function daysToDates(days: Day[]) {
  return days.map((day) => day.date);
}

test('Can fill one gap', () => {
  const days = datesToDays(['2023-01-10', '2023-01-12']);

  const gapFilledDays = daysToDates(gapFillStreak(days));

  expect(gapFilledDays).toEqual(['2023-01-10', '2023-01-11', '2023-01-12']);
});

test('Can fill big gap', () => {
  const days = datesToDays(['2023-01-10', '2023-01-20']);

  const gapFilledDays = daysToDates(gapFillStreak(days));

  expect(gapFilledDays).toEqual([
    '2023-01-10',
    '2023-01-11',
    '2023-01-12',
    '2023-01-13',
    '2023-01-14',
    '2023-01-15',
    '2023-01-16',
    '2023-01-17',
    '2023-01-18',
    '2023-01-19',
    '2023-01-20',
  ]);
});

test('Can fill gap over month', () => {
  const days = datesToDays(['2023-01-28', '2023-02-02']);

  const gapFilledDays = daysToDates(gapFillStreak(days));

  expect(gapFilledDays).toEqual([
    '2023-01-28',
    '2023-01-29',
    '2023-01-30',
    '2023-01-31',
    '2023-02-01',
    '2023-02-02',
  ]);
});

test('Can fill gap over year', () => {
  const days = datesToDays(['2023-12-28', '2024-01-02']);

  const gapFilledDays = daysToDates(gapFillStreak(days));

  expect(gapFilledDays).toEqual([
    '2023-12-28',
    '2023-12-29',
    '2023-12-30',
    '2023-12-31',
    '2024-01-01',
    '2024-01-02',
  ]);
});
