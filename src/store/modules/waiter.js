import { post } from '@/http/axios'
export default {
  namespaced: true,
  state: {
    waiters: []
  },
  getters: {

  },
  mutations: {
    refreshWaiters(state, waiters) {
      state.waiters = waiters
    }
  },
  actions: {
    async findAllWaiters(context, params) {
      const response = await post('/waiter/query', params)
      context.commit('refreshWaiters', response.data)
    }
  }
}
