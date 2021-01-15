<template>
  <div class="blogClass">
    <router-link to="/" exact class="exactBlog">博客</router-link>
    <router-link to="/Blogs" exact class="exactBlog">写博客</router-link>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.blogClass {
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  .router-link-active {
    color: #fff;
    background: red;
    font-size: 18px;
    height: 30px;
  }
  .exactBlog {
    margin: 10px;
    width: 60px;
    height: 40px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    border-radius:3px;
  }
}
</style>
