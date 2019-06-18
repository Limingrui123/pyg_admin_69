<template>
  <el-container class="home_container">
    <el-header class="home_header">
        <el-button icon="iconfont icon-yingyongguanli" circle size="mini" @click="toggleMenu()"></el-button>
        <span class="header_span">For-DM数据管理系统</span>
        <el-button type="danger" round class="layout" size="mini" @click="logout()">退出</el-button>
    </el-header>
    <el-container>
      <el-aside class="home_aside" :width="collapse?'65px':'180px'">
        <el-menu
            :default-active="'/'+$route.name"
            router
            :unique-opened="true"
            :collapse="collapse"
            :collapse-transition="false"
            style="border: none; margin-top: 5px"
            background-color="#313542"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!-- 一级菜单 -->
            <el-submenu :index="item.id + ''" v-for="(item, i) in menus" :key="item.id">
                <template slot="title">
                <i :class="['iconfont', iconArr[i]]"></i>
                <span>&nbsp;{{item.authName}}</span>
                </template>
                <!-- 二级菜单 -->
                <el-menu-item :index="'/'+lastItem.path" v-for="lastItem in item.children" :key="lastItem.id">
                  <i class="el-icon-menu"></i>
                  <span>{{lastItem.authName}}</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="home_main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import mixin from './HomeMixin.js'
export default {
  mixins: [mixin]
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
