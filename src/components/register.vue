 <template>
  <div class="login">
     <div class="main">
         <div class="title">欢迎来到猿计划</div>
         <div class="phone">
             <input type="text" v-model="phone" placeholder="请输入登录手机号"/>
         </div>
         <div class="name">
             <input type="text" v-model="nickname" placeholder="请输入昵称，至少3个字符，之多20个字符">
         </div>
         <div class="password">
             <input type="text" v-model="password" placeholder="6-16位密码，区分大小写，不能使用空格">
         </div>
         <div class="conpassword">
             <input type="text" v-model="conpassword" placeholder="请再次输入密码">
         </div>
         <div class="code">
             <input type="text" v-model="code" placeholder="验证码">
             <div class="code1"></div>
         </div>
         <div class="codephone">
             <input type="text" v-model="codephone" placeholder="请输入短信验证码">
             <div class="dx">获取验证码</div>
         </div>
         <div class="btn"><button @click='register'>注册</button></div>
     </div>
   </div>
</template>

<script>
import axios from 'axios'

export default {
//   name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      phone: '',
      nickname: '',
      password: '',
      conpassword: '',
      code: '',
      codephone: ''
    }
  },
  methods: {
    register: function () {
      var timestep = this.GLOBAL.gettime()
      console.log(timestep)
      console.log(this.phone)
      var phone = this.phone
      var password = this.password
      var nickname = this.nickname
      var url = this.GLOBAL.url
      var random = this.GLOBAL.getRadom()
      var arr = {password: password, username: phone, name: nickname, random: random, timestep: timestep}
      var signure = this.GLOBAL.createsignure(arr)
      var self = this
      console.log(signure)
      axios.get(url + '/is_register.php?username=' + this.phone + '&timestep=' + timestep).then(function (response) {
        // console.log(response)
        if (!response.data.status) {
          axios.get(url + '/register.php?username=' + phone + '&password=' + password + '&name=' + nickname + '&signure=' + signure + '&random=' + random + '&timestep=' + timestep).then(function (response) {
            console.log(response)
            // data = ('(' + response + ')')
            if (response.data.message == null) {
              self.$router.push({path: '/'})
            }
          })
        }
      })
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
.btn{
    margin-top:30px;
}
button{
    /* margin-top:30px; */
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
