<template>
  <div class="home">
    <!-- accordion -->
    <div class="accordion_container">
      <!-- <video src="../assets/video/home/hero.mp4" autoplay="autoplay"></video> -->
      <div class="shopBtn">
        <router-link to="/product">
          <span>Shop Now</span>
        </router-link>
      </div>
    </div>

    <!-- best seller -->
    <h3>Hot Sale</h3>
    <!-- swiper -->
    <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :pagination="{
        clickable: true,
        clickableClass: 'swiper-pagination-clickable',
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="../../public/pages/products/cake.png" /></swiper-slide>
      <swiper-slide><img src="../../public/pages/products/canele3.jpg" /></swiper-slide>
      <swiper-slide><img src="../../public/pages/products/cheesecake.jpg" /></swiper-slide>
      <swiper-slide><img src="../../public/pages/products/macaron.png" /></swiper-slide
      ><swiper-slide><img src="../../public/pages/products/pofu.jpg" /></swiper-slide>
      <swiper-slide><img src="../../public/pages/products/tart.jpg" /></swiper-slide>
    </swiper>

    <h3>All sweets</h3>
    <div class="sweet">
      <div class="card_container">
        <!-- <keep-alive> -->
        <Card
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :slug="product.slug"
          :name="product.name"
          :price="product.price"
          :unit="product.unit"
          :src="product.src"
          @go-to-product-details="goToProductDetails"
          @heart-clicked="handleHeartClick"
          @star-clicked="handleStarClick"
        ></Card>
        <!-- </keep-alive> -->
      </div>
    </div>
    <h3>About</h3>
    <div class="about">
      <ul class="border-20">
        <li>Long time ago</li>
        <li>An engineer couple wakes up one day</li>
        <li>Find they can't be satisfied with their job</li>
        <li>when facing our heart voice</li>
        <li>discover an intense love for French dessert</li>
        <li>can't ignore</li>
      </ul>
    </div>
    <h3>Recent Events</h3>
    <div class="events">
      <EventsComponent
        v-for="event in events"
        :key="event.id"
        :id="event.id"
        :name="event.name"
        :slug="event.slug"
        :place="event.place"
        :description="event.description"
        :expireDate="event.expireDate"
        :src="event.src"
        @go-to-event-details="goToEventDetails"
        @wishEvent-clicked="handleWishEvent"
      ></EventsComponent>
    </div>
  </div>
</template>

<script>
// components
import Card from "../components/Card.vue"; // for show product with the same template
import EventsComponent from "../components/Events.vue"; // for show Event with the same template
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
import { defineComponent } from "vue";

// Import Swiper styles
import "../css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import product data
import { Products } from "../js/productDetails";
import { Events } from "../js/event";

