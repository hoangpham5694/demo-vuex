<template>
    <div class="list-product">
        <product-item v-for="(product, index) in getlistProduct" v-on:deleteProductEvent="handleDeleteProduct" v-bind:key="index" v-bind:product="product" class="product-item"></product-item>
    </div>
</template>

<script>
    import ProductItem from './ProductItem'
    import { mapGetters } from 'vuex'
    export default {
        name: "ProductListItems",
        computed : {
            ...mapGetters({
                getlistProduct: 'product/getListProduct'
            })
        },
        components:{
            ProductItem
        },

        methods: {
            handleDeleteProduct(product){
                console.log(product)
                this.$store.dispatch('product/deleteProductAction', {product: product})
                console.log(this.getlistProduct)
                this.$forceUpdate()

            }
        },
        updated(){
            console.log("updated")
        }

    }
</script>

<style scoped>
    .list-product{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .product-item{
        width: 200px;
    }
</style>
