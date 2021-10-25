<template>
  <div>
    <div
      class="
        w-screen
        relative
        flex
        justify-between
        items-center
        mx-auto
        overflow-hidden
      "
      id="image-container"
    >
      <img class="w-full h-auto" :src="currentImage" :alt="altImageText" />
    </div>
    <manual-viewer-quick-links
      :is-open="quickLinksIsOpen"
      @toggleQuickLinks="toggleQuickLinks"
      @quickLinkClicked="quickLinkClicked"
    ></manual-viewer-quick-links>
    <div class="w-full divide-x divide-blue-100 h-10">
      <button
        :disabled="isPreviousButtonDisabled"
        @click="previousImageButtonClicked"
        @keyup.left="previousImageButtonClicked"
        class="
          p-5
          w-1/2
          text-center
          uppercase
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
        @keyup.right="nextImageButtonClicked"
        :disabled="isNextButtonDisabled"
        class="
          p-5
          w-1/2
          text-center
          uppercase
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
import ManualViewerQuickLinks from "./ManualViewerQuickLinks.vue";
export default {
  name: "TheManualViewer",
  components: { ManualViewerQuickLinks },
  data() {
    return {
      currentPage: 1,
      quickLinksIsOpen: false,
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
  mounted: function () {
    document.addEventListener("keyup", this.onKeyPress);
  },
  unmounted: function () {
    document.removeEventListener("keyup", this.onKeyPress);
  },
  methods: {
    previousImageButtonClicked() {
      if (!this.isPreviousButtonDisabled) {
        this.currentPage -= 1;
      }
    },
    nextImageButtonClicked() {
      if (!this.isNextButtonDisabled) {
        this.currentPage += 1;
      }
    },
    onKeyPress(e) {
      if (e.key === "ArrowRight") {
        this.nextImageButtonClicked();
      } else if (e.key === "ArrowLeft") {
        this.previousImageButtonClicked();
      }
    },
    toggleQuickLinks() {
      this.quickLinksIsOpen = !this.quickLinksIsOpen;
    },
    quickLinkClicked(pageNumber) {
      this.quickLinksIsOpen = false;
      this.currentPage = pageNumber;
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
#image-container {
  height: calc(100vh - 13rem);
  max-width: 100rem;
}
</style>