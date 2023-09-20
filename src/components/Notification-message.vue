<template>
  <div class="ui message" :class="type" v-if="!hidden">
    <i class="close icon" @click="hide"></i>
    <div class="notification_header">{{ header }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NotificationMessage",
  props: {
    type: String,
    header: String,
  },
  data() {
    return {
      hidden: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    hide() {
      this.hidden = true;
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
