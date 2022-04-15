<template>
<div class="recommend">
  <div>
    <el-carousel :interval="4000" type="card" >
      <el-carousel-item v-for="item in banners" :key="item.encodeId">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div>推荐歌单></div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "recommend",
  data(){
    return{
      banners:[],//轮播图图片集
    }
  },
  created() {
    axios.get('http://localhost:3000/banner').then(
        res =>{
          this.banners = res.data.banners
          console.log(this.banners)
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
</style>
