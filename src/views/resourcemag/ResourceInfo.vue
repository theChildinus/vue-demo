<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%; margin-left: 10px; margin-right: 10px; margin-top: 10px;"
    >
      <el-table-column prop="resid" label="资源Id" width="100"></el-table-column>
      <el-table-column prop="resname" label="资源名称"></el-table-column>
      <el-table-column
        prop="restype"
        label="资源类型"
        :filters="[{text: '报表', value: '报表'}, {text: '工具', value: '工具'}, {text: '态势图', value: '态势图'}]"
        :filter-method="filterHandler"
        width="180"
      ></el-table-column>
      <el-table-column prop="resdescribe" label="资源描述"></el-table-column>
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
        <el-row style="width: 100%; margin-top: 10px; margin-right: 200px;">
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
          resid: 1,
          resname: '光纤光频参量统计分析表',
          restype: '报表',
          resdescribe: 'dfasdffad',
          ctime: '2016-05-04'
        },
        {
          resid: 2,
          resname: '时间参量统计分析表',
          restype: '报表',
          resdescribe: 'aaaaaaa',
          ctime: '2016-06-23'
        },
        {
          resid: 3,
          resname: '光纤光频态势',
          restype: '态势图',
          resdescribe: 'sssssss',
          ctime: '2016-04-04'
        },
        {
          resid: 4,
          resname: '组态图',
          restype: '工具',
          resdescribe: 'dfdfsss',
          ctime: '2016-05-04'
        },
        {
          resid: 5,
          resname: '2222222',
          restype: '报表',
          resdescribe: 'werwer',
          ctime: '2016-07-04'
        },
        {
          resid: 6,
          resname: '44444444',
          restype: '报表',
          resdescribe: 'adfadfdgf',
          ctime: '2022-05-04'
        },
        {
          resid: 7,
          resname: '光纤光频参量统计分析表',
          restype: '报表',
          resdescribe: '423423421',
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
