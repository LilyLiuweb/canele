<template>
  <BreadcrumbVue
    :page_name="page_name"
    :page_sub-name="'/ ' + page_subName"
  ></BreadcrumbVue>
  <div class="product_details_container">
    <template v-for="(product, index) in filteredProducts" :key="index">
      <section class="product_img_box">
        <img :src="`/src/assets/pages/products/${product.src}`" :alt="`${product.src}`" />
      </section>
      <section class="product_details">
        <div class="title_area">
          <h2>{{ product.name }}</h2>
          <span>{{ product.slug }}</span>
        </div>
        <div class="tab_area">
          <ul class="tab_title">
            <li
              v-for="(tab, index) in tabs"
              :key="index"
              class="tab"
              :class="{ active: tab.active }"
              @click="activateTab(index)"
            >
              <a :href="tab.href">{{ tab.title }}</a>
            </li>
          </ul>
          <div
            class="tab_inner"
            v-for="(tab, index) in tabs"
            :key="index"
            v-show="tab.active"
          >
            <div v-if="tab.title === 'intro'">
              <span>{{ product.description }}</span>
            </div>
            <div v-else-if="tab.title === 'ingredients'">
              <span>材料:{{ product.ingredients.split(", ").join(", ") }}</span>
            </div>
            <div v-else>
              <span>保存方法:{{ product.edible_instructions.storage_method }}</span
              ><br />
              <span>保存期間:{{ product.edible_instructions.expiration_date }}</span>
            </div>
          </div>
        </div>
        <div class="other_details_area">
          <span>數量:</span>
          <input type="number" name="" id="" v-model="num" :min="1" />
          <label for="">/盒</label>
          <div class="price"><span>單價:</span> {{ product.price }}元</div>
          <div class="total"><span>總價:</span> {{ product.price * num }}元</div>
          <div class="shipping_fee_free" v-show="noshippingFee">
            over 2000$ no need shipping Fee
          </div>
        </div>
        <div class="btn_group">
          <button class="square-button">Add Cart</button>
          <button class="secondary-button">Add WishList</button>
        </div>
      </section>
    </template>
  </div>
  <h2>relative product</h2>
  <div class="member_container">
    <div class="member">
      <div class="member_img">
        <img src="../../public/pages/products/macaron.png" alt="" />
      </div>
      <div class="member_intro">
        <h4>macaron</h4>
        <button class="secondary-button" @click="goToProductDetails">
          <router-link to="/productDetails">
            <span>More</span>
          </router-link>
        </button>
      </div>
    </div>
    <div class="member">
      <div class="member_img">
        <img src="../../public/pages/products/canele3.jpg" alt="" />
      </div>
      <div class="member_intro">
        <h4>canele3</h4>
        <button class="secondary-button" @click="goToProductDetails">
          <router-link to="/productDetails">
            <span>More</span>
          </router-link>
        </button>
      </div>
    </div>
    <div class="member">
      <div class="member_img">
        <img src="../../public/pages/products/tart.jpg" alt="" />
      </div>
      <div class="member_intro">
        <h4>tart</h4>
        <button class="secondary-button" @click="goToProductDetails">
          <router-link to="/productDetails">
            <span>More</span>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbVue from "../components/Breadcrumb.vue";
import NotificationMessage from "../components/Notification-message.vue";
import { Products } from "../js/productDetails";
export default {
  name: "ProductDetails",
  data() {
    return {
      num: 1,
      page_name: "product",
      page_subName: "productDetails",
      products: Products,
      tabs: [
        {
          title: "intro",
          href: "#intro",
          active: true,
        },
        {
          title: "ingredients",
          href: "#ingredients",
          active: false,
        },
        {
          title: "edible_instructions",
          href: "#edible_instructions",
          active: false,
        },
      ],
    };
  },
  computed: {
    // 比對filter的產品
    filteredProducts() {
      // 傳進來的參數id
      const productId = Number(this.$route.params.id);
      // 比對資料中的id為傳進參數之id的資料
      const cache = Products.filter((product) => product.id === productId);
      return cache;
    },
  },
  created() {},
  mounted() {},
  methods: {
    activateTab(index) {
      this.tabs.forEach((tab, i) => {
        tab.active = i === index;
      });
    },
  },
  watch: {
    num(newVal) {
      this.totalPrice = newVal * this.price;
    },
  },
  components: { BreadcrumbVue, NotificationMessage },
};
</script>

<style lang="scss" scoped>
@import "../sass/style.css";
.product_details_container {
  display: flex;
  //   height: 100vh;
}
.title_area {
  text-align: left;
}
.tab_title {
  display: flex;
  margin-top: 1rem;

  .tab {
    width: 100%;
    height: 50px;
    background: #cccccc85;
    border: 1px solid #ab986b;
    padding: 0.5rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;

    &.active {
      background-color: #ab986b;
      border-bottom: 5px solid #ab986b;
      padding: 0.5rem;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      box-shadow: 0px 0px 10px #ab986b;
    }
    a {
      height: inherit;
    }
  }
}
.product_details {
  padding: 1rem;
}
.tab_inner {
  //   width: 100%;
  height: 100px;
  overflow: scroll;
  //   margin: 0.5rem;
  padding: 0.5rem;
  background-color: #ab986b;
  box-shadow: 0px 0px 10px #ab986b;
  span {
    display: inline-block;
    color: #f5f5f7;
    // padding: 0.5rem 0;
    line-height: 1.2rem;
  }
}
.product_img_box {
  width: 50%;
  img {
    width: 100%;
  }
}
.product_details {
  width: 50%;
  text-align: left;
}
input[type="number"] {
  width: 50px;
  background: transparent;
}
.price,
.total {
  margin: 0.5rem 0;
}
.btn_group {
  margin: 0.5rem;
}
.shipping_fee_free {
  color: #e03859;
}
.square-button {
  margin-right: 0.5rem;
}
.secondary-button {
  width: 45%;
  border-radius: 0;
  margin: 0;
}

.member_container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  .member_img {
    width: 300px;

    img {
      width: 100%;
    }
  }
}
.member_intro {
  display: block;
}
</style>
