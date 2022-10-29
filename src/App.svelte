<script lang="ts">
  import ShowCombinations from "./components/ShowCombinations.svelte";
  import { getPossibleCombinations } from "./utils/Permuations";
  let name1 = "";
  let name2 = "";
  /**  Combine both name1 and name2 (remove any spaces from name combo) */
  $: nameCombo = name1.replaceAll(/\s/g, "") + name2.replaceAll(/\s/g, "");
  let minLength = 1;
  $: maxLength = nameCombo.length || 1;
  let namePermutations: {
    allPossibleCombinations: string[];
    strGroupedByLength: string[][];
  } = null;
</script>

<main class="text-3xl md:text-5xl py-20">
  <div class="w-max mx-auto mb-10">
    {#if nameCombo.length > 0}
      <div class="flex flex-row">
        <p class="font-bold">{name1}</p>
        <p class="font-thin">{name2}</p>
      </div>
    {:else}
      <p>Enter a word</p>
    {/if}
  </div>
  <form on:submit|preventDefault class="flex flex-col gap-y-10">
    <div>
      <label
        for="first_name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >First name</label
      >
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        bind:value={name1}
        id="first_name"
        placeholder="John"
        required
      />
    </div>
    <div>
      <label
        for="second_name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Second name</label
      >
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="second_name"
        bind:value={name2}
        placeholder="Doe"
        required
      />
    </div>
    <div>
      <label
        for="min_length"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Min Length</label
      >
      <input
        type="number"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="min_length"
        min={1}
        max={maxLength}
        bind:value={minLength}
        placeholder="1"
        required
      />
    </div>
    <div>
      <label
        for="max_length"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Max Length</label
      >
      <input
        type="number"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="max_length"
        min={minLength}
        max={nameCombo.length}
        bind:value={maxLength}
        required
      />
    </div>
    <button
      on:click|preventDefault={() =>
        (namePermutations = getPossibleCombinations(nameCombo, {
          min: minLength,
          max: maxLength,
        }))}
      class="w-max text-xl self-center mt-6 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full px-16 py-6 text-center mx-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >Get Permuations</button
    >
  </form>

  {#if namePermutations?.strGroupedByLength}
    <ShowCombinations
      groupOfStrings={namePermutations.strGroupedByLength}
      totalCombos={namePermutations.allPossibleCombinations.length}
    />
  {/if}
</main>

<style>
  /* flowbite.com */
  label,
  input {
    @apply text-xl;
  }
  form > div {
    @apply space-y-5;
  }
</style>
