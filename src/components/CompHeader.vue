<template>
<header>
    <h1 class="text-header">{{text}}</h1>
</header>
</template>

<script>
    export default {
        name: "CompHeader",
        props: {
          text: String
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    header {
        background-color: rgba(0, 18, 80, 0.21);
    }
    /*.text-header{*/
    /*    color: red;*/
    /*}*/

</style>
