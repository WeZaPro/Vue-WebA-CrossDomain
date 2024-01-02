<template>
  <h1>This is Contact Page</h1>
  <div id="contact">
    <!-- <a href="https://vue-weba-crossdomain.onrender.com/contact"> -->
    <a href="https://line.me/ti/p/@985lgfum">
      <button>LINE @</button>
    </a>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // name: "",
      // price: "",
    };
  },
  methods: {
    // addProduct(e) {
    //   e.preventDefault(); // Prevent page from reloading.
    //   console.log("data===> ", this.name, this.price);
    //   // save data to google sheet
    //   // function req res
    // },
  },
};
</script>
