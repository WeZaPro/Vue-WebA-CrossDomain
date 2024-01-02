<script setup></script>

<template>
  <div id="app">
    <nav>
      <!-- <ul>
        <li>
          <router-link to="/" class="text-white decor-none">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-white decor-none"
            >About</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="text-white decor-none"
            >Contact</router-link
          >
        </li>
      </ul> -->
    </nav>
    <!-- <h1>WEB FIRST PAGE</h1> -->
    <div>
      <!-- <a href="https://liff.line.me/1656824759-dzZxJlQ9" target="_blank">
        Web Site B
      </a> -->
      <!-- <a href="https://wezapro.github.io/LineMessage"> Web Site B </a> -->
    </div>

    <!-- <div id="btn">
      <button @click="siteB">SITE B</button>
    </div> -->

    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import liff from "@line/liff";

export default {
  // name: "App",
  // components: {
  //   //HelloWorld,
  // },
  data() {
    return {
      loggedIn: false,
      profile: {},
      displayName: "",
      userId: "",
      alert: "",
      getParam: "",
      //userId_sample: "012345678",
    };
  },
  methods: {
    async siteB() {
      //console.log("openLineChat--> ");
      //window.open("https://wezapro.github.io/LineMessage", "_blank");
      //window.open("https://liff.line.me/1656824759-lQKpOazZ", "_blank");
      window.open(`https://liff.line.me/1656824759-PonrgLDq`, "_blank");

      //await liff.init({ liffId: "1656824759-qbyK4305" });

      //const profile = await liff.getProfile();

      // if (liff.isLoggedIn()) {
      //   await liff
      //     .sendMessages([
      //       {
      //         type: "text",
      //         // text: `Register/${profile.displayName}`,
      //         text: `Register`,
      //       },
      //     ])
      //     .then(() => {
      //       window.alert(`Message sent Register `);
      //     })
      //     .catch((error) => {
      //       window.alert("Error sending message: " + error);
      //     });
      // } else {
      //   liff.login();
      // }
    },
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
