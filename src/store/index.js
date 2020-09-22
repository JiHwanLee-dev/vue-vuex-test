import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 상태 vue인스턴스의 데이터 역활. 
  state: {
    list : [
      {
          id : 1,
          passwd : '123',
          name : 'Lee',
          address : 'Seoul',
          src : 'asd'
      },
      {
          id : 2,
          passwd : '456',
          name : 'Kim',
          address : 'Busan',
          src : 'cdf'
      },
      {
          id : 3,
          passwd : '789',
          name : 'Park',
          address : 'Ulsan',
          src : 'qwe'
      }
  ],

  count : 0
  },
  // getters는 computed와 같은 역활을 한다. 중복되는 것을 줄여줌
  getters : {
    allUsersCount : state => {
      return state.list.length
    },
    
    countOfSeoul : state => {
      let count = 0
      state.list.forEach(user => {
        if(user.address == 'Seoul') count++
      
        console.log('count :' , count)
      })

      return count;
    },
    // state를 써줘야 2번째 인자로 getters를 받음
    percentOfSeoul : (state, getters) => {
      let percent = Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
      console.log('countOfSeoul : ', getters.countOfSeoul)
      console.log('allUsersCount : ', getters.allUsersCount)
      console.log('percent : ', percent)
      return percent
    },

    count : (state) => {
      return state.count
    }
  },
  mutations: {
    addUsers: (state, payload) => {
        console.log('mutations_addUsers')
        state.list.push(payload)
    },

    increment : (state) => {
      console.log('mutations_increment')
      state.count ++
    },

    decrement : (state) => {
      state.count--
    }
  },
  actions: {
    // addUsers: (context,payload) => {
    //   context.commit('addUsers') // mutations에 addUsers를 commit함
    // }
  
    addUsers : ({ commit }, payload) => {   // function({commit}) 같음
      commit('addUsers', payload)
    }
  },
  modules: {
    
  }
})
