<template>
<div class="recommend">
  <div>
    <el-carousel :interval="4000" type="card" >
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <img :src="item.imageUrl" >
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="title1">推荐歌单></div>
  <div class="items">
    <div class="item" v-for="(item,index) in musicList" :key="index">
      <div class="image-wrap">
        <img  :src="item.picUrl">
      </div>
      <p class="musicTitle">{{item.name}}</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "recommend",
  data(){
    return{
      //轮播图图片集
      banners:[],
      //推荐歌单
      musicList:[],
    }
  },
  created() {
    //获取轮播图数据
    axios.get('http://localhost:3000/banner').then(
        res =>{
          this.banners = res.data.banners
        }
    )
    //获取推荐歌单数据
    axios.get('http://localhost:3000/personalized?limit=10').then(
        res => {
          this.musicList = res.data.result
        }
    )
  },

}

</script>

<style scoped>
.recommend{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50px;
  background-color: white;
  width: auto;
  left: 0;
  max-width: 1300px;
}
.el-carousel /deep/ .el-carousel__container {
  height: 160px;
  width: 800px;
  margin-top: 30px;
}
img{
  border-radius: 8px;
  width: 400px;
}
.title1{
  font-weight:bold;
  font-size: large;
  display: flex;
  margin-right: auto;
  margin-left: 30px;
}
.items{
  flex-flow: row wrap;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 30px;
}
.item{
  flex: 17%;
}
.image-wrap>img{
  width: 200px;
  border-radius: 3px;
}
p{
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 200px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
