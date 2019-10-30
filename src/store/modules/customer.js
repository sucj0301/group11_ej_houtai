import request from '@/utils/request'
export default {
  namespaced: true,
  state: {
    customers: []
  },
  mutations: {
    // 需要接受一个参数，这个参数就是customers
    refreshCustomers(state, customers) {
      console.log('state->', state)
      state.customers = customers
    }
  },
  actions: {
    // async findAllCustomers({commit,dispatch,getters,state}){
    async findAllCustomers(context) {
      console.log('context->', context)
      // 1. 查询所有顾客信息
      const response = await request.get('http://39.96.21.48:6677/customer/findAll')
      // alert(JSON.stringify(response));
      // 2. 将顾客信息设置到state.customers中
      context.commit('refreshCustomers', response.data)
    }
  }
}
