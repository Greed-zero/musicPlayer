// import axios from 'axios'
import VuexPersistence from 'vuex-persist'
import Vue from 'vue'
Vue.use(Vuex)
import Vuex from 'vuex'
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
const actions = {
    // getUserId(){
    //     axios.get('http://localhost:3000/user/account').then(
    //         res =>{
    //             // store.commit('setUserId', res.data.profile.userId)
    //             console.log(res)
    //         },
    //         error => {
    //             console.log(error.message)
    //         }
    //     )
    // }
}

const mutations = {
    // setUserId(state,userId){
    //     state.userId = userId
    //     console.log(state.userId)
    // }
    setPlaylist(state,playlist){
        state.playlist = playlist
    },
    setTypename(state,typename){
        state.typename= typename
    },
    setListId(state,listId){
        state.listId= listId
    },
    setTag(state,tag){
        state.tag= tag
    },
    setSongs(state,songs){
        state.songs= songs
    },
    setUrls(state,urls){
        state.urls= urls
    },
    handleIsShow(state){
        state.isShow = !state.isShow
    },
    handlemusicKey(state,key){
        state.musicKey = key
    },
    automusicKey(state){
        if (state.musicKey <state.urls.length - 1) {
			state.musicKey++
		} else {
			state.musicKey = 0
		}
	}
}

const state = {
    userId:'478150477',
    nickname:"钟表不代表时间",
    avatarUrl:"http://p4.music.126.net/WITdh08QoItXO6DDaNdCsQ==/18636722092710063.jpg",
    music:[],
    playlist:[],
    typename:'',
    listId:'',
    Type:'',
    songs:[],
    isShow:true,
    urls:[],
    musicKey:0,
}

const store = new Vuex.Store({
  actions,
  mutations,
  state,  
  plugins: [vuexLocal.plugin]
})

export default store