import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex);


const state =  window.sessionStorage.getItem('state')?JSON.parse(window.sessionStorage.getItem('state')):{
   user:{
      name:''
   }
}

//唯一取值的方法,计算属性
const getters ={
  getUser(state){
    return state.user;
  }
}

//唯一可以修改state值得方法,同步阻塞
const mutations = {
    updateUser(state,user){
      state.user = user;
    }
}


const actions ={
  asyncUpdateUser(context,user){
    context.commit('updateUser',user);
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store;
