<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%; margin-left: 10px; margin-right: 10px; margin-top: 10px;"
    >
      <el-table-column prop="policyid" label="策略Id" width="100"></el-table-column>
      <el-table-column
        prop="sub"
        label="主体"
        :filters="[{text: 'zhao', value: 'zhao'}, {text: 'kong', value: 'kong'}, {text: 'yang', value: 'yang'}]"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column
        prop="res"
        label="资源"
        :filters="[{text: '报表', value: '报表'}, {text: '工具', value: '工具'}, {text: '态势图', value: '态势图'}]"
        :filter-method="filterHandler"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="act"
        label="动作"
        :filters="[{text: 'Read', value: 'Read'}, {text: 'Write', value: 'Write'}, {text: 'Execute', value: 'Execute'}]"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column prop="permit" label="许可权"></el-table-column>
      <el-table-column prop="ctime" label="添加时间" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="display: flex; justify-content: space-between; flex-wrap: wrap;">
      <span class="demonstration">
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </span>
      <span>
        <el-row style="width: 100%; margin-top: 10px; margin-right: 150px">
          <el-button type="primary" size="medium">添加策略</el-button>
        </el-row>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          policyid: 1,
          sub: 'zhao',
          res: '报表',
          act: 'Read',
          permit: 'T',
          ctime: '2016-05-04'
        },
        {
          policyid: 2,
          sub: 'zhao',
          res: '报表',
          act: 'Read',
          permit: 'T',
          ctime: '2016-06-23'
        },
        {
          policyid: 3,
          sub: 'zhao',
          res: '态势图',
          act: 'Read',
          permit: 'F',
          ctime: '2016-04-04'
        },
        {
          policyid: 4,
          sub: 'kong',
          res: '工具',
          act: 'Write',
          permit: 'T',
          ctime: '2016-05-04'
        },
        {
          policyid: 5,
          sub: 'yang',
          res: '报表',
          act: 'Write',
          permit: 'F',
          ctime: '2016-07-04'
        },
        {
          policyid: 6,
          sub: 'yang',
          res: 'kong',
          act: 'execute',
          permit: 'T',
          ctime: '2022-05-04'
        },
        {
          policyid: 7,
          sub: 'kong',
          res: '报表',
          act: 'execute',
          permit: 'F',
          ctime: '2016-05-04'
        }
      ]
    }
  },
  methods: {
    filterHandler () {},
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>
