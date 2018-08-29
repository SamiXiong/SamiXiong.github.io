<template>
    <div>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                <el-form :inline="true">
                    <el-form-item>
                      <el-select v-model="value" clearable placeholder="序列号">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item >
                    <el-input placeholder="" v-model="searchName"></el-input>
                    </el-form-item>
                    <el-form-item style="float:right">
                    <el-button type="primary" @click="doFilter()"><i class="el-icon-search"></i>查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
                <el-table-column prop="uid" align="center" label="商品名称">
                </el-table-column>
                <el-table-column prop="number" align="center" label="订单号">
                </el-table-column>
                <el-table-column prop="date" align="center" label="买家账号" @click="go">
                </el-table-column>
                <el-table-column prop="number" align="center" label="每月租金" >
                </el-table-column>
                <el-table-column prop="number" align="center" label="规格" >
                </el-table-column>
                <el-table-column prop="number" align="center" label="店铺" >
                </el-table-column>
                <el-table-column prop="number" align="center" label="下单时间" >
                </el-table-column>
                <el-table-column prop="operation" label="操作 ">
                    <template slot-scope="scope" >
                    <el-button size="small" type="primary">编辑</el-button>
                    <el-button size="small" type="danger">删除</el-button>
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
       name: 'ToBePaid',
    data() {
      return {
        listLoading: false,
        activeName: 'second',
        searchName: "",
        value:"",
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
      options: [
        {
          value: '选项1',
          label: '买家账号'
        }, {
          value: '选项2',
          label: '订单号'
        }, {
          value: '选项3',
          label: '序列号'
        }, {
          value: '选项4',
          label: '商品名称'
        }
      ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
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
      }
    }
  };
</script>

