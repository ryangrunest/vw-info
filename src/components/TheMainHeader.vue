<template>
  <div class="w-full bg-gray-500 h-20">
    <div class="flex w-full justify-between align-middle h-full mx-auto px-4">
      <div class="flex justify-items-start align-middle">
        <h1 class="text-gray-200 font-sans text-lg md:text-2xl my-auto">
          1973 Volkswagen Bus Manual
        </h1>
      </div>
      <div class="flex justify-items-end align-middle">
        <div class="text-gray-200 font-sans text-md md:text-xl my-auto">
          {{ headerRightText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMainHeader",
  props: {
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