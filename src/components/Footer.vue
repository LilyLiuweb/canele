<template>
  <footer class="footer_outer_container">
    <div class="footer_inner_container">
      <ul class="ul_list navigation">
        <h4>Navigation</h4>
        <router-link to="/">
          <li>Home</li>
        </router-link>
        <router-link to="/product">
          <li>Product</li>
        </router-link>
        <router-link to="/about">
          <li>About</li>
        </router-link>
        <!-- <li>Dashboard</li>
        <li>Files</li> -->
      </ul>
      <ul class="ul_list help">
        <h4>Get Help</h4>
        <li>phliu814@gmail.com</li>
        <li>0953711701</li>
        <li>桃園區復興路20之1號4樓</li>
      </ul>
      <ul class="ul_list contact">
        <h4>Get Email Update</h4>
        <li>Some description</li>
        <li>
          <input type="email" name="" id="" placeholder="type your email" />
          <span class="square-button">send</span>
        </li>
      </ul>
      <ul class="ul_list copyright">
        <li>&copy;2023 Lily & Luke Cenelé Shop</li>
      </ul>
      <ul class="media">
        <li><i class="bx bxl-google nav_logo-icon"></i></li>
        <li><i class="bx bxl-twitter nav_logo-icon"></i></li>
        <li><i class="bx bxl-facebook nav_logo-icon"></i></li>
        <li><i class="bx bxl-instagram-alt nav_logo-icon"></i></li>
      </ul>
    </div>
  </footer>
</template>

<script>
import reset from "../css/reset.css";
import bootstrap from "../css/bs.css";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import "../../src/sass/style.css";
.footer_outer_container {
  width: 100%;
  margin: 0 auto;
  /* height: 300px; */
  background-color: #42413b;
  // background-image: url(../assets/footerBg.jpg);
  // border-style: contain;
  // background-position: top;
  padding: 1rem;
  color: #fff;
}
.footer_inner_container {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  text-align: left;
}
.ul_list:not(.copyright, .media) {
  display: grid;
  grid-template-rows: repeat(5, 40px);
}
.ul_list a:active {
  text-shadow: 2px 2px 5px #b5a68a;
}
.ul_list:last-of-type {
  border-bottom: 3px solid #f5f5f5;
}
.ul_list li {
  padding: 1rem;
  display: flex;
  align-items: center;
  color: #cbcbcb;
}
.ul_list h4 {
  font-weight: 700;
  color: #cbcbcb;
}
.navigation h4 {
  grid-column: 1/2;
  grid-row: 1/2;
}
.navigation li:first-child {
  grid-column: 1/2;
  grid-row: 2/3;
}
.navigation li:nth-child(2) {
  grid-column: 1/2;
  grid-row: 3/4;
}
.navigation li:nth-child(3) {
  grid-column: 1/2;
  grid-row: 4/5;
}
.help h4 {
  grid-column: 2/3;
  grid-row: 1/2;
}
.help li:nth-of-type(1) {
  grid-column: 2/3;
  grid-row: 2/3;
}
.help li:nth-of-type(2) {
  grid-column: 2/3;
  grid-row: 3/4;
}
.help li:nth-of-type(3) {
  grid-column: 2/3;
  grid-row: 4/5;
}
.contact h4 {
  grid-column: 3/4;
  grid-row: 1/2;
}
.contact li:nth-of-type(1) {
  grid-column: 3/4;
  grid-row: 2/4;
}
.contact li:nth-of-type(2) {
  grid-column: 3/4;
  grid-row: 4/5;
}
.contact li:nth-of-type(3) i {
  padding-left: 0.5rem;
}
.copyright {
  text-align: center;
  grid-column: 1/3;
  grid-row: 2/3;
  li {
    color: #cbcbcb;
  }
}
.media {
  display: flex;
  margin: 15px 0 0 0;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 3/4;
  grid-row: 2/3;
}
.bx-mail-send:before {
  margin: 0 10px 0 0;
}
@media all and (min-width: 768px) {
}
@media all and (min-width: 1280px) {
}
</style>
