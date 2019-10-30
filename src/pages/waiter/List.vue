<template>
  <div class="waiter">
    <h2>员工管理</h2>
    <!-- 表格 -->
    <el-table :data="waiters.list">
      <el-table-column label="姓名" prop="realname" />
      <el-table-column label="手机号" prop="telephone" />
      <el-table-column label="卡号" prop="idcard" />
      <el-table-column label="状态" prop="status" />
      <el-table-column label="操作">
        <template #default="record">
          <el-button type="success" icon="el-icon-document" circle @click="todetail(record.row)" />
        </template>
      </el-table-column>
    </el-table>
    <!-- /表格 -->
    <!-- 分页 -->
    <el-pagination
      layout="prev, pager, next"
      :currnet-page="waiters.page+1"
      :page-size="waiters.pageSize"
      :total="waiters.total"
      @current-change="pageChangeHandler"
    />
    <!-- /分页 -->
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      params: {
        page: 0,
        pageSize: 5
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
    pageChangeHandler(page) {
      this.params.page = page - 1
      this.findAllWaiters(this.params)
    },
    todetail(waiter) {
      this.$router.push({
        path: '/Details',
        query: { waiter }
      })
    }
  }
}
</script>
<style scoped>

</style>
