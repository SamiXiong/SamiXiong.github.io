<template>
    <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item align = center>
          <el-button type="primary" @click="newadd = true"><i class="el-icon-plus"></i> 新增</el-button>
          <el-dialog title="新增/编辑分类" :visible.sync="newadd" width="40%">
            <el-form :model="form">
              <el-form-item label="一级分类" class="block bottom"  :label-width="formLabelWidth">
                <el-input v-model="form.number" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="排序值" class="block bottom"  :label-width="formLabelWidth">
                <el-input v-model="form.number" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="是否显示:" class="block bottom"  :label-width="formLabelWidth">
                   <el-radio v-model="value" label="1">显示</el-radio>
                    <el-radio v-model="value" label="2">不显示</el-radio>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="newadd = false">取 消</el-button>
                <el-button type="primary" @click="newadd = false">确 定</el-button>
            </div>
         </el-dialog>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
        <el-table-column prop="uid" align="center" label="banner图">
        </el-table-column>
      <el-table-column prop="number" align="center" label="名称">
      </el-table-column>
      <el-table-column prop="date" align="center" label="跳转类型" @click="go">
      </el-table-column>
      <el-table-column prop="title" align="center" label="创建时间" >
      </el-table-column>
      <el-table-column  label="状态" width="120" >
        <template slot-scope="scope">
          <el-tag size="small" :type="scope.row.status | statusFilter" @click="isStatus(scope.$index, scope.row)" v-if="scope.row.status == 1">启用</el-tag>
          <el-tag size="small"  :type="scope.row.status | statusFilter" @click="isStatus(scope.$index, scope.row)" v-if="scope.row.status == 2">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作 ">
        <template slot-scope="scope" >
         <el-button size="small" type="primary"  @click="go">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteUpdate(scope.row)">删除</el-button>
          <el-button v-if="scope.row.status!='1'" size="mini" @click="handleModifyStatus(scope.row,'1')">禁用
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="total, prev, pager, next"
                    background
                    :page-size="10"
                    :total="100"
                    style="text-align:center;">
    </el-pagination>
    </div>
</template>
<script>
export default {
  data() {
    return {
      newadd:false,
      tableList: [
        {
          uid: 1,
          date: "2015-08-10",
          cname: "雷涛",
          title: "Pfrgt Nyhwmzcdz Iclaepebm Rhbloqr Kxtqed Tedogn",
          boolean: true,
          status: 1,
          number: 1221
        },
        {
          uid: 2,
          date: "1979-06-24",
          cname: "方洋",
          title: "Wcjvo Byhafb Kgd",
          boolean: false,
          status: 2,
          number: 2891
        },
        {
          uid: 3,
          date: "2008-09-10",
          cname: "邵霞",
          title: "Nxtelbh Bqmwgf Ksqkg Obdxnydy Kigwvigcd Emqxrlb",
          boolean: true,
          status: 1,
          number: 1862
        },
        {
          uid: 4,
          date: "1990-08-01",
          cname: "孙娜",
          title: "Gmng Nhhficneo Jhfbu Dfhhyqsddp Dwdq",
          boolean: false,
          status: 2,
          number: 261
        },
        {
          uid: 5,
          date: "1999-01-12",
          cname: "郭霞",
          title: "Nixtusn Jvzwszhs Hxhxsrmj Qjixpu Dhaslwkzm",
          boolean: false,
          status: 1,
          number: 1021
        },
        {
          uid: 6,
          date: "1987-03-11",
          cname: "萧磊",
          title: "Gibyv Rkuw Gxpdlqxt Ojwhxgzl Zejilzja",
          boolean: true,
          status: 1,
          number: 1396
        }
      ],
      form: {
          name: '',
          region: '',
          number:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      listLoading: false,
      formLabelWidth: '90px',
      searchName: "",
      value:""
    };
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        2: 'danger'
      }
      return statusMap[status]
    }
  },
  methods: {
    go() {
        this.$prompt('请输入邮箱', '提示', {
          title: "新增/编辑品牌",
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
       handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      console.log(row)
      row.status = status
    },
  }
};
</script>




