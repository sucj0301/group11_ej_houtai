<template>
  <div class="waiter_details">
    <h2>员工详情</h2>
    <div>
      <el-button type="primary" size="small" @click="backHandler"><i class="el-icon-arrow-left" />返回</el-button>
    </div>
    <div>姓名:{{ waiter.realname }}</div>
    <div>手机号:{{ waiter.telephone }}</div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      waiter: {}
    }
  },
  created() {
    console.log('当前路由', this.$route)
    this.waiter = this.$route.query.waiter
  },
  methods: {
    backHandler() {
      // this.$router.push("/waiter")
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
