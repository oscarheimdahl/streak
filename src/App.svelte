<script lang="ts">
  import { onMount } from 'svelte';
  import type { Day } from './types';
  import Check from './Check.svelte';
  import { gapFillStreak, isoDate, today } from './utils';

  let streak: Day[] = [];

  function sortDaysByDate(dayA: Day, dayB: Day) {
    return new Date(dayA.date).getTime() - new Date(dayB.date).getTime();
  }

  onMount(() => {
    const storedStreak = localStorage.getItem('streak') ?? '[]';
    const parsedStreak = JSON.parse(storedStreak) as Day[];
    const sortedStreak = parsedStreak.toSorted(sortDaysByDate);
    if (sortedStreak.at(-1)?.date !== today)
      sortedStreak.push({ date: today, streakAlive: false });
    const gapFilledStreak = gapFillStreak(sortedStreak);
    streak = gapFilledStreak;
  });

  function saveDay(day: Day) {
    const otherDays = streak.filter((otherDay) => otherDay.date !== day.date);
    localStorage.setItem('streak', JSON.stringify([...otherDays, day]));
  }
</script>

<div class="flex flex-col gap-4 h-full p-2 items-start">
  {#each streak as day}
    <Check {saveDay} {day} />
  {/each}
</div>
