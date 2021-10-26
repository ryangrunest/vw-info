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
    <OwnersManuals></OwnersManuals>
    <TechnicalArticles></TechnicalArticles>
  </div>
</template>

<script>
import TheMainHeader from "../../components/TheMainHeader.vue";
import TheMainNav from "../../components/TheMainNav.vue";
import OwnersManuals from "./components/OwnersManuals.vue";
import TechnicalArticles from "./components/TechnicalArticles.vue";

export default {
  name: "Home",
  components: { TheMainHeader, TheMainNav, OwnersManuals, TechnicalArticles },
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