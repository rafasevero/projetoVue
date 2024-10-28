<template>
  <div class="content">
    <NavBar />
    <Banner v-if="$route.path === '/'"/>
    <RouterView />
    <Footer />
  </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import Banner from './components/Banner.vue';
    import Footer from './components/Footer.vue';
    import { RouterView } from 'vue-router';


    export default{
    components:{
      NavBar,
      Banner,
      Footer,
      RouterView
    }
    }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }


  h1 {
      color: #FFF;
      text-align: center;
      font-size: 60px;
      background-color: #222;
      padding: 20px 40px;
  }

  .wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  }

  nav {
  display: flex;
  gap: 20px;
  }

  main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  }




</style>
