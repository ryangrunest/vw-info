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
      header-left-text="About"
    ></TheMainHeader>
  </div>
</template>

<script>
import TheMainNav from "../components/TheMainNav.vue";
import TheMainHeader from "../components/TheMainHeader.vue";

export default {
  name: "About",
  components: { TheMainNav, TheMainHeader },
  data() {
    return {
      mainNavIsOpen: false,
    };
  },
  methods: {
    toggleNav() {
      console.log("toggle nav");
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