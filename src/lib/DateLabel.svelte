<script lang="ts">
  import { onMount } from 'svelte';
  import { dateStore } from '../utils/store';

  let date = '';
  dateStore.subscribe((_date) => (date = _date));

  function formatDate(date: string) {
    if (!date) return '';

    return new Date(date)
      .toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
      .toLocaleUpperCase();
  }

  let showDateTimeout: NodeJS.Timeout;
  let showDate = false;
  onMount(() => {
    document.addEventListener('mousemove', () => {
      clearTimeout(showDateTimeout);
      showDate = true;
      showDateTimeout = setTimeout(() => (showDate = false), 2000);

      return () => clearTimeout(showDateTimeout);
    });
  });
</script>

<span class={`${showDate ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
  <div
    class={`
        z-10
        text-center justify-center
        pointer-events-none fixed font-bold inset-0 grid place-content-center
        drop-shadow-lg text-[4rem]
        md:text-[8rem]
        lg:text-[14rem]`}
  >
    <div class="flex flex-col">
      <span>{formatDate(date)}</span>
    </div>
  </div>
</span>
