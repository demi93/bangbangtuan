<template>
  <div class="login">
     <div class="main">
         <div class="title">欢迎来到猿计划</div>
         <div class="phone">
             <input type="text" placeholder="请输入登录手机号"/>
         </div>
         <div class="password">
             <input type="text" placeholder="6-16位密码，区分大小写，不能使用空格">
         </div>
         <div class="text">
             <span class="next"><input type="checkbox" name="" id="">下次自动登录</span>
             <span >忘记密码</span>
             <span class="red">
                 立即注册
             </span>
         </div>
         <button>登录</button>
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
.login{
    width:400px;
    height:300px;
    padding:50px;
    margin:0 auto;
    margin-top:30px;
    background:#fff;
}
.title{
    height:40px;
    line-height:40px;
    border-bottom:1px solid #000;
}
.phone,.password{
    width:100%;
    height:30px;
    margin-top:30px;
}
.red{
    color:#f11;
}

.phone input,.password input{
    width:100%;
    height:30px;
    text-indent:10px;
}
.text{
    margin-top:30px;
}
.text span{
    display:inline-block;
    width:24%;
}
.text .next{
    float:left;
    width:50%
}
button{
    margin-top:30px;
    border:none;
    outline: none;
    background:#f11;
    color:#fff;
    width:100px;
    height:30px;
    line-height:30px;
    border-radius: 15px;
}

</style>
