<script setup>
import TheMainHeader from "./components/TheMainHeader.vue";
import TheManualViewer from "./components/TheManualViewer.vue";
</script>
<script>
export default {
  name: "App",
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

<template>
  <div>
    <TheMainHeader :header-right-text="headerRightText"></TheMainHeader>
    <TheManualViewer @currentPageUpdated="currentPageUpdated"></TheManualViewer>
  </div>
</template>

<style>
</style>
