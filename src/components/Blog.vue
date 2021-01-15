<template>
  <div>
    <ul style="margin-top:30px;">
      <li v-for="item in blogs" :key="item.id">
      <h1 style="padding:10px;color:black">{{ item.title }}</h1>
      <p style="padding:0 10px;word-break: break-all;padding-bottom:20px;">{{ item.body  }}</p>
    </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blogs: {},
    };
  },
  created() {
    this.$axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      params: {
        id: this.id,
      },
      method: "get",
    }).then((res) => {
      this.blogs = res.data;
      console.log(this.blogs);
    });
  },
};
</script>

<style lang="scss">
h1 {
    font-size: 18px;
    font-weight: bold;
  }

  li {
    width: 100%;
    background: palevioletred;
    min-height: 120px;
    margin: 10px 0 20px;
    font-size: 18px;
    color: #fff;
  }


</style>
