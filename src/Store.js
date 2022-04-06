import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      message : 'Hello from store',
      count:0
  },
  
  getters: {
    // Here we will create a getter
    message(state) {
        return state.message.toUpperCase()
    },
    counter(state){
        return state.count;
    }
  },
  
  mutations: {//sycronous
    // Here we will create Jenny
    increment(state,payload){
        state.count+=payload;
    }
  },
  
  actions: {//asycronous
    // Here we will create Larry
    increment(state,payload){
        state.commit('increment',payload)
    }
  }
});






// import Vue from 'vue'
// import Vuex from 'vuex'
// // import Vuexs from './components/VueX'
// Vue.use(Vuex)

// export default new Vuex.Store({
//     state : {
//         message : 'Hello from Vuex Store',
//         count :0
//     },
//     getters: {

//     },
//     actions: {

//     },
//     mutations: {

//     }
// })