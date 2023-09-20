<template>
  <div class="breadcrumb">
    <span>Home</span>/&nbsp;<span>{{ page_name }}</span
    ><span>{{ page_subName }}</span>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: { page_name: String, page_subName: String },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../sass/style.css";
.breadcrumb {
  text-align: left;
}
</style>
