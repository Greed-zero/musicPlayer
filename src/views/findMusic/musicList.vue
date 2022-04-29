<template>
    <div class="musicList">
       <div class="box" v-show="`${this.imgUrl}`">
           <div class="top" 
       @click="gotoList" 
       :style="{backgroundImage:'url(' + imgUrl + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: '100%' ,}">
       </div>
       </div>
       <img :src="imgUrl"  @click="gotoList"  v-show="`${this.imgUrl}`">
       <div class="title"  @click="gotoList"  v-show="`${this.imgUrl}`">
           <div class="title1">精品歌单</div>
           <div class="title2">{{title}}</div>
       </div>
       <div :class="[isYes? 'list1' : 'list2']">
           <div class="nav" @click="handlelist">{{typename}} ></div>
           <div class="select" v-show="isShow">
               <div class="select-top" >全部歌单</div>
               <el-divider></el-divider>
               <div class="choose" v-for="(category,key,index) in categories" :key="key">
                   <div class="chooseTop">{{category}}</div>
                   <div class="subs"><div   v-for="(sub,k) in getsubs(index) " :key="k" class="chooseItem" @click="handleTypename(`${sub.name}`)" >{{sub.name}}</div></div>
               </div>
           </div>
           <div class="bottom">
               我是歌单
           </div>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            imgUrl:'',
            title:'',
            musiclist:[],
            typename:'全部歌单',
            typenames:[],
            isShow:false,
            categories:[],
            subs:[],
            isYes:true
        }
    },
    created(){
        this.reflashList()
         axios({
        url:'http://localhost:3000/playlist/catlist',
        method:'get',
        params:{
            
        }
    }).then(
            res => {
                console.log(res.data)
                this.categories=res.data.categories
                this.subs = res.data.sub
                },
            err => console.log(err.message)
        )
    },
    methods:{
        gotoList(){
            this.$router.push({
                path:'/findMusic/list/highquality',
            })
            this.$store.commit('setTypename', this.typename)
        },
        handlelist(){
            this.isShow = !this.isShow
        },
        handleTypename(typename){
            this.typename = typename
            this.reflashList()
        },
        reflashList(){
            axios({
        url:'http://localhost:3000/top/playlist/highquality',
        method:'get',
        params:{
           cat: this.typename
        }
    }).then(
            res => {
                if( res.data.playlists.length !== 0){
                    this.imgUrl = res.data.playlists[0].coverImgUrl
                    this.title = res.data.playlists[0].name
                    this.isYes = true
                }
                else this.imgUrl='',this.isYes = false
                
                },
            err => console.log(err.message)
        )
        }
        
    },
    computed:{
        getsubs(){
             return function(index){
                 if(this.subs){
                 return this.subs.filter(
                item => item.category ===index
            )
             }
             else return []
        }
             }
    }
    
}
</script>
<style scoped>
.musicList{
    position: relative;
    margin-top: 50px;
    display: flex;
    min-width: 1200px;
    height: auto;
    min-height: 500px;
    background-color: white;
    margin-left: 60px;
}
.box{
    overflow: hidden;
    width: 1000px;
    height: 180px;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 20px;

}
.top{
    width: 1000px;
    background-image: url(`${this.imgUrl}`);
    height: 180px;
    border-radius: 5px;
    cursor:pointer;
}
.top,.top::before{
    position: absolute;
    left: 20px;
    top: 0px;
    right: 20px;
    bottom: 0;
    border-radius: 5px;
    filter: blur(10px);
    border: 1px black solid;
}
.top::before{
    content: " ";
    background-color: rgba(0, 0, 0, 0.25);
}
img{
    width: 150px;
    height: 150px;
    border-radius: 5px;
    margin-top: 15px;
    margin-left:45px;
    z-index: 1;
    position:absolute;
    cursor:pointer;
}
.title1{
    color: rgb(221, 151, 22);
    position:absolute;
    margin-top: 30px;
    margin-left: -800px;
    border: 1px solid rgb(221, 151, 22);
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor:pointer;
}
.title2{
    position:absolute;
    margin-top: 80px;
    margin-left: -800px;
    color: white;
    cursor:pointer;
}
.list1{
    position:absolute;
    margin-top: 200px;
    margin-left: 20px;
    display: flex;
    flex:column;
}
.list2{
    position:absolute;
    margin-top: 0px;
    margin-left: 20px;
    display: flex;
    flex:column;
}
.nav{
    border: 1px solid rgb(172, 167, 167);
    border-radius: 20px;
    width: 110px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
}
.select{
    width: 800px;
    height: 400px;
    box-shadow: inset 0 0 2px #CCC;
    position:absolute;
    background-color: white;
    z-index: 1;
    margin-top: 40px;
    
}
.select-top{
    display: flex;
    align-items: center;
    margin-left: 10px;
    height: 40px;
    margin-bottom: 0;
    position: absolute;
}
.choose{
    display: flex;
    flex: row  wrap;
    max-width: 600px;
    word-break: normal;
}
.bottom{
    position: absolute;
    margin-top: 40px;
    margin-left: 10px;
    z-index: 0;
}
.el-divider{
    margin-top: 40px;
}
.chooseTop{
    min-width: 60px;
    margin-left: 20px;
    display: flex;
    flex: wrap;
    height: auto;
}
.chooseItem{
    font-size: small;
    min-width: 40px;
    max-width: 70px;
    margin-left: 10px;
    cursor:pointer;
}
.subs{
    display: flex;
    flex-flow: wrap row ;
    max-width: 100%;
    flex: 1 1 20%;
}
</style>