<template>
    <div class="index">
      <!-- index页面 -->
        <Header1></Header1>
        <router-view></router-view>
    </div>
</template>

<script>
import Header1 from './header1'
export default {
  name: 'index',
  components: {
    Header1
  }
}
</script>

<style>

</style>