export default {
  data() {
    return {
      products: Products,
      events: Events,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    ArrowBack,
    ArrowForward,
    Card,
    EventsComponent,
  },
  methods: {
    goToProductDetails(id, slug) {
      this.$router.push({ name: "productDetails", params: { id, slug } });
    },
    goToEventDetails(id, slug) {
      this.$router.push({ name: "eventDetails", params: { id, slug } });
    },
    handleHeartClick(productId, isLiked) {
      // toggle like active class
      // this.isLiked = isLiked;

      // if click like to solid red heart then store to session
      if (isLiked === true) {
        // store to sessionStorage to starCount
        // find products is clicked id equal to productId
        let product = this.products.find((p) => p.id === productId);

        // get existing likeCollection from sessionStorage
        let likeCollection = JSON.parse(sessionStorage.getItem("likeCollection")) || [];

        // check if product is already in likeCollection
        let index = likeCollection.findIndex((p) => p.id === productId);

        // if product is not in likeCollection, push it
        if (index === -1) {
          likeCollection.push(product);
        } else {
          // if product is already in likeCollection, insert new product after it
          likeCollection.splice(index + 1, 0, product);
        }
        sessionStorage.setItem("likeCollection", JSON.stringify(likeCollection));
      } else {
        let likeCollection = JSON.parse(sessionStorage.getItem("likeCollection")) || [];
        let index = likeCollection.findIndex((p) => p.id === productId);
        // if product is in likeCollection, remove it
        if (index !== -1) {
          // delete item click like to strike heart
          likeCollection.splice(index, 1);
          sessionStorage.setItem("likeCollection", JSON.stringify(likeCollection));
        }
      }
    },
    handleStarClick(productId, isStared) {
      // toggle star active class
      // this.isStared = isStared;
      if (isStared === true) {
        let product = this.products.find((p) => p.id === productId);
        let starCollection = JSON.parse(sessionStorage.getItem("starCollection")) || [];

        let index = starCollection.findIndex((p) => p.id === productId);
        // no clicked before item
        if (index === -1) {
          starCollection.push(product);
        } else {
          // add new item back
          starCollection.splice(index + 1, 0, product);
        }
        sessionStorage.setItem("starCollection", JSON.stringify(starCollection));
      } else {
        let starCollection = JSON.parse(sessionStorage.getItem("starCollection")) || [];
        let index = starCollection.findIndex((p) => p.id === productId);
        if (index !== -1) {
          // remove the clicked  same item
          starCollection.splice(index, 1);
          sessionStorage.setItem("starCollection", JSON.stringify(starCollection));
        }
      }
    },
    handleWishEvent(eventId, isWishEvent) {
      // toggle star active class
      // this.isStared = isStared;
      if (isWishEvent === true) {
        let event = this.events.find((p) => p.id === eventId);
        let wishEventCollection =
          JSON.parse(sessionStorage.getItem("wishEventCollection")) || [];

        let index = wishEventCollection.findIndex((p) => p.id === eventId);
        // no clicked before item
        if (index === -1) {
          wishEventCollection.push(event);
        } else {
          // add new item back
          wishEventCollection.splice(index + 1, 0, event);
        }
        sessionStorage.setItem(
          "wishEventCollection",
          JSON.stringify(wishEventCollection)
        );
      } else {
        let wishEventCollection =
          JSON.parse(sessionStorage.getItem("wishEventCollection")) || [];
        let index = wishEventCollection.findIndex((p) => p.id === eventId);
        if (index !== -1) {
          // remove the clicked  same item
          wishEventCollection.splice(index, 1);
          sessionStorage.setItem(
            "wishEventCollection",
            JSON.stringify(wishEventCollection)
          );
        }
      }
    },
    handleBuyClick(id) {
      Vue.set(this.$storage, "cart", [...this.$storage.cart, id]);
    },
  },
  mounted() {
    // this.$watch(
    //   () => this.$storage.cart,
    //   (newVal, oldVal) => {
    //     this.cartCount = newVal.length;
    //   }
    // );
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, EffectFade],
    };
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Sigmar&display=swap");
// defined style
// @import "../style.css";
@import "../../src/sass/style.css";
// .home {
//   margin-top: var(--header-height);
// }
.home h3 {
  color: #ffb8d2;
  font-weight: 700;
  padding-top: 0.5rem;
}
.accordion_container {
  background-image: url(../public/pages/products/pie.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right 25% bottom 28%;
  // max-width: 1280px;
  height: 500px;
  // margin: 20px 0;
  overflow: hidden;
  // border-radius: 20px;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
.shopBtn {
  grid-column: 1/2;
  grid-row: 5/6;
  margin: 0 auto;
}
.shopBtn span {
  width: 150px;
  height: 50%;
  line-height: 40px;
  border-radius: 20px;
  display: block;
  background: #bd3d3d;
  color: #f1efef;
}
.shopBtn span:hover {
  background: #ad1f1f;
  cursor: pointer;
}
.accordion_container::before {
  grid-column: 1/3;
  grid-row: 3/5;
  display: block;
  content: "fall in love again";
  font-size: 2rem;
  color: #f1efef;
  padding: 0.5rem;
  text-shadow: 5px 5px 0 #5e2b2b;
  font-family: "Sigmar", cursive;
  position: relative;
}
.card_container {
  width: 100%;
  // height: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 20px;
}

/* 捲軸寬度 */
.sweet::-webkit-scrollbar {
  width: 1px;
  height: 0px;
  background-color: #fff;
}

/* 捲軸本體顏色 */
.sweet::-webkit-scrollbar-thumb {
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  border-radius: 10px;
}
/* 捲軸底色 */
.sweet::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
}
.sweetInfo {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 0 0.5rem;
}

.about {
  margin-top: 20px;
  // height: 650px;
  background-image: url(../assets/bg/aboutBg2.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sigmar", cursive;
}
.about ul {
  // width: 50%;
  // background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 50%);
  font-size: 20px;
  text-shadow: 2px 2px 0 #5d4545;
}
.about ul li {
  padding: 1.5rem;
  color: #ab986b;
}
.events {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 768px) {
  .accordion_container::before {
    font-size: 4rem;
  }
  .events {
    display: block;
    // height: 300px;
  }
}
@media screen and (min-width: 414px) {
  .card {
    width: 30%;
  }
}

.swiper {
  height: 350px;
}
.swiper-slide {
  background-color: none;
}
.swiper-slide img {
  object-position: 50% 50%;
  width: 100%;
}
.swiper-button-next,
.swiper-button-prev {
  color: #5d4545;
}

.carousel-img {
  width: 100%;
  object-fit: cover;
}
.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}
.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}
.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>
