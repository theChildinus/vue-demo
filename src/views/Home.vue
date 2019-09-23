<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="skip('userinfo')">身份管理</el-menu-item>
      <el-menu-item index="2" @click="skip('resourceinfo')">资源管理</el-menu-item>
      <el-menu-item index="3" @click="skip('policyinfo')">权限管理</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    skip (path) {
      this.$router.push(path)
    }
  }
}
</script>
