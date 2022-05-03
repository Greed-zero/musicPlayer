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
      <tr 
      v-for="(song,index) in this.$store.state.songlist" 
      :key="index"  
      :style="handleColor(index)"
      >
        <td style="width: 60px;" class="left" >{{handleIndex(index+1)}}</td>
        <td style="width: 40px;" >喜欢</td>
        <td style="width: 400px;" :title="song.name">{{song.name}}</td>
        <td style="width: 250px;" class="singers" >
          <div v-for="(ar,index) in song.ar" :key="index"  class="singer">{{ar.name}}</div>
          </td>
        <td style="width: 250px;" :title="song.al.name">{{handelMessage(song.al.name)}}</td>
        <td style="width: 100px;" :title="1">{{handleTime(song.dt)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data(){
    return{
      playlist:'',
      // active:false,//控制表格的hover
    }
  },
  mounted(){
  },
  beforeCreate(){
  
  },
  created(){
  },
  beforeUpdate(){
  },
  beforeDestroy(){
  },
  methods:{
    handelMessage(key){
     if (key.length>50) key = key.substring(0, 50)+'...'
     return key
    },
    handleColor(index){
    if(index%2 === 0){
      // if(!this.active){
        return{
        background:'#f9f9f9'
      }
      // }else return{
      //    background:'#edecec'
      // }
    }
    },
    handleTime(dt){
      dt = Math.floor(dt/1000)
      let min = Math.floor(dt/60) 
      if(min<10) min = '0'+ min
      let sec = dt%60
      if(sec<10) sec = '0'+ sec
      let res = min+':'+sec
      return res
    },
    relodeTable(){
      this.isRelode = false
      this.$nextTick(()=>{
        this.isRelode = true
      })
    },
    handleIndex(index){
      if(index<10){
        index='0'+index
      }
      return index
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
tr:nth-child(n+2):hover{
  background:#edecec!important;
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
