<template>
  <!-- <h1>This is Sign In page</h1> -->
  <div class="sign_in_container">
    <div class="img_contaniner">
      <!-- <img src="../assets/aboutBg2.jpg" alt="aboutBg2" /> -->
    </div>
    <div class="logIn_container">
      <h2>
        <!-- <img src="../assets/logo_vel_177X143.png" /> -->
        Sign In
      </h2>
      <div class="google_sign_in">
        <span><i class="bx bxl-google"></i> </span>
        <span>Use Google Account</span>
      </div>
      <div class="division">
        <span>or</span>
      </div>
      <form action="" @Submit.prevent="Singin">
        <label for="email">Email</label>
        <input type="email" name="" id="email" placeholder="please fill in email" />
        <label for="password">Password</label>
        <input
          type="password"
          name=""
          id="password"
          placeholder="please fill in password"
        />
        <div class="btn_group">
          <button class="square-button">Sign In</button>
        </div>
        <section class="password_illustration">
          <p>password must contain:</p>
          <ol>
            <li>6~12 english letter contains at least one capital letter</li>
            <li>contain special mark within</li>
          </ol>
        </section>
      </form>

      <div class="forgot_password">
        <span>forgot password?</span>
      </div>

      <div class="sign_up">
        <span
          >Don't have our account?
          <router-link to="/sign-up">
            <span class="sign_up_link">Sign Up </span></router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideFooter: true,
    };
  },
  methods: {
    Singin() {
      window.user = this.username;
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
  // height: 100vh;
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
.sign_up_link {
  color: blue;
}
.google_sign_in {
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
