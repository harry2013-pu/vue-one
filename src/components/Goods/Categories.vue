<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 添加角色按钮区域 -->
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddCateDialogVisible">添加分类</el-button>
        </el-col>
      </el-row>

      <!-- 商品分类区域 -->
      <el-table
        :data="cateList"
        border
        stripe
        row-key="cat_id"
        lazy
        :load="load"
        :tree-props="{ children: 'children', hasChildren: 'children' }"
      >
        <el-table-column label="#" type="index">
          <template slot-scope="scope">
            <span v-if="show(scope.row)">
              {{
              cateList.findIndex((value) => value.cat_id == scope.row.cat_id) +
              1 +
              (queryInfo.pagenum - 1) * queryInfo.pagesize
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="cat_name" label="分类名称"></el-table-column>
        <el-table-column prop="email" label="是否有效">
          <template slot-scope="scope">
            <span>
              <i class="el-icon-success" v-if="!scope.row.cat_deleted"></i>
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="cat_level" label="排序">
          <template slot-scope="scope">
            <el-tag type="primary" effect="dark" size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
            <el-tag
              type="success"
              effect="dark"
              size="mini"
              v-else-if="scope.row.cat_level === 1"
            >二级</el-tag>
            <el-tag
              type="warning"
              effect="dark"
              size="mini"
              v-else-if="scope.row.cat_level === 2"
            >三级</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="showEditCateNameDialog(scope.row.cat_id)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="removeCateById(scope.row.cat_id)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[3, 5, 10, 15]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>

    <!-- 添加商品分类对话框 -->
    <el-dialog
      title="添加商品分类"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addCateDialogClose"
    >
      <!-- 添加分类表单 -->
      <el-form
        ref="addCateFormRef"
        :rules="addCateFormRules"
        :model="addCateForm"
        label-width="100px"
      >
        <el-form-item label="分类名称:" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类:">
          <!-- options 用来指定数据源 -->
          <!-- props 用来指定配置对象 -->
          <el-cascader
            :options="parentCateList"
            :props="cascaderProps"
            v-model="selectedKeys"
            @change="parentCateChange"
            clearable
          ></el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCate">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑商品分类名称的对话框 -->
    <el-dialog title="修改分类" :visible.sync="editCateNameDialogVisible" width="50%" @close="editCateDialogClosed">
      <!-- 编辑分类表单 -->
      <el-form
        ref="editCateFormRef"
        :rules="editCateFormRules"
        :model="editCateForm"
        label-width="100px"
      >
        <el-form-item label="分类名称:" prop="cat_name">
          <el-input v-model="editCateForm.cat_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editCateNameDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editCate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 商品分类的数据列表
      cateList: [],
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      // 总数据条数
      total: 0,
      // 控制添加分类对话框的显示与隐藏
      addDialogVisible: false,
      addCateForm: {
        // 分类父id
        cat_pid: 0,
        // 分类名称
        cat_name: '',
        // 分类层级，默认一级
        cat_level: 0
      },
      // 添加分类表单的验证规则
      addCateFormRules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10个字符', trigger: 'blur' }
        ]
      },
      // 控制编辑商品分类对话框的显示与隐藏
      editCateNameDialogVisible: false,
      editCateForm: {
        cat_id: 0,
        cat_name: ''
      },
      // 添加分类表单的验证规则
      editCateFormRules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10个字符', trigger: 'blur' }
        ]
      },
      // 父级分类数据列表
      parentCateList: [],
      // 指定级联选择器的配置对象
      cascaderProps: {
        checkStrictly: true,
        expandTrigger: 'hover',
        value: 'cat_id',
        label: 'cat_name',
        children: 'children'
      },
      // 选中的父级分类的id数组
      selectedKeys: []
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    // 获取商品分类数据
    async getCateList() {
      const { data: res } = await this.$http.get('categories', {
        params: this.queryInfo
      })

      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)

      // 把数据列表赋值给cateList
      this.cateList = res.data.result
      // 为总数据条数赋值
      this.total = res.data.total
    },
    // 判断是否为一级分类来显示索引
    show(cateInfo) {
      if (cateInfo.cat_pid !== 0) {
        return false
      }
      return true
    },
    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getCateList()
    },
    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getCateList()
    },
    // 根据cat_id删除分类
    async removeCateById(id) {
      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        '此操作将永久删除该分类, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch((err) => err)

      // 如果用户确认删除，则返回值为字符串confirm
      // 如果用户取消操作，则返回值为字符串cancel

      if (confirmResult !== 'confirm') return this.$message.info('已取消删除')

      const { data: res } = await this.$http.delete('categories/' + id)

      if (res.meta.status !== 200) return this.$message.error('删除用户失败！')

      this.$message.success(res.meta.msg)
      this.getCateList()
    },
    // 点击按钮，显示编辑商品分类名称对话框
    async showEditCateNameDialog(id) {
      const { data: res } = await this.$http.get('categories/' + id)
      if (res.meta.status !== 200) {
        return this.$message.error('查询商品分类信息失败！')
      }
      this.editCateForm.cat_id = res.data.cat_id
      this.editCateForm.cat_name = res.data.cat_name
      this.editCateNameDialogVisible = true
      console.log(this.editCateForm)
    },
    // 点击按钮，编辑商品分类名称
    editCate() {
      this.$refs.editCateFormRef.validate(async (valid) => {
        if (!valid) return
        const { data: res } = await this.$http.put(`categories/${this.editCateForm.cat_id}`, {
          cat_name: this.editCateForm.cat_name
        })
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)

        this.$message.success(res.meta.msg)
        this.getCateList()
        this.editCateNameDialogVisible = false
      })
    },
    // 取消编辑分类对话框时重置表单数据
    editCateDialogClosed() {
      this.$refs.editCateFormRef.resetFields()
    },
    // 对分类数据进行懒加载优化
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve(tree.children)
      }, 200)
    },
    // 点击按钮，显示添加分类对话框
    showAddCateDialogVisible() {
      this.getParentCateList()
      this.addDialogVisible = true
    },
    // 获取父级分类数据
    async getParentCateList() {
      const { data: res } = await this.$http.get('categories', {
        params: { type: 2 }
      })

      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)

      this.parentCateList = res.data
    },
    // 监听分类选择的变化
    parentCateChange() {
      if (this.selectedKeys.length > 0) {
        // 为父id赋值
        this.addCateForm.cat_pid = this.selectedKeys[
          this.selectedKeys.length - 1
        ]
        // 为分类层级赋值
        this.addCateForm.cat_level = this.selectedKeys.length
      } else {
        // 为父id赋值
        this.addCateForm.cat_pid = 0
        // 为分类层级赋值
        this.addCateForm.cat_level = 0
      }
    },
    // 点击按钮，添加新的分类
    addCate() {
      this.$refs.addCateFormRef.validate(async (valid) => {
        if (!valid) return
        const { data: res } = await this.$http.post(
          'categories',
          this.addCateForm
        )

        if (res.meta.status !== 201) return this.$message.error(res.meta.msg)

        this.$message.success(res.meta.msg)
        this.getCateList()
      })
      console.log(this.addCateForm)
      this.addDialogVisible = false
    },
    // 监听添加分类对话框关闭事件，重置表单数据
    addCateDialogClose() {
      this.$refs.addCateFormRef.resetFields()
      this.selectedKeys = []
      this.addCateForm.cat_pid = 0
      this.addCateForm.cat_level = 0
    }
  },
  watch: {
    // 解决删除页面最后一条数据时，数据为空的问题
    total() {
      if (
        this.total === (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize &&
        this.total !== 0
      ) {
        this.queryInfo.pagenum -= 1
        this.getCateList()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-icon-success {
  color: rgb(57, 206, 57);
}

.el-cascader {
  width: 100%;
}
</style>
