<template>
  <div id="app">
    <!-- 头部 -->
    <Header />   
     <!-- 主体部分 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default{
      components:{
        Header
      }
}


</script>
<style lang="scss">
#app {
  height:100%;
}
</style>
