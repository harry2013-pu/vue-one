<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 添加角色按钮区域 -->
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddDialog">添加角色</el-button>
        </el-col>
      </el-row>

      <!-- 角色列表区域 -->
      <el-table :data="rolesList" border stripe>
        <!-- 展开列 -->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row :class="['bdbottom', index1 === 0 ? 'bdtop' : '', 'vcenter']" v-for="(item1, index1) in scope.row.children" :key="item1.id">
              <!-- 渲染一级权限 -->
              <el-col :span="5">
                <el-tag closable @close="removeRightById(scope.row, item1.id)">{{ item1.authName }}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 渲染二级权限和三级权限 -->
              <el-col :span="19">
                <!-- 通过for循环嵌套二级权限 -->
                <el-row :class="[index2 === 0 ? '' : 'bdtop', 'vcenter']" v-for="(item2, index2) in item1.children" :key="item2.id">
                  <el-col :span="6">
                    <el-tag type="success" closable @close="removeRightById(scope.row, item2.id)">{{ item2.authName}}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag type="warning" v-for="(item3) in item2.children" :key="item3.id" closable @close="removeRightById(scope.row, item3.id)">{{ item3.authName}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <!-- 索引列 -->
        <el-table-column prop="index" label="#" type="index"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" @click="editRoleNameDialog(scope.row.id)">编辑</el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="removeRoleById(scope.row.id)">删除</el-button>
            <el-button size="mini" type="warning" icon="el-icon-setting" @click="showSetDialog(scope.row)">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 编辑用户角色信息对话框 -->
    <el-dialog
      title="修改角色信息"
      :visible.sync="editRoleNameDialogVisible"
      width="50%"
      @close="editRoleNameDialogClose"
    >
      <!-- 内容主体区域 -->
      <el-form
        :model="editRoleNameForm"
        :rules="editRoleNameFormRules"
        ref="editRoleNameFormRef"
        label-width="100px"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="editRoleNameForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="editRoleNameForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="editRoleNameDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editRoleName">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加用户角色信息对话框 -->
    <el-dialog
      title="添加角色信息"
      :visible.sync="addRoleNameDialogVisible"
      width="50%"
      @close="addRoleNameDialogClose"
    >
      <!-- 内容主体区域 -->
      <el-form
        :model="addRoleNameForm"
        :rules="addRoleNameFormRules"
        ref="addRoleNameFormRef"
        label-width="100px"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="addRoleNameForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="addRoleNameForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addRoleNameDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRoleName">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分配用户权限的对话框 -->
    <el-dialog
      title="修改用户权限"
      :visible.sync="setRightDialogVisible"
      width="50%"
      @close="setRightDialogClosed"
    >
      <el-tree :data="rightsList" :props="treeProps" show-checkbox node-key="id" :default-expand-all="true" :default-checked-keys="defKeys" ref="treeRef"></el-tree>
      <!-- 底部区 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="setRightDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="allotRights">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rolesList: [],
      // 编辑角色
      editRoleNameDialogVisible: false,
      editRoleNameForm: {},
      editRoleNameFormRules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10个字符', trigger: 'blur' }
        ],
        roleDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15个字符', trigger: 'blur' }
        ]
      },
      // 添加角色
      addRoleNameDialogVisible: false,
      addRoleNameForm: {
        roleName: '',
        roleDesc: ''
      },
      addRoleNameFormRules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10个字符', trigger: 'blur' }
        ],
        roleDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15个字符', trigger: 'blur' }
        ]
      },
      // 控制分配权限对话框的显示与隐藏
      setRightDialogVisible: false,
      rightsList: [],
      // 树形控件的属性绑定对象
      treeProps: {
        children: 'children',
        label: 'authName'
      },
      // 默认选中的节点id数值组
      defKeys: [],
      // 即将分配角色权限的角色id
      roleId: ''
    }
  },
  created() {
    this.getRolesList()
  },
  methods: {
    async getRolesList() {
      const { data: res } = await this.$http.get('roles')

      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)

      this.rolesList = res.data
    },
    // 取消修改角色信息对话框时重置表单
    editRoleNameDialogClose() {
      this.$refs.editRoleNameFormRef.resetFields()
    },
    // 根据角色ID查询角色信息
    async editRoleNameDialog(id) {
      const { data: res } = await this.$http.get('roles/' + id)

      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)

      this.editRoleNameForm = res.data
      this.editRoleNameDialogVisible = true
    },
    // 更改角色信息
    editRoleName() {
      this.$refs.editRoleNameFormRef.validate(async (valid) => {
        if (!valid) return
        // 发起真正的修改角色信息网络请求
        const { data: res } = await this.$http.put(
          `roles/${this.editRoleNameForm.roleId}`,
          {
            roleName: this.editRoleNameForm.roleName,
            roleDesc: this.editRoleNameForm.roleDesc
          }
        )
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        // 隐藏添加用户的对话框
        this.editRoleNameDialogVisible = false
        // 重新获取用户列表
        this.getRolesList()
      })
    },
    // 根据角色ID删除角色信息
    async removeRoleById(id) {
      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)

      // 如果用户确认删除，则返回值为字符串confirm
      // 如果用户取消操作，则返回值为字符串cancel

      if (confirmResult !== 'confirm') return this.$message.info('已取消删除')

      const { data: res } = await this.$http.delete('roles/' + id)

      if (res.meta.status !== 200) return this.$message.error('删除角色失败！')

      this.$message.success(res.meta.msg)
      this.getRolesList()
    },
    // 根据ID删除对应权限
    async removeRightById(role, rightId) {
      const confirmResult = await this.$confirm('此操作将永久删除该权限, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)

      if (confirmResult !== 'confirm') return this.$message.info('已取消删除')

      const { data: res } = await this.$http.delete(`roles/${role.id}/rights/${rightId}`)

      if (res.meta.status !== 200) return this.$message.error('删除权限失败！')

      this.$message.success(res.meta.msg)
      role.children = res.data
    },
    // 展示分配权限的对话框
    async showSetDialog(role) {
      this.roleId = role.id
      // 获取所有权限数据
      const { data: res } = await this.$http.get('rights/tree')

      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)

      // 把获取到的权限数据保存到data中
      this.rightsList = res.data
      this.getLeafKeys(role, this.defKeys)
      this.setRightDialogVisible = true
    },
    // 通过递归形式，获取角色下所有三级权限的id，并保存到defKeys数组中
    getLeafKeys(node, arr) {
      if (!node.children) {
        return arr.push(node.id)
      }

      node.children.forEach(item => {
        this.getLeafKeys(item, arr)
      })
    },
    setRightDialogClosed() {
      this.defKeys = []
    },
    // 确认分配权限
    async allotRights() {
      const keys = [
        ...this.$refs.treeRef.getCheckedKeys(),
        ...this.$refs.treeRef.getHalfCheckedKeys()
      ]

      const idStr = keys.join(',')
      const { data: res } = await this.$http.post(`roles/${this.roleId}/rights`, { rids: idStr })

      if (res.meta.status !== 200) return this.$message.error('更新用户权限失败！')

      this.$message.success(res.meta.msg)
      this.getRolesList()
      this.setRightDialogVisible = false
    },
    // 点击按钮，添加角色
    showAddDialog() {
      this.addRoleNameDialogVisible = true
    },
    // 取消添加角色信息对话框时重置表单
    addRoleNameDialogClose() {
      this.$refs.addRoleNameFormRef.resetFields()
    },
    // 更改角色信息
    addRoleName() {
      this.$refs.addRoleNameFormRef.validate(async (valid) => {
        if (!valid) return
        // 发起真正的修改角色信息网络请求
        const { data: res } = await this.$http.post('roles', {
          roleName: this.addRoleNameForm.roleName,
          roleDesc: this.addRoleNameForm.roleDesc
        })
        if (res.meta.status !== 201) return this.$message.error(res.meta.msg)
        this.$message.success(res.meta.msg)
        // 隐藏添加用户的对话框
        this.addRoleNameDialogVisible = false
        // 重新获取用户列表
        this.getRolesList()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-tag {
  margin: 7px;
}

.bdtop {
  border-top: 1px solid #eee;
}

.bdbottom {
  border-top: 1px solid #eee;
}

.vcenter {
  display: flex;
  align-items: center;
}
</style>
