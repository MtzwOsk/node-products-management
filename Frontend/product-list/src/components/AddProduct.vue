<template>
   <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          This is the default tile!

          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
        <div>
          <input v-model="ProductName"/>
        </div>
        <div>
          <input v-model="ProductPrice"/>
        </div>
        <div>
          <input v-model="ProductImg"/>
        </div>
        <div>
          <button type="button" @click="addNewProduct">Add</button>
        </div>
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="close"
            >
              Close me!
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
      return {
        ProductName: "",
        ProductPrice: "",
        ProductImg: ""
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
           this.ProductName = "",
           this.ProductPrice = "",
           this.ProductImg = "",
           this.$emit('close')
       )
    },
    close() {
        this.$emit('close');
      }
  }
}
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }
</style>