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
  <router-view>
    <el-skeleton />
  </router-view>
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
  height: 30px;
  justify-content: left;
  width: 100%;
  position: fixed;
  z-index: 99;
}
.nav>*{
  margin-left: 20px;
  margin-right: 20px;
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
  justify-content: center;
  align-items: center;
}
.block{
  opacity: 0;
}
router-view{
  width: 100%;
}
</style>
