<template>
  <Breadcrumb :page_name="page_name"></Breadcrumb>
  <div class="myLike ListStyle">
    <h2><i class="bx bxs-heart">我的最愛列表</i></h2>
    <article id="likeListdisplay"></article>
  </div>
  <div class="myWishList ListStyle">
    <h2><i class="bx bxs-star">我的收藏列表</i></h2>
    <article id="wishListdisplay"></article>
  </div>
  <div class="myEvents ListStyle">
    <h2><i class="bx bx-calendar-event">我的活動列表</i></h2>
    <article id="eventListdisplay"></article>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
export default {
  data() {
    return {
      page_name: "UserCenter",
    };
  },
  methods: {
    getMyLike() {
      let likeListdisplay = document.getElementById("likeListdisplay");
      let myLikeList = "";
      // getItem
      let getMyLike = JSON.parse(sessionStorage.getItem("likeCollection"));
      // for loop (or $.each) createElement
      $.each(getMyLike, function (i, item) {
        myLikeList += `
          <div class="card">
            <div class="img_box" style=" width: 200px;height: 150px;"><img style="width:100%" src="../src/assets/pages/products/${item.src}" /></div>
            <div class="sweetInfo">
              <h4>${item.name}</h4>
              <p class="price">
                ${item.price}$<span class="unit"> / ${item.unit}</span>
              </p>
            </div>
            <div class="">
              <button class="secondary-button">
                <router-link to="/productDetails/${item.id}">
                  <span>More</span>
                </router-link>
              </button>
              <button class="primary-button">
                <router-link to="/cart">
                  <i class="bx bx-cart-alt" style="font-size: 20px"></i><span>Buy</span>
                </router-link>
              </button>
            </div>
          </div>
        `;
        likeListdisplay.innerHTML = myLikeList;
      });
    },
    getMyWishList() {
      // console.log(JSON.parse(sessionStorage.getItem("starCollection")));
      let wishListdisplay = document.getElementById("wishListdisplay");
      let myWishList = "";
      // getItem
      let getMyWish = JSON.parse(sessionStorage.getItem("starCollection"));
      // for loop (or $.each) createElement
      $.each(getMyWish, function (i, item) {
        myWishList += `
          <div class="card">
            <div class="img_box" style=" width: 200px ; height: 150px;"><img style="width:100%" src="../src/assets/pages/products/${item.src}" /></div>
            <div class="eventInfo">
              <h4>${item.name}</h4>
              <p class="price">
                ${item.price}$<span class="unit"> / ${item.unit}</span>
              </p>
            </div>
            <div class="">
              <button class="secondary-button">
                <router-link to="/productDetails/${item.id}">
                  <span>More</span>
                </router-link>
              </button>
              <button class="primary-button">
                <router-link to="/cart">
                  <i class="bx bx-cart-alt" style="font-size: 20px"></i><span>Buy</span>
                </router-link>
              </button>
            </div>
          </div>
        `;
        wishListdisplay.innerHTML = myWishList;
      });
    },
    getMyEventList() {
      let eventListdisplay = document.getElementById("eventListdisplay");
      let myEventList = "";
      // getItem
      let getMyEvents = JSON.parse(sessionStorage.getItem("wishEventCollection"));
      // for loop (or $.each) createElement
      $.each(getMyEvents, function (i, item) {
        myEventList += `
          <div class="card">
            <div class="img_box" style=" width: 200px; height: 150px;"><img style="width:100%" src="../src/assets/event/${item.src}" /></div>
            <div class="sweetInfo">
              <h4>${item.name}</h4>
              <span class="event">
                ${item.place}
              </span>
              <span class="event">
                ${item.expireDate}
              </span>
            </div>
            <div class="event_register">
              <router-link to="/eventDetails/${item.id}/${item.slug}">
                <span class="cute-button border-20">報名</span>
              </router-link>
            </div>
          </div>
        `;
        eventListdisplay.innerHTML = myEventList;
      });
    },
  },
  components: {
    Breadcrumb,
  },
  mounted() {
    this.getMyLike(), this.getMyWishList(), this.getMyEventList();
  },
};
</script>

<style scoped lang="scss">
@import "../sass/style.css";
.ListStyle {
  gap: 10px;
  margin: 10px;
  padding: 10px;
  background: #42413b;
  border-radius: 10px;
  h2 {
    text-align: left;
  }
}
.myLike {
  background: #de9e96;
}
.myWishList {
  background: #fff8d3;
}
.myEvents {
  background: #cbc8c0;
}
.card {
  width: 300px;
  margin: 10px;
  color: #5e2b2b;
  padding: 0;
}
@media screen and (min-width: 414px) {
  .card {
    width: 30%;
  }
}
.card h4 {
  font-weight: 600;
}
.card .img_box {
  width: 200px;
  height: 250px;
}
.card img {
  width: 100%;
  height: inherit;
  object-fit: cover;
  object-position: 50% 50%;
}
.primary-button,
.secondary-button {
  width: 40%;
}
.primary-button span,
.primary-button i {
  color: #f5f5f7;
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
.sweetInfo,
.eventInfo {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 0 0.5rem;
}

article {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.event_register {
  // grid-column: 3/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.event_register span {
  display: block;
  width: 100px;
  height: 50px;
  line-height: 50px;
}
</style>
