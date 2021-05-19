<template>
    <div class="product-item">
        <div class="item-detail">
            <h2>{{product.name}}</h2>
            <p>Price: {{product.price}}</p>
            <button v-on:click="handleClickDelete">Delete this</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ProductItem",
        props:{
          product: Object
        },
        methods:{
            handleClickDelete(){
                this.$emit("deleteProductEvent", this.product)
            }
        }

    }



</script>

<style scoped>
    .product-item{
        /*height: 100px;*/
    }
    .item-detail{
        margin: 5px;
        border: solid black 1px;
    }
</style>
