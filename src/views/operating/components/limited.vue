<template>
    <div class="app-container">
        <el-row class="bottom">
            <el-col :span="12">
                <el-col :span="4">
                    <span class="title-name">封面设置</span>
                </el-col>
                <el-col>

                </el-col>
            </el-col>
            <el-col :span="12">
                <el-col>
                    <span class="title-name">专题名称设置</span>
                    <input type="text" disabled placeholder="300" class="input-text">
                </el-col>
            </el-col>
        </el-row>
        <el-table :data=" tableList" border class="bottom">
            <el-table-column label="序号" prop="img"></el-table-column>
            <el-table-column label="图片" prop="color"></el-table-column>
            <el-table-column label="商品名称" prop="time"></el-table-column>
            <el-table-column label="分类" prop="time"></el-table-column>
            <el-table-column label="品牌" prop="money"></el-table-column>
            <el-table-column label="门店" prop="price"></el-table-column>
            <el-table-column label="租金" prop="guided"></el-table-column>
            <el-table-column label="市场价" prop="guided"></el-table-column>
            <el-table-column label="库存" prop="penalty"></el-table-column>
            <el-table-column label="销量" prop="province"></el-table-column>
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