<template>
  <BreadcrumbVue
    :page_name="page_name"
    :page_sub-name="'/ ' + page_subName"
  ></BreadcrumbVue>
  <section class="eventsContainer">
    <template v-for="(event, index) in filteredEvents" :key="index">
      <div class="img_container">
        <img :src="`/src/assets/event/${event.src}`" :alt="`${event.src}`" />
      </div>
      <div class="title_area">
        <h2>{{ event.name }}</h2>
      </div>
      <div class="other_details_area">
        <p>地點: {{ event.place }}</p>
        <section class="event_description">
          <span>{{ event.description }}</span>
        </section>
        <p>報名截止日: {{ event.expireDate }}</p>
      </div>
      <Form
        textlabel="姓名"
        textplaceholder="請輸入您的中文姓名"
        phonelabel="連絡電話"
        phoneplaceholder="例:0953711701"
        datetimelabel="時段"
      ></Form>
    </template>
  </section>
</template>

<script>
import { Events } from "../js/event";
import BreadcrumbVue from "../components/Breadcrumb.vue";
import Form from "../components/form.vue";

export default {
  name: "EventDetails",
  data() {
    return {
      page_name: "News",
      page_subName: "EventDetails",
      events: Events,
    };
  },
  computed: {
    filteredEvents() {
      const eventId = Number(this.$route.params.id);
      const cache = Events.filter((event) => event.id === eventId);
      return cache;
    },
  },
  created() {},
  mounted() {},
  methods: {},
  components: { BreadcrumbVue, Form },
};
</script>

<style lang="scss" scoped>
@import "../sass/style.css";
.eventsContainer {
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  padding: 2rem;
}
.img_container {
  max-width: 800px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.event_description {
  text-indent: 2em;
}
.other_details_area {
  text-align: left;
}
</style>
