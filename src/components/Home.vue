<template>
  <el-container class="home_container">
    <el-header class="home_header">
        <el-button icon="iconfont icon-yingyongguanli" circle size="mini" @click="toggleMenu()"></el-button>
        <span class="header_span">品优购后台管理系统</span>
        <el-button type="danger" round class="layout" size="mini">退出</el-button>
    </el-header>
    <el-container>
      <el-aside class="home_aside" :width="collapse?'65px':'180px'">
        <el-menu
            :collapse="collapse"
            :collapse-transition="false"
            style="border: none; margin-top: 5px"
            background-color="#313542"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!-- 一级菜单 -->
            <el-submenu :index="item.id+''" v-for="(item) in menus" :key="item.id">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
                </template>
                <!-- 二级菜单 -->
                <el-menu-item :index="item.id+'-'+lastItem.id" v-for="lastItem in item.children" :key="lastItem.id">
                  {{lastItem.authName}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="home_main"><h1>欢迎来到品优购后台管理系统</h1></el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      collapse: false,
      menus: []
    }
  },
  mounted () {
    // 获取菜单数据
    this.getData()
  },
  methods: {
    toggleMenu () {
      this.collapse = !this.collapse
    },
    async getData () {
      // 获取数据
      // this.$http.get('menus').then(res => console.log(res.data))
      const {data: {data, meta}} = await this.$http.get('menus')
      // 判断是否成功  添加操作成功为201
      if (meta.status !== 200) return this.$message.error('获取菜单失败')
      // 已经成功获取
      this.menus = data
      // 更新视图 去视图修改模板 渲染出来
    }
  }
}
</script>
<style scoped>
  .home_container {
    height: 100%;
  }
  .home_header {
    background-color: #363B41;
    line-height: 60px;
  }
  .home_aside {
    background-color: #313542;
  }
  .home_main {
    background-color: #E8ECF0;
  }
  .header_span {
      font-size: 18px;
      color: #ccc;
      margin-left: 16px;
  }
  .layout {
    float: right;
    margin-top: 15px;
    font-size: 14px;
  }
</style>
