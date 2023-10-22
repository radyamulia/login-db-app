<template>
  <main class="flex w-screen h-screen">
    <section class="h-full w-[50%] overflow-hidden" id="left-side-wrapper">
      <section class="relative h-screen w-[100%] overflow-hidden">
        <div class="absolute w-[100%] h-[100%] z-6 grid place-items-center">
          <h1 class="text-[46px] text-secondary-50 font-bold">LOGIN</h1>
          <p class="absolute bottom-0 left-0 z-10 text-[18px] mb-16 ml-16">
            Don't have an account?
            <span
              class="font-bold text-blue-900 cursor-pointer"
              @click="onClickSignUp()"
              >Sign Up</span
            >
          </p>
        </div>
        <div
          class="absolute h-[500px] w-[500px] bg-purple-400 rounded-full top-[-200px] right-[-200px] z-0 blur-[100px]"
        ></div>
        <div
          class="absolute h-[500px] w-[500px] bg-pink-400 rounded-full bottom-[-350px] z-0 blur-[100px]"
        ></div>
        <div
          class="absolute h-[300px] w-[300px] bg-cyan-400 left-[-200px] rounded-full z-0 blur-[100px]"
        ></div>
      </section>

      <section class="grid w-full h-full bg-cyan-200 place-items-center">
        <form
          class="h-[500px] w-[600px] flex flex-col justify-center p-8 gap-8 rounded-2xl text-[24px]"
          :class="`${activeTab === 'signup' ? '' : 'hidden'}`"
          method="POST"
        >
          <div
            class="w-full py-2 px-10 text-center text-red-900 bg-red-200 text-[18px] flex justify-between items-center rounded border-red-300 border-2 hidden"
            id="signup_alert"
          >
            <p id="signup_alert_text">Email already exist.</p>
            <div
              class="relative grid w-4 h-4 place-items-center"
              @click="closeSignupAlert()"
            >
              <span
                class="absolute w-full h-1 bg-red-700 rounded rotate-[45deg]"
              ></span>
              <span
                class="absolute w-full h-1 bg-red-700 rounded rotate-[-45deg]"
              ></span>
            </div>
          </div>
          <div class="relative">
            <input
              type="text"
              class="input__name px-6 w-full h-16 text-[24px] rounded border-none focus:outline-0"
              id="signup_name"
              placeholder=""
              required
            />
            <label
              for="signup_name"
              class="label__name absolute top-[13px] left-6 text-secondary-40"
              >Name</label
            >
          </div>
          <div class="relative">
            <input
              type="email"
              class="input__email px-6 w-full h-16 text-[24px] rounded border-none focus:outline-0"
              id="signup_email"
              placeholder=""
              required
            />
            <label
              for="signup_email"
              class="label__email absolute top-[13px] left-6 text-secondary-40"
              >Email</label
            >
          </div>
          <div class="relative">
            <input
              type="password"
              class="input__pw px-6 h-16 rounded text-[24px] w-full border-none focus:outline-0"
              id="signup_password"
              placeholder=""
              required
            />
            <label
              for="signup_password"
              class="label__pw absolute top-[13px] left-6 text-secondary-40"
              >Password</label
            >
          </div>
          <div class="relative">
            <input
              type="password"
              class="input__cpw px-6 h-16 rounded text-[24px] w-full border-none focus:outline-0"
              id="confirm_password"
              placeholder=""
              required
            />
            <label
              for="confirm_password"
              class="label__cpw absolute top-[13px] left-6 text-secondary-40"
              >Confirm Password</label
            >
          </div>
          <button
            type="submit"
            class="self-center px-8 py-2 mt-8 text-white rounded bg-cyan-500 w-fit text-primary-10 disabled:opacity-50"
            @click="
              (e) => {
                e.preventDefault();
                registerUser();
              }
            "
          >
            Sign up
          </button>
        </form>
      </section>
    </section>

    <section
      class="relative h-full w-[50%] overflow-hidden"
      id="right-side-wrapper"
    >
      <section class="relative h-screen w-[100%] overflow-hidden">
        <div class="absolute w-[100%] h-[100%] z-6 grid place-items-center">
          <h1 class="text-[46px] text-secondary-50 font-bold">SIGN UP</h1>
          <p class="absolute bottom-0 left-0 z-10 text-[18px] mb-16 ml-16">
            Already have an account?
            <span
              class="font-bold text-blue-900 cursor-pointer"
              @click="onClickSignIn()"
              >Sign In</span
            >
          </p>
        </div>
        <div
          class="absolute h-[500px] w-[500px] bg-purple-400 rounded-full top-[-200px] right-[-200px] z-0 blur-[100px]"
        ></div>
        <div
          class="absolute h-[500px] w-[500px] bg-pink-400 rounded-full bottom-[-350px] z-0 blur-[100px]"
        ></div>
        <div
          class="absolute h-[300px] w-[300px] bg-cyan-400 left-[-200px] rounded-full z-0 blur-[100px]"
        ></div>
      </section>

      <section class="grid w-full h-full bg-purple-300 place-items-center">
        <form
          class="h-[500px] w-[600px] flex flex-col justify-center p-8 gap-8 rounded-2xl text-[24px]"
          :class="`${activeTab === 'login' ? '' : 'hidden'}`"
        >
          <div
            class="w-full py-2 px-10 text-center text-red-900 bg-red-200 text-[18px] flex justify-between items-center rounded border-red-300 border-2 hidden"
            id="login_alert"
          >
            <p>Incorrect email or password.</p>
            <div
              class="relative grid w-4 h-4 place-items-center"
              @click="closeLoginAlert()"
            >
              <span
                class="absolute w-full h-1 bg-red-700 rounded rotate-[45deg]"
              ></span>
              <span
                class="absolute w-full h-1 bg-red-700 rounded rotate-[-45deg]"
              ></span>
            </div>
          </div>
          <div class="relative">
            <input
              type="email"
              class="input__email px-6 w-full h-16 text-[24px] rounded border-none focus:outline-0"
              id="login_email"
              placeholder=""
              required
            />
            <label
              for="login_email"
              class="label__email absolute top-[13px] left-6 text-secondary-40"
              >Email</label
            >
          </div>
          <div class="relative">
            <input
              type="password"
              class="input__pw px-6 h-16 rounded text-[24px] w-full border-none focus:outline-0"
              id="login_password"
              placeholder=""
              required
            />
            <label
              for="login_password"
              class="label__pw absolute top-[13px] left-6 text-secondary-40"
              >Password</label
            >
          </div>
          <button
            type="submit"
            class="self-center px-8 py-2 mt-8 text-white bg-purple-500 rounded w-fit text-primary-10"
            @click="
              (e) => {
                e.preventDefault();
                loginUser();
              }
            "
          >
            Login
          </button>
        </form>
      </section>
    </section>
  </main>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import axios from "axios";
