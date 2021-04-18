<template>
  <div id="page-container">
   <div id="content-wrap">
   </div>
   <footer id="footer">
     <div id="scrollBottom">Copyright &copy; 2021 All Rights Reserved by 🐚 & 🍋</div>
   </footer>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#page-container {
  position: relative;
  min-height: 70vh;
}
#content-wrap {
  padding-bottom: 2.5rem;    /* Footer height */
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color:#737373;
  font-size:15px;
  line-height:24px;
  padding:20px 0 20px;
  background-color:#26272b;
}
</style>