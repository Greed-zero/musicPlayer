<template>
  <div class="main">
    <div class="nav">
      <router-link to="/findMusic/recommend">个性推荐</router-link>
      <router-link to="/findMusic/customize">专属定制</router-link>
      <div class="block">sddddddddddddddddddddddddddddddddddddddddddddsssssssssssssddddd</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "videos"
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
