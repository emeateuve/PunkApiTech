import { createStore } from 'vuex'
import axios from "axios"
export default createStore({
  state: {
    beerList: [],
  },
  getters: {
    getBeerList(state) {
      return state.beerList;
    }
  },
  mutations: {
    changeBeerList: (state, list) => {
      state.beerList = list;
  },
  },
  actions: {
    getBeerList: async ({ commit }, params) => {
      try {
          const response = await axios.get(`https://api.punkapi.com/v2/beers`, {params})
          commit("changeBeerList", response.data);
      } catch (err) { 
      }
  },
  },
  modules: {
  }
})
