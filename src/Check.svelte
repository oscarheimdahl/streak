<script lang="ts">
  import type { Day } from './types';

  export let day: Day;
  export let saveDay: (day: Day) => void;

  function handleClick() {
    day.streakAlive = !day.streakAlive;
    saveDay(day);
  }
  const uncheckedStyle = 'bg-gray-500';
</script>

<div class="flex flex-col items-center">
  <label for={`button-${day.date}`}>{day.date}</label>
  <button
    id={`button-${day.date}`}
    class={`
    p-4 w-24 h-24 rounded-3xl border-2 border-white
    ${day.streakAlive ? 'bg-green-500' : uncheckedStyle}`}
    on:click={handleClick}
  >
  </button>
</div>
