<template>
<el-container style="height: 100%; border: 1px solid #eee">

  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </el-header>

<el-container>
  <el-aside width="200px">
    <el-menu :default-openeds="['1','2','3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-bank-card"></i>身份管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="skip('userinfo')">用户信息</el-menu-item>
          <el-menu-item index="1-2" @click="skip('createuser')">新建用户</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-notebook-2"></i>资源管理</template>
          <el-menu-item-group>
          <el-menu-item index="2-1" @click="skip('resourceinfo')">资源信息</el-menu-item>
          <el-menu-item index="2-2" @click="skip('addresource')">添加资源</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>权限管理</template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="skip('organization')">组织管理</el-menu-item>
          <el-menu-item index="3-2" @click="skip('policyinfo')">查看策略</el-menu-item>
          <el-menu-item index="3-3" @click="skip('editpolicy')">编辑策略</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>

<el-container>
  <router-view></router-view>
</el-container>
</el-container>
  <el-footer>© 2019 北京邮电大学 版权所有 地址:北京市西土城路10号 邮编:100876 </el-footer>
</el-container>
</template>

<style>
  .el-header {
    background-color: #409EFF;
    color: #333;
    line-height: 50px;
  }

  .el-aside {
    color: #333;
  }
  .el-footer {
    text-align: center;
    font-size: 12px;
    color:darkgray;
  }
</style>

<script>
import Home from './Home.vue'
import UserInfo from './identitymag/UserInfo.vue'
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(10).fill(item)
    }
  },
  compnents: {
    Home,
    UserInfo
  },
  methods: {
    skip (a) {
      this.$router.push(a)
    }
  }
}
</script>
