<template>
<div class="main">
  <div class="nav">
    <div>个性推荐</div>
    <div>专属定制</div>
    <div>歌单</div>
    <div>排行榜</div>
    <div>歌手</div>
    <div>最新音乐</div>

  </div>
</div>
</template>

<script>
export default {
  name: "newMusic"
}
</script>

<style scoped>
.main{
  display: flex;
  flex-flow: column;
}
.nav{
  display: flex;
  flex-flow: row;
  justify-content: left;
  margin-top: 15px;
}
.nav>*{
  margin-left: 30px;
}
</style>
