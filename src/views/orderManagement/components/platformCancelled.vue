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
                    <el-button type="primary" @click=" applySearch()"><i class="el-icon-search"></i>查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
                <el-table-column prop="uid" align="center" label="商品名称">
                </el-table-column>
                <el-table-column prop="number" align="center" label="订单号">
                </el-table-column>
                <el-table-column prop="date" align="center" label="买家账号">
                </el-table-column>
                 <el-table-column prop="date" align="center" label="序列号">
                </el-table-column>
                <el-table-column prop="number" align="center" label="每月租金" >
                </el-table-column>
                 <el-table-column prop="number" align="center" label="增值服务" >
                </el-table-column>
                <el-table-column prop="number" align="center" label="规格" >
                </el-table-column>
                <el-table-column prop="number" align="center" label="店铺" >
                </el-table-column>
                <el-table-column prop="number" align="center" label="下单时间" >
                </el-table-column>
                <el-table-column prop="operation" label="操作 ">
                    <template slot-scope="scope" >
                    <el-button size="small" type="primary" @click="see(scope.row)">查看</el-button>
                    <el-button size="small" type="primary" @click="logistics(scope.row)">物流</el-button>
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
         tableList: [],
      options: [
        {
          value: '1',
          label: '买家账号'
        }, {
          value: '2',
          label: '订单号'
        }, {
          value: '3',
          label: '序列号'
        }, {
          value: '4',
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
        
      },
       applySearch(){
         if(this.searchName==""){
            this.$message.warning('查询条件不能为空！')
            return
         }else{
            var data = {
              select:this.value,
              value:this.searchName,
              pageNo:1,
              pageSize:5,
            }
            console.log(data)
            this.$axios.post('/order/plat_refuse',data).then(res=>{
              this.tableList = res.data.data.data_list
              this.total = res.data.data.data_list.length
              console.log(this.total)
            }).catch(err=>{console.log(err)})
         }
       },
       see(row){
        this.$router.push({
              name:"userCancelledInfo",
              params:{
                  id:row.id
              }
          })
       },
       logistics(row){
            this.$axios.get('/order/wuliu',{
                params:{
                  order_id:1,
                }
            }).then(res=>{
                console.log(res.data)
            }).catch(err=>{console.log(err)})
       }
    },
    created(){
       this.$axios.get('/order/plat_refuse',{
            params:{
                pageNo:1,
                pageSize:5,
            }
        }).then(res=>{
            this.tableList = res.data.data.data_list
            this.length = this.info.address.length
        }).catch(err=>{console.log(err)})
    }
  };
</script>

