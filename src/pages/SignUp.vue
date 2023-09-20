<template>
  <!-- <h1>This is Sign In page</h1> -->
  <div class="sign_in_container">
    <div class="img_contaniner"></div>
    <div class="logIn_container">
      <h2>Sign Up</h2>
      <p>
        Already using Canele?
        <router-link to="sign-in">
          <span class="sign-in-link">Sign in here</span>
        </router-link>
      </p>
      <div class="google_sign_in">
        <span><i class="bx bxl-google"></i> </span>
        <span>Use Google Account</span>
      </div>
      <div class="division">
        <span>or</span>
      </div>
      <form action="" @Submit.prevent="Singup">
        <label for="user">User Name</label>
        <input
          v-model="user"
          type="text"
          name=""
          id="user"
          placeholder="please fill in your Name"
        />
        {{ user }}
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          name=""
          id="email"
          placeholder="please fill in email"
        />
        {{ email }}
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          name=""
          id="password"
          placeholder="please fill in password"
        />
        {{ password }}
        <section class="password_illustration">
          <p>password must contain:</p>
          <ol>
            <li>6~12 english letter contains at least one capital letter</li>
            <li>contain special mark within</li>
          </ol>
        </section>
        <div class="btn_group">
          <button class="square-button">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      email: "",
      password: "",
      hideFooter: true,
    };
  },
  methods: {
    Singup() {
      window.user = this.user;
      this.$router.push({ name: "protected" });
    },
  },
  created() {
    this.hideFooter = true;
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/style.css";
div {
  padding: 10px;
}
.sign_in_container {
  background: url(../assets/pages/about/aboutPic.jpg);
  background-size: cover;
  max-width: 100%;
  //   height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_contaniner {
  max-width: 60%;
  img {
    width: 100%;
  }
}
.logIn_container {
  max-width: 40%;
  padding: 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px #111;
}
.sign-in-link {
  color: blue;
}
.google_sign_in {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem auto;
  padding: 1rem;
  background-color: rgb(200, 79, 79);
  span {
    color: #fff;
    display: block;
  }
  i {
    font-size: 25px;
  }
}
.division {
  span {
    &::before,
    &::after {
      content: "--------------";
    }
  }
}
input {
  border: 1px solid #ccc;
  width: 100%;
}
form {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 25px;
}
.forgot_password {
  margin: 10px;
  span {
    border-bottom: 2px solid rgb(61, 61, 236);
  }
}
.sign_up {
  .sign_up_link {
    color: rgb(61, 61, 236);
  }
}
.password_illustration {
  margin: 20px 30px 0 0;
  padding: 1rem;
  background-color: #bcbcbc80;
  p {
    color: #000;
  }
  ol {
    padding: 0 20px;
    li {
      font-size: 1rem;
      list-style: decimal;
    }
  }
}
.btn_group {
  display: flex;
  justify-content: end;
  margin-right: 20px;
  .square-button {
    width: 100px;
    // background-color: #d76d6d;
  }
}
</style>
