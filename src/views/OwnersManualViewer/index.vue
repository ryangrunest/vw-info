<template>
  <div>
    <transition name="fade">
      <TheMainNav
        @nav-button-clicked="toggleNav"
        v-if="mainNavIsOpen"
      ></TheMainNav>
    </transition>
    <TheMainHeader
      @nav-button-clicked="toggleNav"
      :header-left-text="headerLeftText"
      :header-right-text="headerRightText"
    ></TheMainHeader>
    <TheManualViewer
      :manual-data="manualData"
      @currentPageUpdated="currentPageUpdated"
    ></TheManualViewer>
  </div>
</template>

<script>
import TheMainHeader from "../../components/TheMainHeader.vue";
import TheMainNav from "../../components/TheMainNav.vue";
import TheManualViewer from "./components/TheManualViewer.vue";
import ownersManualViewerData from "./data/index";

export default {
  name: "OwnersManualViewer",
  components: {
    TheMainHeader,
    TheManualViewer,
    TheMainNav,
  },
  data() {
    return {
      manualData: {},
      mainNavIsOpen: false,
      headerRightText: "",
      headerLeftText: "",
    };
  },
  mounted: function () {
    const manualObjectRef = this.$route.params.id.replace(/(^|-)./g, (s) =>
      s.slice(-1).toUpperCase()
    );
    this.manualData = ownersManualViewerData[manualObjectRef];
    this.headerLeftText =
      ownersManualViewerData[manualObjectRef].headerLeftText;
    this.headerRightText =
      ownersManualViewerData[manualObjectRef].headerRightText;
  },
  methods: {
    currentPageUpdated(data) {
      this.headerRightText = `Current Page: ${data} of ${
        this.manualData.numberOfPages || 0
      }`;
    },
    toggleNav() {
      this.mainNavIsOpen = !this.mainNavIsOpen;
    },
  },
};
</script>

<style>
</style>
