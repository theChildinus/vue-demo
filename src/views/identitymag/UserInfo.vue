<template>
  <div class="container">
    <el-card v-for="u in 8" :key="u" shadow="hover" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{'用户' + u}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
      </div>
      <div class="text item">身份：管理员</div>
      <div class="text item">状态：在线</div>
      <div class="text item">部门：{{u}}</div>
      <div class="text item">联系方式：{{u}}</div>
    </el-card>
  </div>
</template>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.box-card {
  width: 320px;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
