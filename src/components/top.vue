<template>
<div class="top">
    <div class="icon">
      <iconFont :iconClass="iconSize" :iconHref="'icon-wangyiyunyinle'" class="logo"></iconFont>
    </div>
  <div class="title">网易云音乐</div>
  <div class="but">
    <i class="el-icon-arrow-left"></i>
    <i class="el-icon-arrow-right"></i>
  </div>
  <div class="box" >
    <i class="el-icon-search"></i>
    <input class="search" prefix-icon="el-icon-search">
  </div>
  <div class="right">
    <img src="@/assets/img/title.png">
    <div>用户昵称</div>
    <i class="el-icon-setting"></i>
    <i class="el-icon-message"></i>
    <el-divider direction="vertical"></el-divider>
    <i class="el-icon-minus"></i>
    <i class="el-icon-full-screen"></i>
    <i class="el-icon-close"></i>
  </div>
</div>
</template>

<script>
import iconFont from './iconFont'
export default {
  name: "top",
   components:{iconFont},
   data() {
    return {
      iconSize:{
        width:'20px',
        height:'20px'
      }
    };
  },
}
</script>

<style scoped>
.top{
  display: flex;
}
.logo{
  border-radius:50%;
  width: 30px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.title{
  color: white;
  margin-left: 5px;
  letter-spacing: 2px;
}
.but{
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-left: 80px;
  color: white;
  justify-content: center;
}
.el-icon-arrow-left,.el-icon-arrow-right{
  margin-right: 10px;
  border-radius:50%;
  width: 30px;
  height: 30px;
  background-color: #e03e3e;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search{
  width: 160px;
  height: 30px;
  caret-color:white;
  font-size: 13px;
  border-radius:25px;
  background-color:#e03e3e ;
  border: 0;
  outline: none;
  padding-left: 30px;
  margin-left: 30px;
}
i{
  color: white;
}
.box{
  position: relative;
}
.box .el-icon-search{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 25px;
  left: 40px;
}
*{
  caret-color: transparent;

}
.right{
  text-align: right;
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right>*{
  margin-left: 30px;
}
el-divider{
  color: #919191;
}

</style>
