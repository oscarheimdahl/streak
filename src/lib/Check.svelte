<script lang="ts">
  import { onMount } from 'svelte';
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

  let showDate = false;
  let showDateTimeout: NodeJS.Timeout;
  onMount(() => {
    document.addEventListener('mousemove', () => {
      clearTimeout(showDateTimeout);
      showDate = true;
      showDateTimeout = setTimeout(() => (showDate = false), 3000);

      return () => clearTimeout(showDateTimeout);
    });
  });
</script>

<div class="grid stack">
  {#if day.streakAlive}
    <div class={`shadow color-${day.color}`}></div>
  {/if}
  <button
    on:click={handleClick}
    id={`button-${day.date}`}
    class={`
      group relative
      ${day.streakAlive ? `checked color-${day.color}` : 'bg-transparent '}
      w-full aspect-square
      p-0 m-0
      focus:outline-none
    `}
  >
    <label
      class={`
      z-10
    text-center justify-center
    pointer-events-none fixed font-bold inset-0 grid place-content-center opacity-0
    drop-shadow-lg text-[4rem]
    group-hover:opacity-100
    md:text-[8rem]
    lg:text-[14rem]`}
      for={`button-${day.date}`}
    >
      <div class="flex flex-col">
        <span
          class={`${showDate ? 'opacity-100' : 'opacity-0'} transition-opacity`}
          >{formatDate(day.date)}</span
        >
      </div>
    </label>
  </button>
</div>

<style>
  .stack > * {
    grid-area: 1 / 1 / 2 / 2;
  }

  .color-0 {
    --col: 169, 139, 203;
  }
  .color-1 {
    --col: 65, 209, 223;
  }
  .color-2 {
    --col: 147, 235, 111;
  }
  .color-3 {
    --col: 255, 233, 92;
  }
  .color-4 {
    --col: 254, 187, 88;
  }
  .color-5 {
    --col: 255, 125, 129;
  }

  .checked {
    background-color: rgb(var(--col));
  }
  .shadow {
    box-shadow: 0 0 10px rgb(var(--col), 1);
  }
</style>
