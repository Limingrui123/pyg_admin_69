<template>
  <div class="users_container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 搜索框 和 添加按钮 镂空 -->
      <!-- 槽宽  :gutter="20"  :span="6" 多少份  默认24份-->
      <el-row :gutter="20">
        <el-col :span="6">
            <el-input placeholder="请输入内容" type="text">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-col>
        <el-col :span="18">
          <el-button type="primary" plain>添加用户</el-button>
        </el-col>
      </el-row>
      <!--表格-->
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="mg_state" label="状态">

          <template slot-scope="scope">
            <!-- 使用当前行的数据acope.row 状态scope.row.mg_state-->
            <!-- el-swicth 默认的是布尔值 -->
            <el-switch
              v-model="scope.row.mg_state"
              inactive-color="#13ce66">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <el-button-group>
            <el-button icon="el-icon-edit" round></el-button>
            <el-button icon="el-icon-delete"></el-button>
            <el-button icon="el-icon-loading" round></el-button>
          </el-button-group>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Users',
  data () {
    return {
      tableData: [{
        date: '2016-12-12',
        username: '王小龙',
        email: '1232@qq.com',
        role_name: '龙龙龙',
        mobile: 1231241455223,
        address: '上海市冲阿萨德啊啊是否13223哦'
      },
      {
        date: '2016-12-12',
        username: '李小二',
        email: '1232@qq.com',
        role_name: '李二牛',
        mobile: 1231241455223,
        address: '上海市冲阿萨德啊啊是否13223哦'
      },
      {
        date: '2016-12-12',
        username: '赵老三',
        email: '1232@qq.com',
        role_name: '王二蛋',
        mobile: 1231241455223,
        address: '上海市冲阿萨德啊啊是否13223哦'
      },
      {
        date: '2016-12-12',
        username: '计老四',
        email: '1232@qq.com',
        role_name: '吉吉吉',
        mobile: 1231241455223,
        address: '上海市冲阿萨德啊啊是否13223哦'
      },
      {
        date: '2016-12-12',
        username: '刘老五',
        email: '1232@qq.com',
        role_name: '王大锤',
        mobile: 1231241455223,
        address: '上海市冲阿萨德啊啊是否13223哦'
      },
      {
        date: '2016-12-12',
        username: '王小龙',
        email: '1232@qq.com',
        role_name: '王大锤',
        mobile: 1231241455223,
        address: '上海市冲阿萨德啊啊是否13223哦'
      }]
    }
  }
}
</script>

<style scoped>

</style>
