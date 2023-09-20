<template>
  <section>
    <form method="post" action="gmailConfimation.php">
      <h5>報名資訊</h5>
      <label for="name">{{ textlabel }}</label>
      <input
        type="text"
        name="name"
        id="name"
        :placeholder="`${textplaceholder}`"
        required
      />

      <label for="phone">{{ phonelabel }}</label>
      <input
        type="phone"
        name="phone"
        id="phone"
        :placeholder="`${phoneplaceholder}`"
        required
      />

      <label for="datetime">{{ datetimelabel }}</label>
      <input type="datetime-local" name="" id="datetime" />
      <div class="btn_group">
        <button @submit="submit" type="submit" class="cute-button">報名啦!</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Form",
  props: {
    textlabel: String,
    textplaceholder: String,
    phonelabel: String,
    phoneplaceholder: String,
    datetimelabel: String,
  },
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
section {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    padding: 2rem;
    border: 3px solid #ab986b;
    // background-color: #e3afafa4;
    box-shadow: 5px 5px 0 #c17777;
    margin: 0 auto;
    label {
      display: block;
      padding: 1rem 0;
    }
    input {
      border: 1px solid #ab986b;
    }
  }
}
.btn_group {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cute-button {
  margin: 1rem;
}
</style>
