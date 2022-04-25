<template>
  <div class="highquality">
      <div class="top">
        <div class="top-left" >精品歌单</div>
        <div class="top-right"  >{{typename}}</div>
      </div>
      <div class="list">
        <div class="items">
          <div class="item" v-for="(item,index) in playLists" :key="index">
            <div class="image-wrap">
               <img  :src="item.coverImgUrl" @click="gotoListOfMusic(`${item.id}`)">
               <div class="musicTitle">
                 <div class="title">{{item.name}}</div>
                 <div class="user">by   userid</div>
               </div>
            </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      typename:'全部歌单',
      playLists:[]
    }
  },
  created(){
    
  },
  mounted(){
    console.log(this.$route)
    this.typename =this.$route.query.typename
    this.reflashList()
  },
  methods:{
    reflashList(){
            axios({
        url:'http://localhost:3000/top/playlist/highquality',
        method:'get',
        params:{
           cat: this.typename
        }
    }).then(
            res => {
               this.playLists = res.data.playlists
               console.log(res.data.playlists)
            },
            err => console.log(err.message)
        )
        },
        gotoListOfMusic(listId){
          this.$router.push(
            {
              path:"/listOfMusic",
              query:{
                listId
              }
              })
        }
  }
}
</script>

<style  scoped>
.highquality{
  position: relative;
  margin-top: 50px;
  margin-left: 20px;
  min-width: 1200px;
}
.top{
  display: flex;
  justify-content: space-between;
}
.top-left{
  font-weight: bolder;
  font-size: large;
  
}
.top-right{
border: 1px solid rgb(172, 167, 167);
border-radius: 10px;
width: fit-content;
font-size: small;
width: 100px;
display: flex;
justify-content: center;
align-items: center;
}
img{
  width: 150px;
  border-radius: 3px;
}
.list{
  margin-left: -40px;
  max-width: 1300px;
}
.items{
  flex-flow: row wrap;
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
  justify-content: space-between
}
.items::after{
  content: ""; 
  width:422px;
}
.item{
  flex: 27%;
  margin-left: 20px;
}
.image-wrap{
  display: flex;
  flex: row;
  margin-bottom: 20px;
}
.title{
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  /* font-size: small; */
  
}
.musicTitle{
  margin-top: 30px;
  margin-left: 5px;
}
.user{
  font-size: small;
  color: rgb(172, 167, 167);
}
</style>