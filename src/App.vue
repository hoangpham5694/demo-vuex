<template>
  <div>
    <comp-header v-bind:text="textHeader"></comp-header>
    <button v-on:click="changeTextHeader">Change header text</button>
    <comp-content></comp-content>
    <comp-footer v-bind:text="textFooter" v-on:changeFooterEvent="handleChangeFooterEvent"></comp-footer>
  </div>
</template>

<script>
  import CompHeader from '@/components/CompHeader';
  import CompContent from '@/components/CompContent'
  import CompFooter from '@/components/CompFooter'
  export default {
    name: 'App',
    data(){
      return {
        textHeader: "This is header",
        textFooter: "This is footer",
        dataProducts: [
          {
            id:1,
            name: "Hambuger",
            price: "1000",
          },
          {
            id:3,
            name: "Đùi gà",
            price: "1500",
          },
          {
            id:4,
            name: "Pizza",
            price: "1200",
          },
          {
            id:5,
            name: "Hotdog",
            price: "1800",
          },
          {
            id:6,
            name: "Cánh gà",
            price: "1100",
          },

        ]

      }

    },
    computed:{

    },
    components: {
      CompHeader,
      CompContent,
      CompFooter
    },
    created(){
        this.$store.dispatch('product/initProductAction', {products : this.dataProducts})
    },
    methods:{
      changeTextHeader(){
        this.textHeader = "Changed";
        console.log(this.dataProducts)
        this.$store.dispatch('product/initProductAction', {products : this.dataProducts})
      },
      handleChangeFooterEvent(text){
        this.textFooter = text
      },

    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
