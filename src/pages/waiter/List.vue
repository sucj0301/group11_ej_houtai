<template>
  <div class="waiter">
    <h2 class="title">员工管理</h2>
    <!-- 表格 -->
    <el-table :data="waiters" class="table">
      <el-table-column label="员工编号" prop="waiter.id" />
      <el-table-column label="姓名" prop="waiter.realname" />
      <el-table-column label="类型" prop="waiter.type" />
      <el-table-column label="性别" prop="waiter.gender" />
      <el-table-column label="手机号" prop="waiter.telephone" />
      <el-table-column label="身份证" prop="waiter.idCard" />
      <el-table-column label="授权" prop="waiter.enabled" />
      <el-table-column label="状态" prop="waiter.status" />
      <el-table-column label="操作">
        <template #default="record">
          <el-button type="success" icon="el-icon-document" circle @click="todetail(record.row)" />
        </template>
      </el-table-column>
    </el-table>
    <!-- /表格 -->
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      params: {
        customerId: '',
        waiterId: ''
      }
    }
  },
  created() {
    this.findAllWaiters(this.params)
  },
  computed: {
    ...mapState('waiter', ['waiters'])
  },
  methods: {
    ...mapActions('waiter', ['findAllWaiters']),
    todetail(waiter) {
      this.$router.push({
        path: '/waiter/Details',
        query: { waiter }
      })
    }
  }
}
</script>
<style scoped>
.title{
  margin: 0px;
  padding: 20px;
  height: 80px;
  box-shadow:0px 0px 10px #ededed;
}
.table{
  margin: 10px 20px;
}
</style>
