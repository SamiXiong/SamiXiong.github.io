<template>
    <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <span class="title-name">商品名称</span>
        <el-form-item class="width">
          <el-input placeholder="请输入商品名称" v-model="searchName" prefix="商品名称"></el-input>
        </el-form-item>
        <span class="title-name">分类</span>
        <el-form-item  class="width">
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
        <el-form-item class="width">
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
        <el-form-item class="width">
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
        <el-form-item class="width">
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
           <el-button type="primary" @click="search()"><i class="el-icon-search"></i>搜索</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
        <el-table-column prop="id" align="center" label="序号">
        </el-table-column>
      <el-table-column prop="img" align="center" label="图片">
      </el-table-column>
      <el-table-column prop="goods_name" align="center" label="商品名称" @click="go">
      </el-table-column>
      <el-table-column prop="category_name" align="center" label="分类" >
      </el-table-column>
      <el-table-column prop="brand_name" align="center" label="品牌" >
      </el-table-column>
      <el-table-column prop="name" align="center" label="店铺" >
      </el-table-column>
      <el-table-column prop="market_price" align="center" label="租金" >
      </el-table-column>
      <el-table-column prop="total_stock" align="center" label="库存" >
      </el-table-column>
      <el-table-column prop="sales_volume" align="center" label="销量" >
      </el-table-column>
      <el-table-column prop="is_temporary" align="center" label="状态" >
      </el-table-column>
      <el-table-column prop="operation" label="操作 " min-width="120">
        <template slot-scope="scope" >
         <el-button size="mini" type="primary"  @click="go(scope.row)">查看</el-button>
          <el-button size="mini" type="success" @click=" shelves(scope.row)">上架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="total, prev, pager, next"
                    background
                    :page-size="10"
                    :total=total
                    style="text-align:center;">
    </el-pagination>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tableList: [],
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
      value:"",
      total:0
    };
  },
  methods: {
    go(row) {
      this.$router.push({
        name:"ToAudit",
        params:{
          id:row.id
        }
      })
    },
    search(){
      var data = {
        pageNo :1,
        pageSize:3,
        goods_name:"苹果6s",
        category_id:9,
        brand_id:5,
        store_id:1,
      }
       this.$axios.post('/goods/goods_list',data).then(res=>{
        this.tableList = res.data.data.data_list
        this.total = res.data.data.data_list.length
        console.log(this.total)
      }).catch(err=>{console.log(err)})
    },
    shelves(row){
         this.$axios.get('/goods/temporary',{
            params:{
               goods_id:row.id
            }
            }).then(res=>{
           console.log(res.data);
            }).catch(err=>{console.log(err)})
    }
  },
  created(){
    this.$axios.get('/goods/verify_list',{
      params:{
        pageNo:1,
        pageSize:4
      }
    }).then(res=>{
      this.tableList = res.data.data.data_list
      this.total = res.data.data.data_list.length
    }).catch(err=>{console.log(err)})
  }
};
</script>
<style>
.title-name {
  line-height: 40px;
  margin-right: 10px;
}
.width{
  width: 130px;
}
</style>


