<template>
<div class="home">
<div class="left" v-if="this.$store.state.isShow">
  <router-link to="/findMusic">&ensp;发现音乐</router-link>
  <router-link to="/dj">&ensp;播客</router-link>
  <router-link to="/videos">&ensp;视频</router-link>
 <router-link to="/attention">&ensp;关注</router-link>
<!--  <router-link>&ensp;直播</router-link>-->
<!--  <router-link>&ensp;私人FM</router-link>-->
<!--  <router-link>&ensp;我的音乐</router-link>-->
<!--  <router-link>&ensp;本地与下载</router-link>-->
<!--  <router-link>&ensp;最近播放</router-link>-->
<!--  <router-link>&ensp;我的音乐云盘</router-link>-->
<!--  <router-link>&ensp;我的播客</router-link>-->
<!--  <router-link>&ensp;我的收藏</router-link>-->
</div>
<div class="right" >
  <router-view></router-view>
</div>
</div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>
.left{
  display: flex;
  flex-flow: column;
  border-right: #d3c4c4 1px solid;
  width: 180px;
  overflow: scroll;
  float: left;
  margin-top: 0;
  min-width: 180px;
  position:fixed;
}
.right{
  overflow: scroll;
  position:relative;
  left: 200px;
}
.left>*{
  height: 40px;
  width: 170px;
  padding: 0;
  border-left: 5px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-top: 10px;
  text-decoration:blink;
  color: black;
}
.router-link-active{
  background-color: #f5f5f6;
  font-weight:bold;
}
.left>*:hover{
background-color: #f5f5f6;
}
*{
  caret-color: transparent;
}
.home{
  display: flex;
  overflow:hidden;

}
</style>
