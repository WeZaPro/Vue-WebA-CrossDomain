<template>
  <div id="app">
    <h1>This Liff Page</h1>
    <img :src="profile.pictureUrl" width="60" height="60" />
    <!-- {{ profile.displayName }} -->
    <p>display Name : {{ profile.displayName }}</p>
    <p>userID : {{ profile.userId }}</p>
    <p>param : {{ this.getParam }}</p>
  </div>
  <div id="btn">
    <button @click="openLineChat">Line@</button>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import liff from "@line/liff";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      loggedIn: false,
      profile: {},
      displayName: "",
      userId: "",
      alert: "",
      getParam: "",
    };
  },
  mounted() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    liff
      .init({ liffId: "1656824759-qbyK4305" })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          this.loggedIn = liff.isLoggedIn();
          console.log("isLoggedIn--> ", liff.isLoggedIn());
          console.log("getIDToken--> ", liff.getIDToken());
          console.log("getContext--> ", liff.getContext());
          console.log("getOS--> ", liff.getOS());
          console.log("isInClient--> ", liff.isInClient());
          //console.log("getAdvertisingId--> ", liff.getAdvertisingId());
          //console.log("getAId--> ", liff.getAId());
          console.log("getVersion--> ", liff.getVersion());
          //console.log("getEnvironment--> ", liff.getEnvironment());

          // get queryString
          this.getParam = params.get("param");
          console.log("param--->", this.getParam);

          this.getProfile();
          // this.getEnvironment();
          this.getFriendship();
        }
      })
      .catch((err) => {
        this.occoredError = "error:" + err;
      });
  },
  methods: {
    async getProfile() {
      await liff.getProfile().then((profile) => {
        console.log("profile--> ", profile);
        this.profile = profile;
        // console.log("this.profile--> ", this.profile);
      });
    },
    async getFriendship() {
      await liff.getFriendship().then((data) => {
        console.log("getFriendship--> ", data);
        if (data.friendFlag) {
          console.log("getFriendship--> = true");
          this.alert = data.friendFlag;
          alert(`data.friendFlag--> ${this.alert}`);
        }
      });
    },
    async getAccessToken() {
      console.log("token--> ");
      await liff.getAccessToken().then((token) => {
        console.log("token--> ", token);
      });
    },

    openLineChat() {
      console.log("openLineChat--> ");
      window.open("https://line.me/ti/p/@889mtekm", "_blank");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
