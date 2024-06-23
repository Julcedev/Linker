<template>
  <div id="app">
    <div id="innr-app">
      <router-view></router-view>
    </div>
  </div>
  </template>
  <style>
    *{
    margin: 0;
    padding: 0;
  }
</style>
  
  <style scoped>
  *{
    margin: 0;
    padding: 0;
  }
#innr-app{
  width: 100%;
  height: 100vh;
}
  </style>
  <script>
  import HomeView from './views/HomeView.vue';
  
  export default {
    name: 'App',
    components: {
      HomeView
    },
    mounted(){
      document.body.style.backgroundColor = 'black';
      console.log(this.$route.path);


    },
    created() {
      document.body.style.backgroundColor = 'black';
    },
    watch(){
      if(this.$route.path === '/'){
        document.body.style.backgroundColor = 'black';
      }
    }
  };
  </script>
  