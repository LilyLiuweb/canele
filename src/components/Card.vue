<template>
  <!-- <p>Total Star clicks: {{ totalStarCount }}</p>
  <p>Total Like clicks: {{ totalLikeCount }}</p> -->
  <div class="card">
    <div class="">
      <button class="secondary-button" @click="goToProductDetails">
        <router-link :to="`/productDetails/${this.id}/${this.slug}`">
          <!-- <router-link to="/productDetails/"> -->
          <span>More</span>
        </router-link>
      </button>
      <button class="primary-button">
        <router-link to="/cart">
          <i class="bx bx-cart-alt" style="font-size: 20px" @click="buy"></i
          ><span>Buy</span>
        </router-link>
      </button>
    </div>
    <div class="sweetInfo">
      <p>
        <span
          ><i
            :class="isStared ? 'bx bxs-star' : 'bx bx-star'"
            @click="handleStarClick"
          ></i
          ><i
            :class="isLiked ? 'bx bxs-heart' : 'bx bx-heart'"
            @click="handleHeartClick"
          ></i
        ></span>
      </p>
      <p class="price">
        {{ price }}$<span class="unit"> / {{ unit }}</span>
      </p>
    </div>
    <h4>{{ name }}</h4>
    <div class="img_box"><img :src="`../public/pages/products/${src}`" /></div>
  </div>
</template>

<script>
export default {
  name: "Product",
  // 需要父傳子時:參數要在子組件設定(props)
  props: {
    id: Number,
    slug: String,
    name: String,
    price: Number,
    unit: String,
    src: String,
  },
  data() {
    return {
      isLiked: false,
      isStared: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    goToProductDetails() {
      // 觸發父組件 go-to-product-details 事件，會動態改變route 並 導航到 ProductDetail組件
      this.$emit("go-to-product-details", this.id, this.slug);
    },
    toggleHeart() {
      // toggle heart's class
      this.isLiked = !this.isLiked;
    },
    toggleStar() {
      // toggle star's class
      this.isStared = !this.isStared;
    },
    handleHeartClick() {
      // click heart's handler
      this.toggleHeart();
      this.$emit("heart-clicked", this.id, this.isLiked);
    },
    handleStarClick() {
      // click star's handler
      this.toggleStar();
      this.$emit("star-clicked", this.id, this.isStared);
    },
    buy() {
      this.$emit("buy-clicked", this.id);
    },
  },
  mounted() {
    // 可以在mounted生命周期方法中讀取sessionStorage中的數據，並根據productId是否在likeCollection中來設置isLiked的值
    let likeCollection = JSON.parse(sessionStorage.getItem("likeCollection")) || [];
    let likeIndex = likeCollection.findIndex((p) => p.id === this.id);
    this.isLiked = likeIndex !== -1;

    let starCollection = JSON.parse(sessionStorage.getItem("starCollection")) || [];
    let starIndex = starCollection.findIndex((p) => p.id === this.id);
    this.isStared = starIndex !== -1;
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../sass/style.css";

.card {
  display: flex;
  flex-direction: column;
  flex-direction: column-reverse;
  // width: 20%;
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
  width: 100%;
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
.sweetInfo {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 0 0.5rem;
}
</style>
