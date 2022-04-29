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
    }
}

const state = {
    userId:'478150477',
    nickname:"钟表不代表时间",
    avatarUrl:"http://p4.music.126.net/WITdh08QoItXO6DDaNdCsQ==/18636722092710063.jpg",
    musci:[],
    playlist:[],
    typename:'',
    listId:'',
    Type:'',
    songs:[],
}

const store = new Vuex.Store({
  actions,
  mutations,
  state,  
  plugins: [vuexLocal.plugin]
})

export default store