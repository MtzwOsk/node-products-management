<template>
  <div id="app">
    <h2>Best products in the World!</h2>
    <ProductList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'

export default {
  name: 'app',
  components: {
    ProductList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
