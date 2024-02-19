<template>
  <div id="home">
    <div id="nav">
      <router-link v-for="route in routes" :to="route.path" :key="route.path">
        {{ route.title }}
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { routes } from "@/router";

export default {
  name: "Home",
  data() {
    return {
      routes,
    };
  },
  mounted() {
    console.log("Home mounted");
  },
};
</script>

<style lang="scss">
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
      display: block;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
