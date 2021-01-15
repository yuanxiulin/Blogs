<template>
  <div class="header">
    <h1>添加博客</h1>
    <el-form :model="formInline" :rules="rules" ref="formInline" v-if="!submit">
      <!-- 主题 -->
      <label>主题:</label>
      <el-form-item prop="title" >
        <el-input
          type="text"
          v-model="formInline.title"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <!-- 活动形式 -->
      <label>活动形式:</label>
      <el-input type="textarea" v-model="formInline.text"></el-input>

      <!-- 复选框-->
      <label style="margin:10px 0 0;">分类:</label>
      <el-checkbox label="Vue.js" v-model="formInline.check"
        >Vue.js</el-checkbox
      >
      <el-checkbox label="Angular.js" v-model="formInline.check"
        >Angular.js</el-checkbox
      >
      <el-checkbox label="React.js" v-model="formInline.check"
        >React.js</el-checkbox
      >
      <el-checkbox label="Node.js" v-model="formInline.check"
        >Node.js</el-checkbox
      >

      <!-- 作者 -->
      <label>作者:</label>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-button type="primary" @click="submitForm('formInline')"
        >添加博客</el-button
      >
    </el-form>
    <h3 v-if="submit">恭喜您已成功添加博客</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        title: "",
        text: "",
        check: [],
        option: "",
        value: "",
      },
      options: [
        {
          value: "黄金糕",
          label: "黄金糕",
        },
        {
          value: "双皮奶",
          label: "双皮奶",
        },
      ],
      value: "",
      submit:false,
      rules: {
        title: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const titles=this.formInline.title;
          const bodys=this.formInline.text;
          const userIds=1;
          this.$axios({
            url:"https://jsonplaceholder.typicode.com/posts",
            type:"get",
            data:{
              title:titles,
              body:bodys,
              userId:userIds
            }
          })
          .then((res=>{
            this.submit=true;
            console.log(res)
          }))
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  h1,h3{
    font-size: 18px;
    font-weight: bold;
  }
  label {
    display: block;
    font-size: 16px;
    margin: 10px 0;
    font-weight: 600;
  }
  .el-checkbox {
    display: inline-block;
    // margin-left: 5px;
    .el-checkbox__label {
      padding-left: 0 !important;
      padding-right: 5px !important;
    }
  }

  .el-textarea__inner {
    height: 127px !important;
  }
  button {
    display: block;
    margin: 25px 0;
  }
  
}
</style>
