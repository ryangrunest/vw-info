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
      header-left-text="Volkswagen Owners Manuals"
    ></TheMainHeader>
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
  </div>
</template>

<script>
import TheMainHeader from "../components/TheMainHeader.vue";
import TheMainNav from "../components/TheMainNav.vue";

export default {
  name: "Home",
  components: { TheMainHeader, TheMainNav },
  data() {
    return {
      mainNavIsOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.mainNavIsOpen = !this.mainNavIsOpen;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>