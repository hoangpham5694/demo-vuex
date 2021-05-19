<template>
<div class="container">
    <h1>Content</h1>
    <product-list-items></product-list-items>
</div>
</template>

<script>
    import ProductListItems from './Products/ProductListItems'
    export default {
        name: "CompContent",
        props:{
            dataProducts: Array
        },
        components:{
            ProductListItems
        },
        methods: {
        }
    }
</script>

<style scoped>
    .container{
        min-height: 500px;
        background-color: #FFF3CD;
    }

</style>
