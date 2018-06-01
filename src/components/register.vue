 <template>
  <div class="login">
     <div class="main">
         <div class="title">欢迎来到猿计划</div>
         <div class="phone">
             <input type="text" placeholder="请输入登录手机号"/>
         </div>
         <div class="name">
             <input type="text" placeholder="请输入昵称，至少3个字符，之多20个字符">
         </div>
         <div class="password">
             <input type="text" placeholder="6-16位密码，区分大小写，不能使用空格">
         </div>
         <div class="conpassword">
             <input type="text" placeholder="请再次输入密码">
         </div>
         <div class="code">
             <input type="text" placeholder="验证码">
             <div class="code1"></div>
         </div>
         <div class="codephone">
             <input type="text" placeholder="请输入短信验证码">
             <div class="dx">获取验证码</div>
         </div>
         <div><button>注册</button></div>
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
    min-height:300px;
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
.phone,.password,.name,.conpassword,.codephone,.code{
    width:100%;
    height:30px;
    margin-top:30px;
}
.red{
    color:#f11;
}

.phone input,.password input,.name input,.conpassword input{
    width:100%;
    height:30px;
    text-indent:10px;
}
.codephone input,.code input{
     height:30px;
    text-indent:10px;
    width:50%;
    float:left;

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
