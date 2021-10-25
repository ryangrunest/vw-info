<template>
  <div>
    <div
      class="
        w-screen
        flex
        justify-center
        items-center
        image-container
        mx-auto
        overflow-hidden
      "
    >
      <img class="w-full h-auto" :src="currentImage" :alt="altImageText" />
    </div>
    <div class="w-full divide-x divide-blue-100 h-10">
      <button
        :disabled="isPreviousButtonDisabled"
        @click="previousImageButtonClicked"
        class="
          p-5
          w-1/2
          text-center
          transition
          bg-gray-500
          text-gray-200
          hover:bg-gray-600 hover:shadow-md
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Previous Page
      </button>
      <button
        @click="nextImageButtonClicked"
        :disabled="isNextButtonDisabled"
        class="
          p-5
          w-1/2
          text-center
          transition
          bg-gray-500
          text-gray-200
          hover:bg-gray-600 hover:shadow-md
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        Next Page
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheManualViewer",
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    altImageText() {
      return `1973 Volkswagen Manual - Page ${this.currentPage}`;
    },
    currentImage() {
      return `/assets/vw_manual/page-${this.currentPage}.jpeg`;
    },
    isPreviousButtonDisabled() {
      return this.currentPage > 1 ? false : true;
    },
    isNextButtonDisabled() {
      return this.currentPage < 94 ? false : true;
    },
  },
  methods: {
    previousImageButtonClicked() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextImageButtonClicked() {
      this.currentPage += 1;
    },
  },
  watch: {
    currentPage: function (val) {
      this.$emit("currentPageUpdated", this.currentPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  height: calc(100vh - 9rem);
  max-width: 100rem;
}
</style>