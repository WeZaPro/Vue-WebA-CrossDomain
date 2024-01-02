<template>
  <h1>CONTACT PAGE</h1>
  <div id="contact">
    <!-- <a href="https://vue-weba-crossdomain.onrender.com/contact"> -->
    <!-- <a href="https://line.me/ti/p/@985lgfum">
      <button>LINE @</button>
    </a> -->
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
<style scoped>
button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-family: "微软雅黑", arail;
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
  }
  &.danger {
    background-color: #ff4949;
    color: #fff;
  }
  &.success {
    background-color: #13ce66;
    color: #fff;
  }
  &.info {
    background-color: #50bfff;
    color: #fff;
  }
}
</style>
