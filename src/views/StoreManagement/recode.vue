<template>
    <div class="app-container">
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true">
                    <el-form-item>
                        <el-button type="primary" @click="back"><i class="el-icon-plus"></i> 返回</el-button>
                        <span class="title-name">提现记录</span>
                    </el-form-item>
            </el-form>
            <el-form :inline="true">
                <el-form-item >
                    <span class="title-name">按状态</span>
                    <el-select v-model="status" clearable placeholder="全部">
                        <el-option
                        v-for="item in statuss"
                        :key="item.status"
                        :label="item.label"
                        :value="item.status">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item >
                    <span class="title-name">按提现类型</span>
                    <el-select v-model="value" clearable placeholder="全部">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="float:right">
                <el-button type="primary" @click="search()"><i class="el-icon-search"></i>查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
            <el-table-column prop="id" align="center" label="序号">
            </el-table-column>
            <el-table-column prop="amount" align="center" label="提现金额">
            </el-table-column>
            <el-table-column prop="account_type" align="center" label="提现类型" >
                <template slot-scope="scope">
                    <span v-if="scope.row.account_type==1">支付宝</span>
                    <span v-if="scope.row.account_type==2">银行卡</span>
                </template>
            </el-table-column>
            <el-table-column prop="username" align="center" label="提现用户名" >
            </el-table-column>
            <el-table-column prop="account" align="center" label="提现账号">
            </el-table-column>
            <el-table-column prop="opening_bank" align="center" label="开户行" >
                 <template slot-scope="scope">
                    <span v-if="scope.row.account_type==1">支付宝</span>
                    <span v-if="scope.row.account_type==2">
                        {{scope.row.opening_bank}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column prop="status" align="center" label="状态" >
                <template slot-scope="scope">
                    <el-tag size="small" :type="scope.row.is_forbidden | statusFilter"  v-if="scope.row.status == 1">申请中</el-tag>
                    <el-tag size="small"  :type="scope.row.is_forbidden | statusFilter"  v-if="scope.row.status == 2">已通过</el-tag>
                    <el-tag size="small"  :type="scope.row.is_forbidden | statusFilter"  v-if="scope.row.status == 3">已拒绝</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="申请时间" prop="create_time" align="center">
            </el-table-column>
            <el-table-column prop="operation" label="预计到账 ">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:"",
            listLoading:false,
            status:"",
            options:[
                {
                    value:"1",
                    label:"全部"
                },
                {
                    value:"2",
                    label:"银行卡"
                },
                {
                    value:"3",
                    label:"支付宝"
                },
            ],
            statuss:[
                {
                    status:"1",
                    label:"全部"
                },
                 {
                    status:"2",
                    label:"审核中"
                },
                 {
                    status:"3",
                    label:"已通过"
                },
                 {
                    status:"4",
                    label:"已拒绝"
                }
            ],
             tableList: [],
             bank:[],
             alipay:[],
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        search(){
            var data = {
                pageNo:1,
                num:5,
                status:this.status,
                type:this.value
            }
            this.$axios.post('/store/log_query',data).then(res=>{
            // this.tableList = res.data.data.data_list
            // this.total = res.data.data.data_list.length
            console.log(res.data)
            }).catch(err=>{console.log(err)})
        }
    },
    filters: {
    statusFilter(is_forbidden) {
      const statusMap = {
        1: 'warning',
        2: 'success',
        3: 'danger',
      }
      return statusMap[is_forbidden]
    }
  },
    created(){
        // this.$axios.get('/store/account_list',{
            // params:{
            //    pageNo:1,
            //    num:5
            //     }
            // }
            // ).then(res=>{
            //    this.bank = res.data.data.data_list.bank
            //    this.alipay = res.data.data.data_list.zhifubao
            //    for(var i=0;i<this.bank.length;i++){
            //       this.tableList.push(this.bank[i])
            //    }
            //    for(var j=0;j<this.alipay.length;j++){
            //        this.tableList.push(this.alipay[i])
            //    }
            //    console.log(this.tableList);
            //     }).catch(err=>{console.log(err)})
        this.$axios.get('/store/withdrawal_log',{
            params:{
               id:1
                }
            }
            ).then(res=>{
               console.log(res.data.data.data_list)
                this.tableList = res.data.data.data_list             
                }).catch(err=>{console.log(err)})
    }
}
</script>

