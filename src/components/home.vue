<template>
<div class="home">
<div class="left">
  <div>&ensp;发现音乐</div>
  <div>&ensp;播客</div>
  <div>&ensp;视频</div>
  <div>&ensp;关注</div>
  <div>&ensp;直播</div>
  <div>&ensp;我的FM</div>
  <div>&ensp;我的音乐</div>
  <div>&ensp;本地与下载</div>
  <div>&ensp;最近播放</div>
  <div>&ensp;我的音乐云盘</div>
  <div>&ensp;我的播客</div>
  <div>&ensp;我的收藏</div>
</div>
<div class="right">
  <div>内容</div>
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
  height: auto;
  border-right: #5b5858 1px solid;
  width: 160px;
}
.left>*{
  height: 40px;
  width: 130px;
  padding: 0;
  margin-left: 5px;
  border-left: 5px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-top: 10px;
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
