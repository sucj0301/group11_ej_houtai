import { get } from '@/http/axios'
export default {
  namespaced: true,
  state: {
    customers: []
  },
  mutations: {
    refreshCustomers(state, customers) {
      state.customers = customers
    }
  },
  actions: {
    async findAllCustomers(context) {
      const response = await get('/customer/findAll')
      context.commit('refreshCustomers', response.data)
    }
  }
}
