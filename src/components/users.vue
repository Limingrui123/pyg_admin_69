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
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
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
        name: '王小龙',
        address: '上海市冲阿萨德啊啊是否13223哦'
      },
      {
        date: '2016-12-12',
        name: '李小二',
        address: '上海市冲阿萨德啊啊是否13223哦'
      },
      {
        date: '2016-12-12',
        name: '赵老三',
        address: '上海市冲阿萨德啊啊是否13223哦'
      },
      {
        date: '2016-12-12',
        name: '计老四',
        address: '上海市冲阿萨德啊啊是否13223哦'
      },
      {
        date: '2016-12-12',
        name: '刘老五',
        address: '上海市冲阿萨德啊啊是否13223哦'
      },
      {
        date: '2016-12-12',
        name: '王小龙',
        address: '上海市冲阿萨德啊啊是否13223哦'
      }]
    }
  }
}
</script>

<style scoped>

</style>