import router from "../router";

// state
const TO_SCROLL = ref(0);
const activeTab = ref("");

let leftSideWrapper;
let rightSideWrapper;

onMounted(() => {
  leftSideWrapper = document.getElementById("left-side-wrapper");
  rightSideWrapper = document.getElementById("right-side-wrapper");
  TO_SCROLL.value = window.innerHeight;
  rightSideWrapper.scrollTo(0, TO_SCROLL.value);
  activeTab.value = "login";

  setTimeout(() => {
    leftSideWrapper.style.scrollBehavior = "smooth";
    rightSideWrapper.style.scrollBehavior = "smooth";
  }, 500)
});

const onClickSignUp = () => {
  const userEmail = document.getElementById("login_email");
  const userPassword = document.getElementById("login_password");
  [
    userEmail.value,
    userPassword.value,
  ] = ["", "", "", ""];

  leftSideWrapper.scrollTo(0, TO_SCROLL.value);
  rightSideWrapper.scrollTo(0, 0);
  activeTab.value = "signup";
};

const onClickSignIn = () => {
  const userName = document.getElementById("signup_name");
  const userEmail = document.getElementById("signup_email");
  const userPassword = document.getElementById("signup_password");
  const userConfirmPassword = document.getElementById("confirm_password");
  [
    userName.value,
    userEmail.value,
    userPassword.value,
    userConfirmPassword.value,
  ] = ["", "", "", ""];

  rightSideWrapper.scrollTo(0, TO_SCROLL.value);
  leftSideWrapper.scrollTo(0, 0);
  activeTab.value = "login";
};

const closeLoginAlert = () => {
  const wrapper = document.getElementById("login_alert");
  wrapper.style.display = "none";
};
const closeSignupAlert = () => {
  const wrapper = document.getElementById("signup_alert");
  wrapper.style.display = "none";
};

// Get User By Email
const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(`http://localhost:5000/users/${email}`);
    console.log(response.data);
    console.log(!!response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// Login User
const loginUser = async () => {
  let userEmail = document.getElementById("login_email").value;
  let userPassword = document.getElementById("login_password").value;
  const loginAlert = document.getElementById("login_alert");

  const userData = await getUserByEmail(userEmail);
  const isUserExist = !!userData;

  if (!isUserExist) {
    loginAlert.style.display = "flex";
    setTimeout(() => {
      loginAlert.style.display = "none";
    }, 2000);
  } else if (userData.password !== userPassword) {
    loginAlert.style.display = "flex";
    setTimeout(() => {
      loginAlert.style.display = "none";
    }, 2000);
  } else {
    router.push("/");
  }
};

// Create New User
const registerUser = async () => {
  let userName = document.getElementById("signup_name").value;
  let userEmail = document.getElementById("signup_email").value;
  let userPassword = document.getElementById("signup_password").value;
  let userConfirmPassword = document.getElementById("confirm_password").value;
  const registerAlert = document.getElementById("signup_alert");
  const registerAlertText = document.getElementById("signup_alert_text");

  const userData = await getUserByEmail(userEmail);
  const isUserExist = !!userData;

  if (isUserExist) {
    registerAlert.style.display = "flex";
    registerAlertText.innerHTML = "Email already exist."
    setTimeout(() => {
      registerAlert.style.display = "none";
    }, 2000);
  } else if (userPassword !== userConfirmPassword) {
    registerAlertText.innerHTML = "Password doesn't match."
    registerAlert.style.display = "flex";
    setTimeout(() => {
      registerAlert.style.display = "none";
    }, 2000);
  } else {
    try {
      await axios.post("http://localhost:5000/users", {
        name: userName,
        email: userEmail,
        password: userPassword,
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style scoped>
.input__name:not(:placeholder-shown) + .label__name,
.input__email:not(:placeholder-shown) + .label__email,
.input__cpw:not(:placeholder-shown) + .label__cpw,
.input__pw:not(:placeholder-shown) + .label__pw,
.input__name:focus + .label__name,
.input__email:focus + .label__email,
.input__cpw:focus + .label__cpw,
.input__pw:focus + .label__pw {
  top: -24px;
  left: 0;
  font-size: 16px;
}
</style>
