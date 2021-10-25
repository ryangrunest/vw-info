<template>
  <div>
    <TheMainHeader :header-right-text="headerRightText"></TheMainHeader>
    <TheManualViewer @currentPageUpdated="currentPageUpdated"></TheManualViewer>
  </div>
</template>

<script>
import TheMainHeader from "../components/TheMainHeader.vue";
import TheManualViewer from "../components/TheManualViewer.vue";

export default {
  name: "App",
  components: {
    TheMainHeader,
    TheManualViewer,
  },
  data() {
    return {
      headerRightText: "Current Page: 1 of 94",
      headerLeftText: "",
    };
  },
  methods: {
    currentPageUpdated(data) {
      this.headerRightText = `Current Page: ${data} of 94`;
    },
  },
};
</script>

<style>
</style>
