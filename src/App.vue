<template>
  <div id="app">
    <el-container>
    <el-header>
      <top></top>
    </el-header>
    <el-main>
      <home></home>
    </el-main>
    <div class="bottom"><el-footer>
      <play ></play>
    </el-footer></div>
    </el-container>
  </div>
</template>

<script>
import home from "@/components/home";
import play from "@/components/play";
import top from "@/components/top";
export default {
  name: 'App',
  components: {
    home,
    top,
    play,
   
  },
  mounted(){
  }
}
</script>

<style scoped>
.el-header{
  background-color: #eb4141;
  color: #333;
  line-height: 60px;
  margin: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
}
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    display: flex;
    height: 4vh;
    width: 100%;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    min-height: 72px;
  }
.el-main{
  background-color: #ffffff;
  height: 100%;
  position: relative;
  top: 0;
  margin-top: 50px;
  width: 100%;
  left: 0;
  bottom: 60px;
  overflow: scroll;
}
.el-container{
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
#app{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.bottom{
  height: 60px;
}
</style>
