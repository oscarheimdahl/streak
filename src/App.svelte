<script lang="ts">
  import { onMount } from 'svelte';
  import type { Day } from './utils/types';
  import Check from './lib/Check.svelte';
  import { gapFillStreak, today } from './utils/utils';
  import { writable } from 'svelte/store';
  import DateLabel from './lib/DateLabel.svelte';

  let streak: Day[] = [];

  onMount(() => {
    const storedStreak = localStorage.getItem('streak') ?? '[]';
    const parsedStreak = JSON.parse(storedStreak) as Day[];
    const sortedStreak = parsedStreak.toSorted(sortDaysByDate);
    if (sortedStreak.at(-1)?.date !== today)
      sortedStreak.push({ date: today, streakAlive: false });
    const gapFilledStreak = gapFillStreak(sortedStreak);
    streak = gapFilledStreak;
  });

  function sortDaysByDate(dayA: Day, dayB: Day) {
    return new Date(dayA.date).getTime() - new Date(dayB.date).getTime();
  }

  function saveDay(day: Day) {
    const otherDays = streak.filter((otherDay) => otherDay.date !== day.date);
    localStorage.setItem('streak', JSON.stringify([...otherDays, day]));
  }
</script>

<!-- test -->
<div
  class="grid p-2 gap-2 grid-cols-[repeat(10,1fr)] md:grid-cols-[repeat(25,1fr)]"
>
  {#each streak as day}
    <Check {saveDay} {day} />
  {/each}
  <DateLabel />
</div>
