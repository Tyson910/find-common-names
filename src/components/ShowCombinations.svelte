<script lang="ts">
  export let groupOfStrings: string[][] = null;
  export let totalCombos = 0;
</script>

<p
  class="mt-32 text-3xl capitalize text-gray-500 p-5 font-light dark:border-gray-700"
>
  Generated <em class="italic">{totalCombos}</em> different combinations
</p>
{#each groupOfStrings as strGroup, i}
  {#if strGroup.length > 0}
    <details
      class="mx-auto w-max mt-14 mb-20 pt-5 font-bold text-3xl capitalize bg-gray-800 text-white border rounded-md border-b-0 border-gray-700"
    >
      <summary
        class="cursor-pointer px-8 pt-2 pb-8 flex flex-row gap-x-6 items-center justify-center"
        >{strGroup[0].length} Letter Words
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </summary>
      {#each strGroup as word, i (word)}
        <p
          class="text-3xl capitalize cursor-default text-gray-100 p-5 font-light border border-b-0 border-gray-700 bg-gray-900"
        >
          {word}
        </p>
      {/each}
    </details>
  {/if}
{/each}

<style>
  details > summary {
    list-style: none;
  }

  details > summary::marker, /* Latest Chrome, Edge, Firefox */ 
  details > summary::-webkit-details-marker /* Safari */ {
    display: none;
  }
</style>
