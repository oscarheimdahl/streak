<script lang="ts">
  import type { Day } from '../utils/types';
  import { today } from '../utils/utils';

  export let day: Day;
  export let saveDay: (day: Day) => void;

  function handleClick() {
    if (day.date !== today && !localStorage.getItem('unlocked')) return;
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
    --col: 169, 139, 203;
  }
  .checked-1 {
    --col: 65, 209, 223;
  }
  .checked-2 {
    --col: 147, 235, 111;
  }
  .checked-3 {
    --col: 255, 233, 92;
  }
  .checked-4 {
    --col: 254, 187, 88;
  }
  .checked-5 {
    --col: 255, 125, 129;
  }

  .checked {
    /* box-shadow: 0 0 3px rgb(var(--col), 1); */
    background-color: rgb(var(--col));
  }
</style>
