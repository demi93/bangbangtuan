<template>
  <div >
    <div class="banner">
      <div><img src="../assets/比可思议banne图.jpg" alt=""></div>
      <div><img src="../assets/简历banne图.jpg"></div>
    </div>
    <!-- <div class="clear"></div> -->
    <div class="childtab">
        <ul>
            <li>
                热门文章
            </li>
            <li>
                推荐
            </li>
            <li>
                php
            </li>
            <li>
                ios
            </li>
            <li>
                python
            </li>
            <li>
                java
            </li>
        </ul>
    </div>
    <div class="listCon">
      <Childlist></Childlist>
      <Childlist></Childlist>

    </div>
  </div>
</template>

<script>
import Childlist from './childlist'
import axios from 'axios'

export default {
  name: 'list',
  data () {
    return {
      msg: '2333'}
  },
  created: function () {
    var url = this.GLOBAL.url
    // var event = 'selectArticleList'
    var kind
    var timestep = this.GLOBAL.gettime()
    var random = this.GLOBAL.getRadom()
    axios.get(url + '/article.php?event=selectArticleList&kind=""&timestep=' + timestep + '&random=' + random + '&kind=' + kind).then(function (response) {
      console.log(response)
    })
  },
  components: {
    Childlist
  }
}
</script>

<style>
.banner{
    position:relative;
    margin:0 auto;
    width:1200px;
    height:500px;
}
.banner div{
    position: absolute;
}
.childtab{
    width:1200px;
    margin:0 auto;
    height:42px;
    /* margin-top:400px; */
    /* float:left; */
    border-bottom:1px solid #999;
}
.childtab ul{
    margin:0 auto;
    list-style: none;
}
.childtab ul li{
    /* display:inline-block;
     */
     float:left;
    width:10%;
    /* float:left; */
}
.clear{
    clear:both;
}
</style>
