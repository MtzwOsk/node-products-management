<template>
<div class="container">
 <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  </modal>
  <button type="button" @click="addProductTemp">Add new</button>
  <table class="product-table">
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Image</th>
  </tr>
    <AddProduct v-if="showAddTemp" @EditToggle="SetEditToggle"/>
    <tr v-for="product in products">
      <td>{{ product.Name }}</td>
      <td>{{ product.Price }}</td>
      <td><img  :src="apiLink + imgPath + product.Image" class="product-img" :alt="product.Name" /></td>
      <td>
        <span>
          <button type="button" @click="editProduct">Edit</button>
        </span>
        <span>
          <button type="button" @click="deleteProduct">Delete</button>
        </span>
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
      },
      SetEditToggle: function(SetEditToggle) {
        this.showAddTemp = SetEditToggle;
      }
  }

}
</script>

<!-- template for the modal component -->
<script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
