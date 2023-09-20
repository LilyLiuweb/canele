<template>
  <Breadcrumb :page_name="page_name"></Breadcrumb>
  <div class="card_container">
    <div class="card_origin flex-reverse">
      <div class="img_box">
        <img src="../assets/bg/aboutBg2.jpg" alt="" />
      </div>
      <div class="description">
        <h2>Story</h2>
        <p>
          Our story began with a family that loves desserts. Whenever there is a special
          holiday or birthday, we always work together to make all kinds of delicious
          desserts so that family and friends can share sweet moments together.
        </p>
      </div>
    </div>
    <div class="card_origin">
      <div class="img_box">
        <img src="../assets/pages/about/aboutPic.jpg" alt="" />
      </div>
      <div class="description">
        <h2>Origin</h2>
        <p>
          We choose to use the highest quality ingredients and carefully formulate each
          dessert's recipe, paying attention to every detail, hoping to bring our
          customers the best taste experience.
        </p>
      </div>
    </div>

    <div class="card_origin flex-reverse">
      <div class="img_box">
        <img src="../assets/pages/about/delivery.jpg" alt="" />
      </div>
      <div class="description">
        <h2>Delivery</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum a
          reprehenderit laborum libero optio unde fugiat incidunt qui temporibus, iste
          inventore voluptate provident cumque fuga obcaecati perferendis perspiciatis
          architecto nostrum!
        </p>
      </div>
    </div>
    <div class="card_origin">
      <div class="img_box">
        <img src="../assets/pages/about/shopStore.jpg" alt="" />
      </div>
      <div class="description">
        <h2>Store</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum a
          reprehenderit laborum libero optio unde fugiat incidunt qui temporibus, iste
          inventore voluptate provident cumque fuga obcaecati perferendis perspiciatis
          architecto nostrum!
        </p>
      </div>
    </div>
    <div class="member_container">
      <div class="member">
        <div class="member_img">
          <img src="https://picsum.photos/id/548/400/400" alt="" />
        </div>
        <div class="member_intro">
          <h4>Luke</h4>
          <p>dessert design/creative</p>
        </div>
      </div>
      <div class="member">
        <div class="member_img">
          <img src="https://picsum.photos/id/549/400/400" alt="" />
        </div>
        <div class="member_intro">
          <h4>Lily</h4>
          <p>web design/marketing</p>
        </div>
      </div>
      <div class="member">
        <div class="member_img">
          <img src="https://picsum.photos/id/550/400/400" alt="" />
        </div>
        <div class="member_intro">
          <h4>Emmy</h4>
          <p>delivery/produce</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "../components/Breadcrumb.vue";
export default {
  data() {
    return {
      page_name: "about",
    };
  },
  components: {
    Breadcrumb,
  },
};
</script>
<style lang="scss" scoped>
@import "../../src/sass/style.css";
.card_container {
  background-image: url(../assets/bg/aboutBg3.jpg);
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
}
.card_origin {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
}
.img_box {
  flex-grow: 1;
  //   max-width: 700px;
  img {
    width: 100%;
  }
}
.flex-reverse {
  flex-direction: row-reverse;
}
.description {
  flex-grow: 1;
  padding: 1rem;
  background-color: rgba(234, 235, 212, 0.89);
  text-align: left;
  h2 {
    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 5px;
      background-color: #42824c;
    }
  }
}

.member_container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .member_img {
    width: 300px;
    img {
      border-radius: 50%;
      width: 100%;
    }
  }
}
.member_intro {
  display: block;
}
</style>
