<script lang="ts">
  import { onMount } from 'svelte';
  import type { Day } from '../utils/types';
  import { today } from '../utils/utils';
  import { dateStore } from '../utils/store';

  export let day: Day;
  export let saveDay: (day: Day) => void;

  function handleClick() {
    if (day.date !== today && !localStorage.getItem('unlocked')) return;
    day.streakAlive = !day.streakAlive;
    day.color = day.color ?? Math.floor(Math.random() * 6);
    saveDay(day);
  }
</script>

<button
  class="grid stack group"
  on:click={handleClick}
  on:focus={() => dateStore.set(day.date)}
  on:mouseover={() => dateStore.set(day.date)}
>
  {#if day.streakAlive}
    <div class={`shadow color-${day.color}`}></div>
  {/if}
  <span class={`square-scale ${day.streakAlive ? `scale-100` : 'scale-50'}`}>
    <span
      class={`square-radius ${day.streakAlive ? `rounded-none` : 'rounded-xl'}`}
    >
      <div
        class={`
              ${
                day.streakAlive
                  ? `checked color-${day.color}`
                  : 'bg-transparent '
              }` + ' w-full aspect-square p-0 m-0 focus:outline-none'}
      />
    </span>
  </span>
</button>

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
    transition: box-shadow 1s;
    box-shadow: 0 0 10px rgb(var(--col), 0.5);
  }
  .group:hover .shadow {
    box-shadow: 0 0 20px rgb(var(--col), 0);
  }

  .square-scale {
    transition: transform 0.2s;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.375);
  }
  .square-radius {
    transition: border-radius 0.2s;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.375);
  }
</style>
