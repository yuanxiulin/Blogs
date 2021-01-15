<template>
  <div class="section">
    <h1>博客总览</h1>
    <el-input type="text" autocomplete="off" v-model="search"></el-input>
    <ul>
      <li v-for="item in fullname" :key="item.id">
        <router-link :to="`Blog/${item.id}`">
          <h2 style="padding:10px;color:black" v-rainrow>
            {{ item.title | toMsg }}  
            <!-- 过滤器用法 -->
          </h2>
        </router-link>
        <p style="padding:0 10px;word-break: break-all;padding-bottom:20px;">
          {{ item.body }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  directives: {
    rainrow: {
      inserted: function(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8); //切换多种颜色
      },
    },
  },
  filters: {
    toMsg(value) {
      console.log(value);
      return value.toUpperCase();
    },
  },
  computed: {
    fullname() {
      return this.blogs.filter((item) => {
        return item.title.match(this.search);
      });
    },
  },
  created() {
    this.$axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "get"
    }).then((res) => {
      this.blogs = res.data.slice(0, 10);
      //console.log(this.blogs)
    });
  },
};
</script>

<style lang="scss">
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  h1 {
    font-size: 18px;
    font-weight: bold;
  }
  .el-input__inner {
    margin: 20px 0;
  }
  li {
    width: 100%;
    background: palevioletred;
    min-height: 120px;
    margin: 10px 0 20px;
    font-size: 18px;
    color: #fff;
  }
}
</style>
