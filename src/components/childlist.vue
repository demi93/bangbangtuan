<template>
  <div class="childlist">
      <div class="left">
        <div class="top">
          <div class="author">{{author}}</div>
          <div class="time">{{time}}</div>
          <div class="from">{{author}}</div>

        </div>
        <div class="bottom">
           {{title}}
        </div>

      </div>
      <div class="right">
          <div class="up">
              <img src="" alt="">
              <span>{{up}}</span>
          </div>
          <div class="down">
              <img src="" alt="">
              <span>{{down}}</span>
          </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'childlist',
  data () {
    return {
      msg: '1222',
      title: '',
      author: '',
      time: '',
      from: '',
      up: '',
      down: ''

    }
  }
}
</script>

<style>
.childlist{
    width:1200px;
    height:60px;
    /* margin-top:20px; */
    padding-top:20px;
    margin:0 auto;

}
.left{
    width:50%;
    float:left;
}
.right{
    width:50%;
    float:right;
    text-align:right;
}
.top{
    width:600px;;
    height:20px;
    font-size:12px;
}
.top div{
    float:left;
    width:10%;
}
.bottom{
    width:600px;
    height:40px;
    text-align:left;
}
.up,.down{
    display:inline-block;
    line-height:60px;
    text-align:right;
}
</style>
