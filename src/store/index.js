// import axios from 'axios'
import Vue from 'vue'
Vue.use(Vuex)
import Vuex from 'vuex'
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
}

const state = {
    userId:'478150477',
    nickname:"钟表不代表时间",
    avatarUrl:"http://p4.music.126.net/WITdh08QoItXO6DDaNdCsQ==/18636722092710063.jpg",
    musci:[],
}

const store = new Vuex.Store({
  actions,
  mutations,
  state,  
})

export default store