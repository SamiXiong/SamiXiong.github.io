<template>
    <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
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
        <el-table-column prop="new_id" align="center" label="用户编号">
        </el-table-column>
      <el-table-column prop="nickname" align="center" label="用户名">
      </el-table-column>
      <el-table-column prop="realname" align="center" label="真实姓名" >
      </el-table-column>
      <el-table-column align="center" label="账号" >
          <template slot-scope="scope">
              <span @click="go(scope.row)">{{scope.row.tel}}</span>
          </template>
      </el-table-column>
       <el-table-column prop="credit_score" align="center" label="芝麻信用分">
      </el-table-column>
       <el-table-column prop="create_time" align="center" label="注册时间" >
      </el-table-column>
       <el-table-column  label="状态" width="120" >
        <template slot-scope="scope">
          <el-tag size="small" :type="scope.row.is_forbidden | statusFilter" v-if="scope.row.is_forbidden == 1">启用</el-tag>
          <el-tag size="small"  :type="scope.row.is_forbidden | statusFilter" v-if="scope.row.is_forbidden == 2">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作" >
        <template slot-scope="scope" >
         <el-button size="small" type="primary"  @click="remove(scope.row)">移除</el-button>
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
          label: "按账号"
        },
        {
          value: "2",
          label: "按用户名"
        },
        {
          value: "3",
          label: "按真实姓名"
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
    this.$axios.get('/user/blacklist',{
      params:{
          pageNo:1,
          num:5
        }
    },
    ).then(res=>{
           this.tableList = res.data.data.data_list
            this.total = res.data.data.data_list.length
            console.log(this.total)
            console.log(this.tableList)
          }).catch(err=>{console.log(err)})
  },
  filters: {
    statusFilter(is_forbidden) {
      const statusMap = {
        1: 'success',
        2: 'danger'
      }
      return statusMap[is_forbidden]
    }
  },
  methods: {
      search(){
        if(this.searchContent==""){
            this.$message.warning('查询条件不能为空！')
            return
        }else{
          console.log(this.value)
          var data = {
          select:this.value,
          value:this.searchContent,
          pageNo:1,
          num:5,
        }
        console.log(data);
        this.$axios.post('/user/blacklist',data).then(res=>{
          this.tableList = res.data.data.data_list
          this.total = res.data.data.data_list.length
          console.log(this.total)
        }).catch(err=>{console.log(err)})
        }
      },
      go(row){
          this.$router.push({
              name:"userinfo",
              params:{
                  id:row.id
              }
          })
      },
      handleCurrentChange(){
         this.$axios.get('/user/blacklist',{
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
      remove(row){
          this.$axios.get('/user/blacklist',{
            params:{
                user_id:row.id
              }
          }
          ).then(res=>{
                console.log(res.data)
                }).catch(err=>{console.log(err)})
            },
      },
      show(id){
        let price = document.getElementById(id);
        let priceValue = price.innerHTML;
        console.log(priceValue); 
        }
};
</script>

