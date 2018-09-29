<template>
<div class="container">
  <button type="button" class="btn-green" @click="addProductTemp">Add new</button>
  <table class="product-table">
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Image</th>
  </tr>
    <AddProduct v-if="showAddTemp" @close="showAddTemp = false">
      <h3 slot="header">custom header</h3>
    </AddProduct>  
    <tr v-for="product in products">
      <td>{{ product.Name }}</td>
      <td>{{ product.Price }}</td>
      <td><img  :src="apiLink + imgPath + product.Image" class="product-img" :alt="product.Name" /></td>
      <td>
        <span>
          <button type="button" @click="editProduct">Edit</button>
        </span>
        <!-- <span>
          <button type="button" @click="deleteProduct">Delete</button>
        </span> -->
      </td>
    </tr>
  </table>
</div>  
</template>

<script>
import AddProduct from './AddProduct.vue'

export default {
  name: 'ProductList',
  components: {
    AddProduct
  },
  props: {
    showAddTemp: Boolean
  },
  data() {
      return {
          products: 'Loading'
      }
  },
  created() {
    this.fetchData();
  },
  computed: {
    apiLink: function() { return "http://192.168.1.110:3000/"},
    imgPath: function() { return "images/"}
  },
  methods: {
      fetchData: function () {
          fetch('http://192.168.1.110:3000/products-list')
              .then(response => response.json())
              .then(json => {
                  this.products = json;
              });
      },
      addProductTemp: function() {
        this.showAddTemp = true;

      },
      editProduct: function() {
        this.showAddTemp = true;
      }
  }

}
</script>

<!-- template for the modal component -->


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.product-img {
  width: 100px;
  height: 100px;
}
.product-table {
  width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>
