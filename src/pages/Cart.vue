<template>
  <Breadcrumb :page_name="page_name"></Breadcrumb>
  <notification-message type="error" header="Oh No!">
    <p>Your Order hasn't <b>completed.</b></p>
  </notification-message>
  <notification-message type="success" header="Oh Yeah!">
    <p>Your Order is completed!</p>
  </notification-message>
  <h2 style="text-align: left">Shopping Cart</h2>
  <div class="toggle_summary">
    <button class="cute-button" @click="showCheckout()"><span>checkout</span></button>
  </div>
  <div class="cart_container">
    <div class="main_cart">
      <table>
        <thead>
          <tr>
            <th>Product Pic</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Total Price</th>
            <th>Cancel</th>
          </tr>
        </thead>

        <tbody>
          <template v-for="product in 4" :key="product">
            <tr>
              <td>
                <div class="product_img">
                  <img src="../../public/pages/products/canele3.jpg" alt="" />
                </div>
              </td>
              <td>
                <p>Cenele sweet|gift|French</p>
                <p>$5000</p>
              </td>
              <td>
                <span class="minor" @click="descrement(product)">-</span
                ><input
                  type="number"
                  name=""
                  id=""
                  :value="num"
                  style="width: 50px"
                  min="1"
                /><span class="plus" @click="increment(product)">+</span>
              </td>
              <td>{{ num * 5000 }}</td>
              <td>X</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="aside_cart" v-if="checkoutView">
      <h2>Summary</h2>
      <div class="product_item">
        <p>Cenele</p>
        <p>$20000</p>
      </div>
      <div class="shipping_fee">
        <p>Shipping Fee</p>
        <p>$0</p>
      </div>
      <div class="total_price">
        <span>Total</span>
        <span>{{ num * 5000 * 4 }}</span>
      </div>
      <div class="checkOut">
        <button class="cute-button"><span>checkout</span></button>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import NotificationMessage from "../components/Notification-message.vue";
export default {
  name: "App",
  data() {
    return {
      num: 1,
      sum: "0",
      checkoutView: false,
      page_name: "cart",
    };
  },
  methods: {
    increment(id) {
      this.num++;
    },
    descrement(id) {
      this.num--;
    },
    sum() {
      5000 * num;
    },
    showCheckout() {
      this.checkoutView = !this.checkoutView;
    },
  },
  components: {
    Breadcrumb,
    NotificationMessage,
  },
};
</script>

<style scoped lang="scss">
@import "../sass/style.css";
.cart_container {
  display: flex;
}
// .toggle_summary {
//   display: flex;
//   justify-content: end;
// }
.main_cart {
  // width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  .product_img {
    img {
      vertical-align: middle;
      width: 100%;
    }
  }
}
table {
  margin: 0 auto;
  vertical-align: middle;
  thead {
    tr {
      th {
        padding: 1rem;
        width: 25%;
        border-bottom: 1px solid #bd3d3d;
      }
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid #bd3d3d;
      &:nth-child(even) {
        background-color: #eae3e3;
      }
      td {
        padding: 1rem;
        width: 25%;
      }
      input {
        text-align: center;
        border: 1px solid #bd3d3d;
        margin: 0.2rem;
      }
    }
  }
}
.minor,
.plus {
  display: inline-block;
  width: 25px;
  line-height: 25px;
  background-color: #bd3d3d;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
}
.aside_cart {
  width: 30%;
  height: 400px;
  border: 2px solid #ccc;
  // background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  background-color: #f0e9e9;
  position: fixed;
  top: 70px;
  right: 0;
  border-radius: 2rem;
}
.product_item,
.shipping_fee {
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: space-around;
  border-bottom: 1px solid #d7d5d5;
  padding: 1rem;
  p {
    &:nth-child(1) {
      flex-grow: 1;
    }
    &:nth-child(2) {
      text-align: right;
      width: 100px;
    }
    margin: 0;
    padding: 0.5rem;
  }
}
.total_price {
  display: flex;
  justify-content: end;
  gap: 1rem;
  text-align: right;
  margin: 1rem 2.8rem 0 0;
  span {
    font-size: 20px;
    font-weight: 700;
  }
}
.checkOut {
  display: flex;
  justify-content: end;
  width: 100%;
  margin: 2rem auto;
  button {
    width: 100%;
    line-height: 30px;
    margin: 1rem;
  }
}
</style>
