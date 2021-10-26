<template>
  <div id="manual-viewer">
    <div
      class="w-screen h-full relative flex justify-center align-middle mx-auto"
      id="image-container"
    >
      <img
        class="w-full xl:w-auto"
        id="viewer-image"
        :src="currentImage"
        :alt="altImageText"
      />
    </div>
    <manual-viewer-quick-links
      :is-open="quickLinksIsOpen"
      :quick-links="quickLinks"
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
  props: {
    manualData: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      currentPage: 1,
      quickLinksIsOpen: false,
    };
  },
  computed: {
    altImageText() {
      return `${this.manualData.altImageText} - Page ${this.currentPage}`;
    },
    currentImage() {
      return `/assets/${this.manualData.folder}/page-${this.currentPage}.jpeg`;
    },
    isPreviousButtonDisabled() {
      return this.currentPage > 1 ? false : true;
    },
    isNextButtonDisabled() {
      return this.currentPage < this.manualData.numberOfPages ? false : true;
    },
    quickLinks() {
      return this.manualData.quickLinks || [];
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
#manual-viewer {
  height: calc(100vh - 13rem);
}
#image-container {
  align-items: center;
}
#viewer-image {
  height: fit-content;
  max-height: 100%;
  max-width: fit-content;
}
</style>