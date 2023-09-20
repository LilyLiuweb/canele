<template>
  <header class="header">
    <div class="lheader header_toggle" @click="toggleSidebar" ref="resizeHeader">
      <i
        class="bx bx-menu"
        id="header-toggle"
        ref="headerToggle"
        :class="{ 'bx-x': isHeaderToggle }"
      ></i>
    </div>
    <div class="centerheader">
      <router-link
        to="/"
        :class="{ active: currentTab === 'home' }"
        @click="setCurrentTab('home')"
      >
        <div class="logo">
          <img src="../assets/logo/logo_horz_500X500.png" alt="logo_horz" />
        </div>
      </router-link>
    </div>
    <div class="rheader">
      <router-link to="/sign-in">
        <div class="header_img">
          <img src="https://picsum.photos/id/1025/600/400" alt="" />
        </div>
      </router-link>
      <router-link to="/cart">
        <i class="bx bx-cart"></i><span :value="count" class="cartCount">0</span>
      </router-link>
    </div>
  </header>
</template>

<script>
// import { mounted } from "vue";
import reset from "../css/reset.css";
import bootstrap from "../css/bs.css";
// import { useCartStore } from "../store/cartStore";
// import { useCartStore } from "../store/CartStore";
// const cartStore = useCartStore();
export default {
  name: "App",
  data() {
    return {
      isHeaderToggle: false,
      currentTab: "home",
      count: 0,
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
      this.$refs.headerToggle.classList.toggle("bx-x");
      this.$refs.resizeHeader.classList.toggle("body-pd");
    },
    isHeaderToggle() {
      this.$emit("headerToggle");
    },
    setCurrentTab(tab) {
      this.currentTab = tab;
    },
  },
  // setup() {
  //   const cartStore = useCartStore();
  //   // const cartCount = cartStore.getters.cartCount;
  //   // return {
  //   //   cartCount,
  //   // };
  // },
};
</script>

<style lang="scss" scoped>
@import "../style.css";
// .logo {
//   width: 200px;
//   height: 50px;
//   img {
//     width: 100%;
//   }
// }
.rheader {
  display: flex;
    align-items: center;
    gap: 1rem;
    /* display: block; */
    /* width: 18px; */
    height: 18px;
    color: #e03859;
    /* background: #e03859; */
    border-radius: 30%;
    position: absolute;
    top: 12px;
    right: 15px;
    font-size: 30px;
}
.centerheader{
  flex-grow: 1;
    display: flex;
    justify-content: center;
}
</style>
