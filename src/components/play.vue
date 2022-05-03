<template>
  <div class="player">
    <audio  
    ref="audio"
    :src="musicsrc" 
    autoplay
    @ended="audioFinished"
    @timeupdate="updateTime">
    </audio>
    <div class="left">
        <div class="musicimg">
          <img :src="this.$store.state.songs[this.$store.state.musicKey].al.picUrl" alt="">
        </div>
        <div class="title">
          <div title1>
            <div>{{this.$store.state.songs[this.$store.state.musicKey].name}}</div>
             <iconFont :iconClass="iconSize1" :iconHref="'icon-aixin'" class="love"></iconFont>
            </div>
          <div  class="title2">{{this.$store.state.songs[this.$store.state.musicKey].ar[0].name}}</div>
        </div>
      </div>
    <div class="audiobox">
      <div class="top">
        <div>
      <iconFont :iconClass="{width:'15px',height:'15px'}" :iconHref="'icon-shunxubofang'" class="play"></iconFont>
        </div>
        <div  @click="pastmusic()">
      <iconFont :iconClass="iconSize1" :iconHref="'icon-shangyishou'" class="past"></iconFont>
        </div>
        <div @click="play()">
      <iconFont :iconClass="{width:'15px',height:'15px'}" :iconHref="icon" class="ok" ></iconFont>
        </div>
        <div @click="nextmusic()">
      <iconFont :iconClass="{width:'15px',height:'15px'}" :iconHref="'icon-next-fill'" class="next" ></iconFont>
        </div>
        <div>
      <iconFont :iconClass="{width:'25px',height:'25px'}" :iconHref="'icon-geci-copy'" class="text"></iconFont>
        </div>
      </div>
      <div class="slider"
      @mousedown="isDraging = false"
        @mouseup="isDraging = true">
        <div class="slider-left">{{handleTime(currentTime)}}</div>
        <el-slider 
        v-model="playProcess" 
        class="progress" 
        :show-tooltip="false"
        :max="1000"
        @change="setProsess"
         ></el-slider>
          <!-- <el-progress 
          :percentage="percentage" 
          class="progress"
          :show-text='false'
          ></el-progress> -->
        <div class="slider-left">{{handleTime(duration)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import iconFont from './iconFont'
export default {
  components:{iconFont},
  name: "play",
  data(){
    return{
      iconSize1:{
        width:'20px',
        height:'20px',
      }, 
      iconSize2:{
        width:'30px',
        height:'30px',
      },
      music:{

      },
      
      isPlay:true,
      currentTime:'',
      duration:'',
      playProcess:0,//控制进度条
      isDraging:'true'//控制滑动条是否自动控制
    }
  },
  mounted(){
      console.log('this.$store.state.musicKey:',this.$store.state.musicKey)
      console.log('this.$store.state.urls[this.$store.state.musicKey]:',this.$store.state.urls[this.$store.state.musicKey])
  },
  computed:{
    // ...mapState(['musicKey'])
    musicsrc(){
      return this.$store.state.urls[this.$store.state.musicKey]
    },
    icon(){
      if(!this.isPlay) return 'icon-bofang'
      else return 'icon-icon-zanting'
    },
    // percentage(){
    //   // console.log(Math.round(100*this.currentTime/this.duration))
    //   return Math.round(100*this.currentTime/this.duration)||0
    // }
  },
  watch:{
    musicsrc(){
      return this.$store.state.urls[this.$store.state.musicKey]
    }
  },
  methods:{
    audioFinished(){
      this.$store.commit('automusicKey')
    },
    pastmusic(){
      let a = this.$store.state.musicKey - 1
      if(this.$store.state.musicKey>0) {
      this.$store.commit('handlemusicKey',a)
      console.log('this.$store.state.musicKey:',this.$store.state.musicKey)
      }
    },
    nextmusic(){
      let a = this.$store.state.musicKey + 1
      if(this.$store.state.musicKey<this.$store.state.urls.length - 1) {
      this.$store.commit('handlemusicKey',a)
      console.log('this.$store.state.musicKey:',this.$store.state.musicKey)
      }
    },
    play(){
      const audio = this.$refs.audio
      if(!this.isPlay) audio.play()
      else audio.pause()
      this.isPlay =!this.isPlay
     
    },
    updateTime(e){
        this.currentTime = e.target.currentTime
        this.duration= e.target.duration
        if(this.isDraging){
          this.playProcess = (this.currentTime)/this.duration*1000;
        }
    },
    handleTime(time){
      if(time!=time) return '00:00'
      let min =  Math.floor(time/60)
      if(min<10) min = '0'+min
      let sec = Math.round(time%60)
      if(sec<10) sec = '0'+sec
      return min+":"+sec
    },
    setProsess(value){
      value = Math.round(value)
      this.$refs.audio.currentTime =  value/1000*this.duration;
      console.log(value,this.$refs.audio.currentTime)
      this.$refs.audio.play();
      

    }

  }

}
</script>

<style scoped>
.player{
  display: flex;
  flex-flow: row;
  width: 1500px;
}
.audiobox{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left:40%;
  top: 0;
  flex-flow: column;
  max-height: 60px;
  justify-content: center;
  align-items: center;
}
.top{
  display: flex;
  flex-flow: row;
  max-height: 50px;
  justify-content: center;
  align-items: center;
  z-index: 97;
}
.slider{
  max-height: 10px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-small;
}
.top>*{
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 30px;
  max-height: 35px;
  cursor: pointer;
}
.next{
  margin-top: -2px;
}
.text{
  margin-top: 5px;
}
.play{
  margin-top: -3px;
}
.left{
  display: flex;
  flex-flow: row;
}
iconFount{
  height: 30px;
}
.musicimg>img{
  width: 50px;
  position: absolute;
  top: 5px;
  border: 1px solid rgb(205, 197, 197);
  border-radius: 5px;
}
.title{
  position: relative;
  left: 60px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.title>*{
  max-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.love{
  margin-top: 10px;
  margin-left: 15px;
}
.title1{
  margin-top: 6px;
  margin-left: 10px;
}
.title2{
  flex-flow: row;
}
.slider{
  z-index: 98;
}
.slider>*{
  color: rgb(125, 121, 121);
}
.el-slider{
  color: red;
}

.ok{
  background-color: rgb(241, 240, 240);
  min-width: 35px;
  min-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
  border-radius: 50%;
}
.ok:hover{
  background-color: rgb(236, 234, 234);
}
.progress{
  width: 400px;
  /* height: 5px; */
  margin-left: 8px;
  margin-right: 8px;
}
.el-slider /deep/.el-slider__button{
  width: 8px;
  height: 8px;
  background: rgb(240, 103, 103);
  border: 0;
}
.el-slider /deep/ .el-slider__bar{
background: rgb(240, 103, 103);
z-index: 98;
}
.audiobox{
z-index: 98;
}
*{
  caret-color: transparent;

}
</style>
