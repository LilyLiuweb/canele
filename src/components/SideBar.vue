//:to="{ name: 'product.name', param: { id: product.id } }"
<template>
  <div class="l-navbar" :class="{ show: showSidebar }">
    <nav class="nav_bar">
      <div>
        <router-link
          to="/"
          class="nav_logo"
          :class="{ active: currentTab === 'home' }"
          @click="setCurrentTab('home')"
        >
          <i class="bx bx-home nav_logo-icon"></i>
          <span class="nav_logo-name">Home</span>
        </router-link>
        <div class="nav_list">
          <router-link
            to="/product"
            class="nav_link product"
            :class="{ active: currentTab === 'product' }"
            @click="setCurrentTab('product')"
          >
            <i class="bx bx-box nav_icon"></i>
            <span class="nav_name">product</span>
          </router-link>
          <router-link
            to="/about"
            class="nav_link"
            :class="{ active: currentTab === 'about' }"
            @click="setCurrentTab('about')"
          >
            <i class="bx bx-grid-alt nav_icon"></i>
            <span class="nav_name">About</span>
          </router-link>
          <router-link
            to="/users"
            class="nav_link"
            :class="{ active: currentTab === 'users' }"
            @click="setCurrentTab('users')"
          >
            <i class="bx bx-user nav_icon"></i>
            <span class="nav_name">Users</span>
          </router-link>
          <router-link
            to="/news"
            class="nav_link"
            :class="{ active: currentTab === 'news' }"
            @click="setCurrentTab('news')"
          >
            <i class="bx bx-message-square-detail nav_icon"></i>
            <span class="nav_name">News</span>
          </router-link>
          <router-link
            to="/qa"
            class="nav_link"
            :class="{ active: currentTab === 'qa' }"
            @click="setCurrentTab('qa')"
          >
            <i class="bx bx-bookmark nav_icon"></i>
            <span class="nav_name">Q&A</span>
          </router-link>
          <!-- <router-link
            :to="{ name: 'protected' }"
            class="nav_link"
            :class="{ active: currentTab === 'protected' }"
            @click="setCurrentTab('protected')"
            >Protected
          </router-link> -->
          <span
            class="nav_link"
            :class="{ active: currentTab === 'search' }"
            @click="setCurrentTab('search')"
            ><i class="bx bx-search nav_icon"></i><input type="search" name="" id="" />
          </span>
        </div>
      </div>
      <!-- <router-link to="/sign-out" class="nav_link" @click="signOut">
        <i class="bx bx-log-out nav_icon"></i>
        <span class="nav_name">SignOut</span>
      </router-link> -->
    </nav>
  </div>
  <router-view></router-view>
</template>
<script>
import reset from "../css/reset.css";
import bootstrap from "../css/bs.css";
export default {
  name: "App",
  data() {
    return {
      // isNavbarShow: false,
      currentTab: "home",
    };
  },
  props: {
    showSidebar: Boolean,
  },
  methods: {
    // toggleSidebar() {
    //   this.isSidebarOpen = !this.isSidebarOpen;
    //   $(".product").css("style", "block");
    // },
    setCurrentTab(tab) {
      this.currentTab = tab;
    },
    signOut() {
      // 登出功能的程式}
    },
  },
};
</script>
<style scoped></style>
