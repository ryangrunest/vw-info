<template>
  <div class="w-full bg-gray-500 h-20">
    <div class="container flex justify-between align-middle h-full mx-auto">
      <div class="flex justify-items-start align-middle">
        <h1 class="text-gray-200 font-sans text-2xl my-auto">
          1973 Volkswagen Bus Manual
        </h1>
      </div>
      <div class="flex justify-items-end align-middle">
        <div class="text-gray-200 font-sans text-xl my-auto">
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