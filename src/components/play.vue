<template>
  <div class="player">
    <audio  
    :src="musicsrc" 
    autoplay
    @ended="audioFinished">
    </audio>
    <div class="left">
      <div>
        <div class="musicimg"></div>
        <div class="title">{{this.$store.state.songs[this.$store.state.musciKey].name}}</div>
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
        <div>
      <iconFont :iconClass="iconSize1" :iconHref="'icon-bofang'" class="past"></iconFont>
        </div>
        <div @click="nextmusic()">
      <iconFont :iconClass="{width:'15px',height:'15px'}" :iconHref="'icon-next-fill'" class="next" ></iconFont>
        </div>
        <div>
      <iconFont :iconClass="{width:'25px',height:'25px'}" :iconHref="'icon-geci-copy'" class="text"></iconFont>
        </div>
      </div>
      <div class="slider">11111111</div>
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

      }
    }
  },
  mounted(){
  },
  computed:{
    musicsrc(){
      return this.$store.state.urls[this.$store.state.musciKey].url
    }
  },
  methods:{
    audioFinished(){
      this.$store.commit('autoMusciKey')
    },
    pastmusic(){
      let a = this.$store.state.musciKey - 1
      if(this.$store.state.musciKey>0) {
      this.$store.commit('handleMusciKey',a)
      console.log('this.$store.state.musciKey:',this.$store.state.musciKey)
      }
    },
    nextmusic(){
      let a = this.$store.state.musciKey + 1
      if(this.$store.state.musciKey<this.$store.state.urls.length - 1) {
      this.$store.commit('handleMusciKey',a)
      console.log('this.$store.state.musciKey:',this.$store.state.musciKey)
      }
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
  left:45%;
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
</style>
