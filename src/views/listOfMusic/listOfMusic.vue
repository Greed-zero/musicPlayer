<template>
  <div class="list">
    <div class="top">
      <div class="left">
        <img :src="playlist.coverImgUrl" >
      </div>
      <div class="right">
        <div class="title">
          <div class="Tleft">{{type}}</div>
          <div class="Tright">{{playlist.name}}</div>
        </div>
        <div class="creater">who</div>
        <div class="but">
          <div class="but1">播放全部</div>
          <div class="but2">收藏({{res(playlist.subscribedCount)}})</div>
          <div class="but3">分享({{res(playlist.shareCount)}})</div>
          <div class="but4">下载全部</div>
        </div>
        <div class="tags" >
          <div class="tagTitle" >标签 : </div>
          <div class="tagBody" v-for="(tag,key) in playlist.tags " :key="key"> {{tag}}{{key === playlist.tags.length-1?" ":"/ "}}</div>
        </div>
        <div class="number">歌曲 : {{playlist.trackCount}}  播放 : {{res(playlist.playCount)}}</div>
        <div class=description>简介 : {{isShow ? playlist.description : Description()}}</div>
        <div class="bu" @click="handleDescription()">展开</div>
      </div>
    </div>
  <div class="nav">
    <router-link :to="{path:'/listOfMusic/muscis'}"   :playlist ='playlist' >歌曲列表</router-link>
    <router-link to="/listOfMusic/commentOfmusic">评论()</router-link>
    <router-link to="/listOfMusic/subscribed">收藏者</router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      listId:'',   //歌单的id
      playlist:'', //存放全部信息
      type:'',     //精品歌单 与 歌单
      title:'', //小标题
      isShow:false,//控制描述的展开与收起
    }
  },
  methods:{
    handleDescription(){
      this.isShow = !this.isShow
    },
      Description(){
        var a = `\n`
        if(this.playlist.description){
        var c = this.playlist.description.indexOf(a)
        var l = this.playlist.description.substring(0, c)+'...';
        return l
        }else return ''
  },
   reflash(){
    let playlist =  this.$store.state.playlist
    let res = []
    for(let music of playlist.trackIds){
      res.push(music.id)
    }
    res = res.join(",")
    console.log(res)
    axios({
      url:'http://localhost:3000/song/detail',
      method:'get',
      params:{
        ids:res
      }
    }).then(
      res =>{
        this.$store.commit('setSongs',res.data.songs);
        this.songs = res.data.songs
        console.log(res.data.songs)
        console.log('this.state.songs:',this.state.songs)
      },
      err=>{
        console.log(err.message)
      }
    )
  }
  },
  computed:{
    res(){
      return function(key){
        if (key>10000){
          return Math.floor(key/10000) +'万'
        }else return  key
      }
    },
  
   
  },
  created(){
    this.listId = this.$store.state.listId
    this.type = this.$store.state.tag
    console.log("this.$store.state.tag:",this.$store.state.tag)
    axios({
      method:'get',
      url:'http://localhost:3000/playlist/detail',
      params:{
        id:this.listId
      }
    }).then(
      res => {
        console.log(res.data)
        this.playlist = res.data.playlist
        console.log('this.playlist:',this.playlist)
        this.$store.commit('setPlaylist', res.data.playlist)
      },
      err =>{
        console.log(err.message)
      }
    )
  },
  mounted(){
    
  },

}
</script>

<style   scoped>
.list{
  display: flex;
  flex-flow: column;
}
.top{
  display: flex;
  flex-flow: row;
}
.left>img{
    width: 200px;
    border-radius: 5px;
    margin-left: 10px;
    margin-top: 10px;
  }
.right{
width: 1000px;
  }
.title{
  display: flex;
  flex-flow: row;
  margin-top: 10px;
}
.Tleft{
  color: red;
  font-size: small;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px red solid;
  width: 60px;
  border-radius: 2px;
  margin-left: 20px;
  margin-right: 10px;
  margin-top: 6px;
  height: 20px;
}
.Tright{
  font-weight: bold;
  font-size: x-large;
}
.creater{
  margin-left: 20px;
  margin-top: 10px;
}
.but{
  display: flex;
  flex-flow: row;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 18px;
}
.but>*{
  margin-left: 10px;
  height: 30px;
  border: 1px solid rgb(172, 167, 167);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 120px;
  margin-top: 10px;
  cursor: pointer;
}
.but1{
  color:white;
  background-color: #eb4141;
  border:0 
}
.but1:hover{
  background-color: #e03e3e;
}
.tags ,.number,.description,.descript{
  display: flex;
  flex-flow: row;
  margin-left: 20px;
  margin-top: 10px;
  font-size: small;
  color: rgb(125, 121, 121);
}
.description{
  white-space: pre-wrap;
}
.bu{
  position: absolute;
  top: 195px;
  font-size: small;
  right: 0;
  cursor: pointer;
}
.nav{
  display: flex;
  flex-flow: row;
  margin-top: 30px;
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
</style>

