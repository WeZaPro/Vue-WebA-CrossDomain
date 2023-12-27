<script setup></script>

<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/" class="text-white decor-none">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-white decor-none"
            >About</router-link
          >
        </li>
        <!-- <li>
          <router-link to="/liff" class="text-white decor-none"
            >Liff</router-link
          >
        </li> -->
      </ul>
    </nav>
    <h1>WEB FIRST PAGE</h1>
    <div>
      <!-- <a href="https://liff.line.me/1656824759-dzZxJlQ9" target="_blank">
        Web Site B
      </a> -->
      <a href="https://wezapro.github.io/LineMessage"> Web Site B </a>
    </div>

    <!-- <div id="btn">
      <button @click="siteB">siteB</button>
    </div> -->

    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import liff from "@line/liff";

export default {
  // name: "App",
  // components: {
  //   //HelloWorld,
  // },
  data() {
    return {};
  },
  methods: {
    //siteB() {
    //console.log("openLineChat--> ");
    // window.open("https://liff.line.me/1656824759-lQKpOazZ", "_blank");
    //},
  },
};
</script>

<style scoped>
nav ul {
  display: flex;
  list-style: none;
  gap: 10px;
}

nav ul li {
  background-color: hsl(252, 48%, 57%);
  padding: 4px 6px;
  border-radius: 5px;
  color: #fff;
  transition: 0.5s;
}

nav ul li:hover {
  background-color: hsl(252, 38%, 38%);
}

.text-white {
  color: white;
}

.decor-none {
  text-decoration: none;
}
</style>
