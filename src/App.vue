<template>
  <div :class="{ 'body-pd': showSidebar }" class="main_container">
    <Header @toggle-sidebar="showSidebar = !showSidebar"></Header>
    <side-bar :show-sidebar="showSidebar"></side-bar>
    <Footer></Footer>
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import Footer from "./components/Footer.vue";
// import SideBarNaive from './components/SideBarNaive.vue';
import reset from "./css/reset.css";
import { NIcon } from "naive-ui";

export default {
  components: {
    Header,
    SideBar,
    Footer,
  },
  data() {
    return {
      isHeaderToggle: false,
      showSidebar: false,
      totalStarCount: 0,
    };
  },
  created() {
    this.totalStarCount = 0;
  },
  methods: {
    // handleHeaderToggle() {
    //   this.isHeaderToggle = !this.isHeaderToggle;
    //   document.body.classList.toggle("body-pd");
    //   this.$refs.sidebar.$el.querySelector(".l-navbar").classList.toggle("show");
    // },

    handleHeaderToggle() {
      this.isHeaderToggle = !this.isHeaderToggle;
      document.body.classList.toggle("body-pd");
      if (this.$refs.sidebar.$el) {
        this.$refs.sidebar.$el.querySelector(".l-navbar").classList.toggle("show");
      }
    },
  },
};
</script>
<style scoped lang="scss">
.main_container {
  flex-grow: 1;
}
</style>
