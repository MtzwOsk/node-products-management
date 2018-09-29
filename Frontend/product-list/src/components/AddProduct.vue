<template>
    <tr>
      <td><input v-model="ProductName"/></td>
      <td><input v-model="ProductPrice"/></td>
      <td><input v-model="ProductImg"/></td>
      <td><button type="button" @click="addNewProduct">Add</button></td>
    </tr>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
      return {
        ProductName: "Product Name",
        ProductPrice: 0,
        ProductImg: "onion.png"
      }
  },
  methods: {
      addNewProduct: function() {
        var request = 
          {
              name: this.ProductName,
              price: this.ProductPrice,
              img: this.ProductImg
          }
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
       })
       .then(
           this.EditToggle()
       )
    },
    EditToggle() {
                this.$emit("EditToggle", false);
            }
  }
}
</script>