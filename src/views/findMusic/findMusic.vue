<template>
<div class="main">
  <div class="nav">
    <router-link to="/findMusic/recommend">个性推荐</router-link>
    <router-link to="/findMusic/customize">专属定制</router-link>
    <router-link to="/findMusic/list">歌单</router-link>
    <router-link to="/findMusic/rank">排行榜</router-link>
    <router-link to="/findMusic/singer">歌手</router-link>
    <router-link to="/findMusic/newMusic">最新音乐</router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "findMusic"
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
  margin-left: 15px;
}
.nav>*{
  margin-left: 15px;
  margin-right: 15px;
  text-decoration:blink;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-link-active{
  font-weight:bold;
  font-size: large;
  border-bottom: red 4px solid;
  display: block;
}
</style>
