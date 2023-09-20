<template>
  <section>
    <h1>Greeting!Welcome{{ user }}</h1>
  </section>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      user: window.user,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped></style>
