<template>
  <div class="header">
      <div class="main">
          <div class="logo">
              <img src="../assets/logo.jpg" alt="">
              <div>猿计划</div>
          </div>
          <div class="tab">
              <div>首页</div>
              <div>知识体系</div>
              <div>话题</div>
              <div>博客</div>
              <div>题目</div>
          </div>
      </div>

   </div>
</template>

<script>
export default {
//   name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    width:100%;
    height:100px;
    background:#fff;
    line-height:100px;
    margin-top:0;
}
.main{
    width:1200px;
    margin-top:0;
}
.logo{
    width:50%;
    font-size:40px;
    vertical-align: middle;
}
.main div{
    display:inline-block;
}
.logo img{
    width:80px;
}
.tab{
    width:40%;
    line-height:100px;

}
.tab div{
    width:18%;
    text-align:center;
}
</style>
