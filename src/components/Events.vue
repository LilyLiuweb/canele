<template>
  <div class="event">
    <div class="event_img_box">
      <img :src="`/src/assets/event/${src}`" :alt="`${src}`" />
    </div>
    <div class="event_content">
      <div class="event_title">
        <h4>{{ name }}</h4>
        <span
          ><i :class="isWishEvent ? 'bx bxs-star' : 'bx bx-star'" @click="handleClick"></i
        ></span>
      </div>
      <p>地點: {{ place }}</p>
      <p>
        {{ description.length > 100 ? description.slice(0, 80) + "..." : description }}
      </p>
      <p>
        報名截止: <span>{{ expireDate }}</span>
      </p>
    </div>
    <div class="event_register">
      <router-link :to="`/eventDetails/${this.id}/${this.slug}`">
        <span class="cute-button border-20">報名</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Events",
  props: {
    id: Number,
    name: String,
    slug: String,
    place: String,
    description: String,
    expireDate: String,
    src: String,
  },
  data() {
    return {
      isWishEvent: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    goToEventDetails() {
      // 觸發父組件 go-to-Event-details 事件，會動態改變route 並 導航到 EventDetail組件
      this.$emit("go-to-Event-details", this.id, this.slug);
    },
    toggleWishEvent() {
      // toggle star's class
      this.isWishEvent = !this.isWishEvent;
    },
    handleClick() {
      // click star's handler
      this.toggleWishEvent();
      this.$emit("wishEvent-clicked", this.id, this.isWishEvent);
    },
  },
  mounted() {
    let wishEventCollection =
      JSON.parse(sessionStorage.getItem("wishEventCollection")) || [];
    let eventIndex = wishEventCollection.findIndex((p) => p.id === this.id);
    this.isWishEvent = eventIndex !== -1;
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../sass/style.css";

.event {
  // height: 200px;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
}
.event_img_box {
  margin: 0 auto;
  max-width: 350px;
  padding: 2rem;
}
.event_img_box img {
  width: 100%;
}
.event_content {
  max-width: 500px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .event_title {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    span {
      height: inherit;
      display: inline-block;
      margin-top: 7px;
    }
  }
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
  // background-color: #e5c0c0;
  // box-shadow: 5px 5px 0 #5e2b2b;
}
@media screen and (min-width: 768px) {
  .events {
    display: block;
    // height: 300px;
  }
  .event {
    // height: 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid #5e2b2b;
  }
  .event_img_box {
    grid-column: 1/1;
    width: 350px;
    padding: 1rem;
  }
  .event_img_box img {
    width: 80%;
  }
  .event_content {
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  .event_register {
    grid-column: 3/4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
