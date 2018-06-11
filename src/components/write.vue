<template>
  <div id="write">
    <div class="main">
      <div class="top">
        <div class="title">
          <span>文章标题</span>
          <input type="text" placeholder="输入文章标题">

        </div>
        <div class="sort">
          <span>所属分类</span>
          <select name="sort" id="">
            <option value="经验分享">经验分享</option>
            <option value="入门学习">入门学习</option>
            <option value="成果分享">成果分享</option>
          </select>

        </div>
        <div class="sssort">
          <span>技术分类</span>
          <select name="" id="">
            <option value="html">html</option>
            <option value="html">pho</option>
            <option value="html">java</option>
          </select>
        </div>
      </div>
      <div class="text">
        <textarea name="" id="" cols="150" rows="10" v-model="text"></textarea>

      </div>
      <div class="fb">
        <button @click='addarticle'>发布</button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'write',
  data () {
    return {
      text: '',
      userId: ''
    }
  },
  created: function () {
    this.userId = localStorage.getItem('userId')
  },
  methods: {
    addarticle: function () {
      var userId = this.userId
      var random = this.GLOBAL.getRadom()
      var url = this.GLOBAL.url
      var timestep = this.GLOBAL.gettime()
      var content = this.text
      var data = {
        userId: userId,
        event: 'addArticle',
        kind: '经验分享',
        random: random,
        timestep: timestep
      }
      var signure = this.GLOBAL.createsignure(data)
      console.log(signure)
      axios.get(url + '/article.php?userId=' + userId + '&content=' + content + '&event=addArticle&kind="经验分享"&random=' + random + '&timestep=' + timestep + '&signure=' + signure).then(function (response) {
        console.log(response)
      })
    }

  }
}
</script>

<style>
#write{
  background:#fff;
  height:100%;
}
.top{
  width:1200px;
  height:100px;
  padding-top:10px;
  margin:0 auto;
}
.top div{
  display:inline-block;
}
.title{
  width:600px;
}
input,select{
  height:40px;
  line-height:40px;
  border-radius: 10px;
  border:1px solid #ccc;
  outline: none;
  text-indent:20px;

}
input{
  width:400px;
}
select{
  width:200px;
}
.fb{
 width:1200px;
 margin:0 auto;
 padding-bottom:500px;
}
.fb button{
  border:none;
  outline:none;
  background: #ff6666;
  color:#fff;
  width:100px;
  height:50px;
  line-height:50px;
  border-radius: 10px;
  margin-top:40px;

}

</style>
