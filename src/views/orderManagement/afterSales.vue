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
                    <el-form-item >
                    <span class="title-name">订单状态</span>
                    </el-form-item>
                    <el-form-item>
                      <el-select v-model="type" clearable placeholder="请选择">
                          <el-option
                            v-for="item in types"
                            :key="item.type"
                            :label="item.label"
                            :value="item.type">
                          </el-option>
                      </el-select>
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
                <el-table-column prop="date" align="center" label="买家账号" @click="go">
                </el-table-column>
                <el-table-column prop="number" align="center" label="规格" >
                </el-table-column>
                <el-table-column prop="number" align="center" label="店铺" >
                </el-table-column>
                 <el-table-column prop="number" align="center" label="报修时间" >
                </el-table-column>
                <el-table-column prop="number" align="center" label="处理时间" >
                </el-table-column>
                 <el-table-column prop="number" align="center" label="状态" >
                </el-table-column>
                <el-table-column prop="operation" label="操作 ">
                    <template slot-scope="scope" >
                    <el-button size="small" type="primary" @click="see(scope.row)">报修内容</el-button>
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
        type:"",
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
      ],
      types:[
           {
          type: '1',
          label: '待维修'
        }, {
          type: '2',
          label: '已维修'
        }, {
          type: '3',
          label: '用户取消维修'
        }, {
          type: '4',
          label: '平台取消维修'
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
              select1:this.value,
              select1:this.type,
              value:this.searchName,
              pageNo:1,
              num:5,
            }
            console.log(data)
            this.$axios.post('/order/repaire',data).then(res=>{
              this.tableList = res.data.data.data_list
              this.total = res.data.data.data_list.length
              console.log(this.total)
            }).catch(err=>{console.log(err)})
         }
       },
       see(row){
        this.$router.push({
              name:"afterSalesInfo",
              params:{
                  id:row.id
              }
          })
       }
    },
    created(){
       this.$axios.get('/order/repaire',{
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


