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
                 <div class="title" @click="gotoListOfMusic(`${item.id}`)">{{item.name}}</div>
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
    this.typename =this.$store.state.typename
    this.renewList()
  },
  methods:{
    renewList(){
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
      this.$store.commit('setListId', listId)
          console.log("this.$store.state.listId:",this.$store.state.listId)
          this.$store.commit('setTag', '精品歌单')
          console.log("this.$store.state.tag:",this.$store.state.tag)
      this.$router.push(
        {
          path:"/listOfMusic",
          })
          
    },
    reflash(){
    let playlist =  this.$store.state.playlist
    let res = []
    for(let music of playlist.trackIds){
      res.push(music.id)
    }
    res = res.join(",")
    // console.log(res)
    axios({
      url:'http://localhost:3000/song/detail',
      method:'get',
      params:{
        ids:res
      }
    }).then(
      res =>{
        this.$store.commit('setSongs',res.data.songs)
        this.songs = this.$store.state.songs
        // console.log('this.songs:',this.songs)
        console.log('this.$store.state.songs:',this.$store.state.songs)
      },
      err=>{
        console.log(err.message)
      }
    )
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
  cursor: pointer;
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
  cursor: pointer;
}
.musicTitle{
  margin-top: 30px;
  margin-left: 5px;
  
}
.user{
  font-size: small;
  color: rgb(172, 167, 167);
  cursor: pointer;
}
</style>
