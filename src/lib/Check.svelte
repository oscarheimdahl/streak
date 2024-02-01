<script lang="ts">
  import type { Day } from '../utils/types';

  import { cn } from '../utils/utils';

  export let day: Day;
  export let saveDay: (day: Day) => void;

  function handleClick() {
    day.streakAlive = !day.streakAlive;
    day.color = day.color ?? Math.floor(Math.random() * 6);
    saveDay(day);
  }

  function formatDate(date: string) {
    return new Date(date)
      .toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
      .toLocaleUpperCase();
  }
</script>

<!-- <div class="group w-0 h-0"> -->

<button
  on:click={handleClick}
  id={`button-${day.date}`}
  class={`
      group
      ${day.streakAlive ? `checked checked-${day.color}` : 'bg-transparent '}
      w-full aspect-square
      p-0 m-0
      focus:outline-none
    `}
>
  <label
    class={`
    text-center justify-center
    pointer-events-none fixed font-bold inset-0 grid place-content-center opacity-0
    drop-shadow-lg text-[4rem]
    group-hover:opacity-50
    md:text-[8rem]
    lg:text-[14rem]`}
    for={`button-${day.date}`}
  >
    <div class="flex flex-col">
      <span>{formatDate(day.date)}</span>
    </div>
  </label>
</button>

<style>
  .checked-0 {
    --col: #a98bcb;
  }
  .checked-1 {
    --col: #41d1df;
  }
  .checked-2 {
    --col: #93eb6f;
  }
  .checked-3 {
    --col: #ffe95c;
  }
  .checked-4 {
    --col: #febb58;
  }
  .checked-5 {
    --col: #ff7d81;
  }

  .checked {
    box-shadow: 0 0 5px var(--col);
    background-color: var(--col);
  }
</style>
