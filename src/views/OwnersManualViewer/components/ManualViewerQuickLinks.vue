<template>
  <div class="w-full">
    <div
      v-if="isOpen"
      class="
        absolute
        top-20
        bottom-32
        right-0
        left-0
        bg-gray-500
        overflow-scroll
      "
    >
      <div
        class="
          container
          mx-auto
          flex
          justify-center
          align-middle
          items-center
          flex-col
          overflow-scroll
        "
      >
        <!-- buttons -->
        <button
          v-for="(link, index) in quickLinks"
          @click="$emit('quickLinkClicked', link.pageNumber)"
          :key="index"
          class="
            p-2
            text-xl text-gray-300
            hover:bg-gray-50 hover:text-gray-900
            w-full
            md:w-1/2
            lg:w-1/4
            rounded-sm
          "
        >
          {{ link.text }}
        </button>
      </div>
    </div>
    <button
      class="
        w-full
        bg-gray-800
        text-center
        py-5
        text-gray-100
        transition
        hover:shadow-md hover:bg-gray-900
      "
      @click="$emit('toggleQuickLinks')"
    >
      Quick Links
    </button>
  </div>
</template>

<script>
export default {
  name: "ManualViewerQuickLinks",
  props: {
    quickLinks: {
      type: Array,
      required: false,
      default: () => {
        return [];
      },
    },
    isOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>