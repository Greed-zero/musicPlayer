<template>
  <div>我是歌单的歌曲列表</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      listId:''
    }
  },
  methods:{

  },
  mounted(){
    this.listId = this.$route.query.listId
    axios({
      method:'get',
      url:'http://localhost:3000/playlist/detail',
      params:{
        id:this.listId
      }
    }).then(
      res => {
        console.log(res.data)
      },
      err =>{
        console.log(err.message)
      }
    )
  }
}
</script>

<style>

</style>