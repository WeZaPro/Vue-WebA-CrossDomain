<template>
  <h1>This is About Page</h1>
  <div id="formRegister">
    <form id="statusform" v-on:submit="addProduct">
      <input type="text" v-model="name" placeholder="Product Name" />
      <input type="number" v-model="price" placeholder="Price" />
      <button type="submit">Add</button>
    </form>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    addProduct(e) {
      e.preventDefault(); // Prevent page from reloading.
      console.log("data===> ", this.name, this.price);
      // save data to google sheet
      // function req res
    },
  },
};
</script>
