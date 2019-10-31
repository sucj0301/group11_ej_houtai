import { get, post } from '@/http/axios'
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
    // 查询
    async findAllWaiters(context, params) {
      const response = await get('/order/query', params)
      context.commit('refreshWaiters', response.data)
    }
  }
}
