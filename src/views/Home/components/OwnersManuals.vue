<template>
  <div class="container mx-auto mt-10 bg-gray-100 p-4 rounded-sm shadow-md">
    <div class="text-xl mb-1">Owners Manuals</div>
    <router-link
      :to="{
        path: '/owners-manual-viewer/seventy-three-bay-window',
      }"
    >
      <button
        class="mr-3 p-3 bg-gray-200 rounded-sm hover:shadow-md transition"
      >
        Bay Window - 1973
      </button>
    </router-link>
    <router-link
      :to="{
        path: '/owners-manual-viewer/seventy-one-bay-window',
      }"
    >
      <button
        class="mr-3 p-3 bg-gray-200 rounded-sm hover:shadow-md transition"
      >
        Bay Window - 1971
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "OwnersManuals",
};
</script>

<style>
</style>