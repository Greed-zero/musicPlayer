<template>
  <div class="table">
    <table>
      <tr>
        <th></th>
        <th>操作</th>
        <th>标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时间</th>
      </tr>
      <tr v-for="(song,index) in this.songs" :key="index"  :style="handleColor(index)">
        <td style="width: 60px;" class="left" >{{index+1}}</td>
        <td style="width: 40px;" >喜欢</td>
        <td style="width: 400px;" :title="song.name">{{song.name}}</td>
        <td style="width: 250px;" class="singers" >
          <div v-for="(ar,index) in song.ar" :key="index"  class="singer">{{ar.name}}</div>
          </td>
        <td style="width: 250px;" :title="song.al.name">{{handelMessage(song.al.name)}}</td>
        <td style="width: 100px;" :title="1"></td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      playlist:'',
      songs:'',
    }
  },
  mounted(){
    this.reflash()
  },
  created(){
  },
  beforeUpdate(){
  this.reflash()
  },
  methods:{
    handelMessage(key){
     if (key.length>50) key = key.substring(0, 50)+'...'
     return key
    },
    handleColor(index){
    if(index%2 === 0){
      return{
        background:'#f9f9f9'
      }
    }
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
        // console.log('this.$store.state.songs:',this.$store.state.songs)
      },
      err=>{
        console.log(err.message)
      }
    )
  },
  relodeTable(){
    this.isRelode = false
    this.$nextTick(()=>{
      this.isRelode = true
    })
  }
  },
  
}
</script>

<style  scoped>
table{
  font-size: small;
  table-layout:fixed;
  margin-top: 15px;
  border-collapse:collapse;
}
th{
  text-align: left;
}
td:nth-child(n+4){
  cursor:pointer;
}
td{
  white-space: nowrap;
  -moz-text-overflow: ellipsis;
  text-overflow:ellipsis;
  overflow:hidden;
  text-align: left;
  height: 30px;
  border: 0;
  margin: 0;
  color: rgb(131, 134, 134);
  /* background: ; */
}
td:hover{
  background:#edecec;
}
.left{
  display: flex;
  align-items: center;
  justify-content: center;
}
.singers{
  display: flex;
  /* justify-content: center; */
  align-content: center;
  flex-flow: row;
}
.singer{
  display: flex;
  align-items:center;
}
</style>
