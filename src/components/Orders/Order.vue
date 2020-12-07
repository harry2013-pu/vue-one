<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->
      <!-- 由于后端服务器的问题，搜索功能没有反应 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            class="input-with-select"
            v-model="queryInfo.query"
            clearable
            @clear="getOrdersList"
          >
            <el-button slot="append" icon="el-icon-search" @click="getOrdersList2"></el-button>
          </el-input>
        </el-col>
      </el-row>

      <!-- 商品列表区域 -->
      <el-table :data="ordersList" border stripe>
        <el-table-column prop="index" label="#" type="index"></el-table-column>
        <el-table-column prop="order_number" label="订单编号" width="250px"></el-table-column>
        <el-table-column prop="order_price" label="订单价格" width="302px"></el-table-column>
        <el-table-column prop="pay_status" label="是否付款" width="300px">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.pay_status === '1'" size="mini" effect="dark">已付款</el-tag>
            <el-tag
              type="danger"
              v-else-if="scope.row.pay_status === '0'"
              size="mini"
              effect="dark"
            >未付款</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="is_send" label="是否发货" width="300px"></el-table-column>
        <el-table-column prop="create_time" label="下单时间" width="300px">
          <template slot-scope="scope">{{ scope.row.create_time * 1000 | dateFormat }}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <!-- 修改按钮 -->
            <el-tooltip class="item" effect="dark" content="修改订单地址" placement="top">
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="addressDialogVisible = true"
              ></el-button>
            </el-tooltip>
            <!-- 定位按钮 -->
            <el-tooltip class="item" effect="dark" content="物流信息" placement="top">
              <el-button type="success" icon="el-icon-location" size="mini" @click="showProgessBox"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>

    <!-- 修改订单地址对话框 -->
    <el-dialog
      title="修改订单地址"
      :visible.sync="addressDialogVisible"
      width="50%"
      @close="addressDialogClosed"
    >
      <el-form
        :model="addressForm"
        :rules="addressFormRules"
        ref="addressFormRef"
        label-width="100px"
      >
        <el-form-item label="省市区/县:" prop="address1">
          <el-cascader :options="cityData" v-model="addressForm.address1"></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址:" prop="address2">
          <el-input v-model="addressForm.address2"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addressDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addressDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!--展示物流进度的对话框-->
    <el-dialog title="物流进度" :visible.sync="progressVisible" width="50%">
      <!--timeline时间线-->
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in progressInfo"
          :key="index"
          :timestamp="activity.time"
        >{{activity.context}}</el-timeline-item>
      </el-timeline>
    </el-dialog>
  </div>
</template>

<script>
import cityData from './citydata.js'

export default {
  data() {
    return {
      // 获取订单列表的参数对象
      queryInfo: {
        query: '',
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 10
      },
      // 订单列表
      ordersList: [],
      // 总数据条数
      total: 0,
      // 控制修改订单对话框的显示与隐藏
      addressDialogVisible: false,
      addressForm: {
        address1: [],
        address2: ''
      },
      addressFormRules: {
        address1: [
          { required: true, message: '请选择省市区/县', trigger: 'blur' }
        ],
        address2: [
          { required: true, message: '请填写详细地址', trigger: 'blur' }
        ]
      },
      cityData, // 属性名与值相同，可以简写
      progressVisible: false,
      progressInfo: []
    }
  },
  created() {
    this.getOrdersList()
  },
  methods: {
    // 根据分页获取商品列表
    async getOrdersList() {
      const { data: res } = await this.$http.get('orders', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.ordersList = res.data.goods
      this.total = res.data.total
      console.log(this.ordersList)
    },
    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getOrdersList()
    },
    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getOrdersList()
    },
    // 重置查询时的页码
    getOrdersList2() {
      this.queryInfo.pagenum = 1
      console.log(this.queryInfo)
      this.getOrdersList()
    },
    // 关闭修改地址对话框
    addressDialogClosed() {
      this.$refs.addressFormRef.resetFields()
    },
    // 查看物流信息
    async showProgessBox() {
      const { data: res } = await this.$http.get('/kuaidi/1106975712662')
      // 测试的一个订单号

      if (res.meta.status !== 200) {
        return this.$message.error('获取物流进度失败!')
      }
      this.progressInfo = res.data
      console.log('测试订单号的物流进度：', this.progressInfo)
      this.progressVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.el-cascader {
  width: 100%;
}
</style>
