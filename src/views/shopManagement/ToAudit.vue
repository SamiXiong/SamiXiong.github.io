<template>
    <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <span class="title-name">商品名称</span>
        <el-form-item >
          <el-input placeholder="请输入商品名称" v-model="searchName" prefix="商品名称"></el-input>
        </el-form-item>
        <span class="title-name">分类</span>
        <el-form-item >
          <el-select v-model="value" clearable placeholder="按账号">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <span class="title-name">品牌</span>
        <el-form-item >
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <span class="title-name">门店</span>
        <el-form-item >
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <span class="title-name">状态</span>
        <el-form-item >
          <el-select v-model="value" clearable placeholder="已启用">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="float:right">
           <el-button type="primary" @click="doFilter()"><i class="el-icon-search"></i>搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
        <el-table-column prop="uid" align="center" label="序号">
        </el-table-column>
      <el-table-column prop="number" align="center" label="图片">
      </el-table-column>
      <el-table-column prop="date" align="center" label="商品名称" @click="go">
      </el-table-column>
      <el-table-column prop="number" align="center" label="分类" >
      </el-table-column>
      <el-table-column prop="number" align="center" label="品牌" >
      </el-table-column>
      <el-table-column prop="number" align="center" label="店铺" >
      </el-table-column>
      <el-table-column prop="number" align="center" label="租金" >
      </el-table-column>
      <el-table-column prop="number" align="center" label="市场价" >
      </el-table-column>
      <el-table-column prop="number" align="center" label="库存" >
      </el-table-column>
      <el-table-column prop="number" align="center" label="销量" >
      </el-table-column>
      <el-table-column prop="number" align="center" label="状态" >
      </el-table-column>
      <el-table-column prop="operation" label="操作 " min-width="90">
        <template slot-scope="scope" >
         <el-button size="mini" type="primary"  @click="go">查看</el-button>
          <el-button size="mini" type="success" @click="deleteUpdate(scope.row)">上架</el-button>
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
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      listLoading: false,
      searchName: "",
      value:""
    };
  },
  methods: {
    go() {
      this.$prompt("请输入邮箱", "提示", {
        title: "新增/编辑品牌",
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>
<style>
.title-name {
  line-height: 40px;
  margin-right: 10px;
}
</style>


