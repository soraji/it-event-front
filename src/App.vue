<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    <footerPage></footerPage>
  </div>
</template>

<script>
import mainPage from './components/main.vue'
import navigation from './components/navigation.vue';
import footerPage from './components/footer.vue';
export default {
  name: 'app',
  components: {
    mainPage, navigation, footerPage
  } 
} 
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;padding:0;
  min-width:900px;
}
html,body{
  margin:0;
  padding:0;
  font-size:16px;
  height:100%;
  position: relative;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
