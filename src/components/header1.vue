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
            <div class="person" >
                <span @click='towrite'>写文章</span>
                <span><img src="../assets/data@2x.png" alt="" @click='show1'></span>
                <div class="ava" >
                    <div class="hide"  v-if="show" >
                        <div class="myself">我的</div>
                        <div class="logout">退出登录</div>
                    </div>
                </div>
            </div>
      </div>

   </div>
</template>

<script>
export default {
//   name: 'header',
  data () {
    return {
      show: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    show1: function () {
      console.log(123)
      this.show = !this.show
    },
    towrite: function () {
      this.$router.push('/write')
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
    margin:0 auto;
}
.logo{
    width:30%;
    font-size:40px;
    vertical-align: middle;
    float:left;
}
.main div{
    display:inline-block;
}
.logo img{
    width:80px;
    float:left;
}
.logo div{
    float:left;
}
.tab{
    width:40%;
    line-height:100px;
    margin-right:10%;

}
.tab div{
    width:18%;
    text-align:center;
}
.person{
    float:right;
    width:10%;
    position:relative;
}

.person img{
    width:20px;
}
.hide{
    width:80px;
    height:80px;
    line-height:40px;
    background:#fff;
    position: absolute;
    top:60px;
    left:0;
    z-index:33;
}
.hide div{
    display:block;
}
</style>
