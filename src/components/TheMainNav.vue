<template>
  <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-600">
    <div class="flex w-full justify-end align-middle my-auto h-10">
      <button
        class="text-gray-200 text-md md:text-xl my-7 mx-4"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>