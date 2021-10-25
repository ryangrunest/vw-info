<template>
  <div class="w-full bg-gray-500 h-20">
    <div class="flex w-full justify-between align-middle h-full mx-auto px-4">
      <div class="flex justify-items-start align-middle">
        <h1 class="text-gray-200 font-sans text-lg md:text-2xl my-auto">
          {{ headerLeftText }}
        </h1>
      </div>
      <div class="flex justify-items-end align-middle">
        <div class="text-gray-200 font-sans text-md md:text-xl my-auto">
          {{ headerRightText }}
        </div>
      </div>
      <button
        class="flex justify-items-end align-middle my-auto text-gray-200"
        @click="$emit('nav-button-clicked')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMainHeader",
  props: {
    headerLeftText: {
      default: "",
      type: String,
      required: false,
    },
    headerRightText: {
      default: "",
      type: String,
      required: false,
    },
  },
};
</script>

<style>
</style>