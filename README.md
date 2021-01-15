技术栈:vue2.0

1,过滤器
 <h2 style="padding:10px;color:black" v-rainrow>
            {{ item.title | toMsg }}  
            <!-- 过滤器用法 -->
</h2>
 filters: {
    toMsg(value) {
      console.log(value);
      return value.toUpperCase();
    },
  },

2,自定义指令
   <h2 style="padding:10px;color:black" v-rainrow>
            {{ item.title | toMsg }}  
            <!-- 过滤器用法 -->
   </h2>
directives: {
    rainrow: {
      inserted: function(el) {
        el.style.color ="#" +Math.random().toString(16).slice(2, 8); //切换多种颜色
      },
    },

},

3,输入框筛选

<el-input type="text" autocomplete="off" v-model="search"></el-input>
<li v-for="item in fullname" :key="item.id"></li>

export default {
  data() {
    return {
     
      search: "",
    };
  },
  computed: {
    fullname() {
      return this.blogs.filter((item) => {
        return item.title.match(this.search);
      });
    },
  },
}