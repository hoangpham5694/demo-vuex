<template>
<footer>
    <h1>{{text}}</h1>
    <button v-on:click="changeTextFooter">Change text footer</button>
</footer>
</template>

<script>
    export default {
        props:{
          text:String
        },
        name: "CompFooter",
        methods: {
            changeTextFooter() {
                // this.text = "aaa"
                this.$emit('changeFooterEvent', 'Footer has been changed')
            }
        }
    }
</script>

<style scoped>
    footer{
        background-color: #FFDFE4;
    }
</style>
