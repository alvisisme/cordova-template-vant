<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <van-image width="200" height="200" alt="Vant logo" :src="Logo" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Image } from "vant";
import Logo from "../assets/logo.png";

export default {
  name: "Home",
  components: {
    HelloWorld,
    [Image.name]: Image
  },
  data() {
    return {
      Logo
    };
  }
};
</script>
