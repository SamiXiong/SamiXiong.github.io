<template>
    <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
          <el-row>
            <el-form-item>
                <el-button type="primary" @click="goNewStores()"><i class="el-icon-plus"></i> 新增</el-button>
            </el-form-item>
          </el-row>
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
        <el-form-item >
          <el-input placeholder="" v-model="searchContent"></el-input>
        </el-form-item>
        <el-form-item style="float:right">
           <el-button type="primary" @click="search()"><i class="el-icon-search"></i>查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
        <el-table-column prop="name" align="center" label="门店名称">
        </el-table-column>
      <el-table-column prop="contact_person" align="center" label="联系人">
      </el-table-column>
      <el-table-column prop="tel" align="center" label="联系方式" >
      </el-table-column>
      <el-table-column prop="store_address" align="center" label="门店地址" >
      </el-table-column>
       <el-table-column prop="commission" align="center" label="赚取佣金">
         <template slot-scope="scope">
           <span @click="show('show')" id="show">{{scope.row.commission}}</span>
         </template>
      </el-table-column>
       <el-table-column prop="total_stock" align="center" label="库存" >
      </el-table-column>
       <el-table-column prop="sales_volume" align="center" label="销量" >
      </el-table-column>
       <el-table-column label="序列号库" 
       align="center">
           <template slot-scope="scope">
               <el-button @click="push" style="margin:auto">
                   查看
               </el-button>
           </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作" min-width="100">
        <template slot-scope="scope" >
         <el-button size="small" type="primary"  @click="goNewStores(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteUpdate(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="total, prev, pager, next"
                    background
                    :page-size="pageSize"
                    :total="total"
                    :current-page="currentpage"
                    @current-change="handleCurrentChange"
                    style="text-align:center;">
    </el-pagination>
    </div>
</template>
<script>
export default {
  data() {
    return {
      number: "",
      id:"",
      goods:[],
      currentpage:1,
      tableList: [],
      searchContent:"",
      options: [
        {
          value: "1",
          label: "门店名称"
        },
        {
          value: "2",
          label: "联系方式"
        },
      ],
      listLoading: false,
      searchName: "",
      value:"",
      total:0,
      pageSize:5
    };
  },
  created(){
    this.$axios.get('/store/store_list',{
      params:{
          pageNo:1,
          num:5
        }
    }
    ).then(res=>{
           this.tableList = res.data.data.data_list
            this.total = res.data.data.data_list.length
            console.log(this.total)
            console.log(this.tableList)
          }).catch(err=>{console.log(err)})
  },
  methods: {
      search(){
        if(this.searchContent==""){
            this.$message.warning('查询条件不能为空！')
            return
        }else{
          var data = {
          condition:this.value,
          value:this.searchContent
        }
        this.$axios.post('/store/store_list',data).then(res=>{
          this.tableList = res.data.data.data_list
          this.total = res.data.data.data_list.length
          console.log(this.total)
        }).catch(err=>{console.log(err)})
        }
      },
      go(){},
      deleteUpdate(row){
         this.$axios.get('/store/store_list',{
            params:{
               store_id:row.id
              }
          }
          ).then(res=>{
                this.$message.success('删除成功！')
                }).catch(err=>{console.log(err)})
      },
      handleCurrentChange(){
         this.$axios.get('/store/store_list',{
            params:{
                pageNo:this.currentpage,
                num:5
              }
          }
          ).then(res=>{
                this.tableList = res.data.data.data_list
                console.log(this.tableList)
                }).catch(err=>{console.log(err)})
      },
      push(){
          this.$router.push({ path: '/storeManagement/serialNumber'})
      },
      goNewStores(row){
        if(row){
          this.$router.push({
                      name:'newStores',
                      params:{
                          id:row.id
                      }
                  })
        }else{
          this.$router.push({
                    name:'newStores',
                    params:{
                        id:this.id
                    }
                })
        }
      },
      demo(row, column){
        console.log(row,column)
      },
      show(id){
        let price = document.getElementById(id);
        let priceValue = price.innerHTML;
        console.log(priceValue); 
        }
  }
};
</script>

