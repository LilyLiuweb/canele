<template>
  <BreadcrumbVue :page_name="page_name"></BreadcrumbVue>
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
</template>

<script>
import BreadcrumbVue from "../components/Breadcrumb.vue";
import EventsComponent from "../components/Events.vue";
import { Events } from "../js/event";
export default {
  data() {
    return {
      page_name: "news",
      events: Events,
    };
  },
  methods: {
    goToEventDetails(id) {
      this.$router.push({ name: "eventDetails", params: { id, slug } });
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
  },
  components: {
    BreadcrumbVue,
    EventsComponent,
  },
};
</script>

<style scoped>
@import "../sass/style.css";
.events {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
