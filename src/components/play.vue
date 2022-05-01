<template>
  <div class="player">
    <div>123</div>
    <audio  
    :src="musicsrc" 
    autoplay
    @ended="audioFinished">
    </audio>
    <div class="audiobox"></div>
  </div>
</template>

<script>
export default {
  name: "play",
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
    }
  }

}
</script>

<style scoped>
.player{
  display: flex;
  flex-flow: row;
}
</style>
