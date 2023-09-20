<template>
  <BreadcrumbVue :page_name="page_name"></BreadcrumbVue>
  <div class="">
    <!-- <h2>This is Product page</h2> -->
    <div class="category">
      <h4>Category</h4>
      <ul>
        <template v-for="sweet in category">
          <li class="secondary-button">#{{ sweet }}</li>
        </template>
      </ul>
    </div>
    <div class="card_container">
      <!-- 父傳子需要將參數動態傳入，要傳入的參數項目在Card.vue設定，參數的值在父層用v-bind的方法動態傳入 -->
      <Card
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :price="product.price"
        :unit="product.unit"
        :src="product.src"
        @go-to-product-details="goToProductDetails"
        @heart-clicked="handleHeartClick"
        @star-clicked="handleStarClick"
      ></Card>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { router } from "../route";
import Card from "../components/Card.vue";
import { Products } from "../js/productDetails";
import BreadcrumbVue from "../components/Breadcrumb.vue";

export default {
  data() {
    return {
      page_name: "product",
      products: Products,
      category: ["canelé", "pie", "macaron", "tart", "cheese cake"],
    };
  },
  components: {
    Card,
    BreadcrumbVue,
  },
  methods: {
    goToProductDetails(id) {
      this.$router.push({ name: "productDetails", params: { id, slug } });
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

        if (index === -1) {
          starCollection.push(product);
        } else {
          starCollection.splice(index + 1, 0, product);
        }
        sessionStorage.setItem("starCollection", JSON.stringify(starCollection));
      } else {
        let starCollection = JSON.parse(sessionStorage.getItem("starCollection")) || [];
        let index = starCollection.findIndex((p) => p.id === productId);
        if (index !== -1) {
          starCollection.splice(index, 1);
          sessionStorage.setItem("starCollection", JSON.stringify(starCollection));
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../src/sass/style.css";
.category {
  padding: 2rem;
  background-color: #f2f2ee;
  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
}

.card_container {
  // width: 100%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  border-radius: 20px;
}
.primary-button {
  width: 150px;
  line-height: 50%;
  span {
    color: #fff;
  }
}

// @media screen and (min-width: 540px) {
//   .card {
//     grid-template-columns: repeat(2, 1fr);
//   }
// }
// @media screen and (min-width: 768px) {
//   .card {
//     grid-template-columns: repeat(3, 1fr);
//   }
// }
// @media screen and (min-width: 1280px) {
//   .card {
//     grid-template-columns: repeat(4, 1fr);
//   }
// }
</style>
