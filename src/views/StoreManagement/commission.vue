<template>
    <div class="app-container">
        <el-row :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true">
                    <el-form-item>
                        <el-button type="primary" @click="back"><i class="el-icon-plus"></i> 返回</el-button>
                        <span class="title-name">佣金统计</span>
                    </el-form-item>
            </el-form>
        </el-row>
        <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;" class="bottom">
            <el-table-column prop="rest" align="center" label="当前账户余额"></el-table-column>
            <el-table-column prop="total" align="center" label="赚取交易金额"></el-table-column>
            <el-table-column prop="after_cash" align="center" label="已提现金额" ></el-table-column>
            <el-table-column prop="in_cash" align="center" label="正在审核中" ></el-table-column>
            <el-table-column label="操作" 
            align="center">
                <template slot-scope="scope">
                    <div @clcik="record()" class="cursor">提现记录</div>
                    <div @click="account()" class="cursor">提现账号</div>
                </template>
            </el-table-column>
        </el-table>
        <el-col :span="24" class="toolbar" >
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
        <el-form-item>
            <span class="title-name" style="margin-right:15px;">金额来源</span>
            <el-select v-model="amount" clearable placeholder="请选择">
                    <el-option
                    v-for="item in amount_of_source"
                    :key="item.amount"
                    :label="item.source"
                    :value="item.amount">
                    </el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="search()" style="float:right">查询</el-button>
        </el-form-item>
        </el-form>
        </el-col>
        <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;" class="bottom">
            <el-table-column prop="goods_name" align="center" label="商品名称"></el-table-column>
            <el-table-column prop="sku_name" align="center" label="规格"></el-table-column>
            <el-table-column prop="realname" align="center" label="买家" ></el-table-column>
            <el-table-column prop="serial_number" align="center" label="唯一识别码" ></el-table-column>
            <el-table-column prop="order_no" align="center" label="订单号" ></el-table-column>
            <el-table-column prop="amount_of_source" align="center" label="金额来源" ></el-table-column>
            <el-table-column prop="store_revenue" align="center" label="入账金额" ></el-table-column>
            <el-table-column prop="create_time" align="center" label="入账时间" ></el-table-column>
            <el-table-column label="操作" 
            align="center">
                <template slot-scope="scope">
                    <div>查看订单</div>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="total, prev, pager, next"
                    background
                    :page-size="pageSize"
                    :total="total"
                    style="text-align:center;">
        </el-pagination>
    </div>
</template>
<script>
export default {
    data(){
        return{
            amount:"",
            value:"",
            label:"",
            source:"",
            searchContent:"",
            listLoading:false,
            tableList: [],
            total:0,
            pageSize:5,
            options:[
                {
                    value:"1",
                    label: "买家用户名"
                },
                {
                    value:"2",
                    label: "订单号"
                },
                {
                    value:"3",
                    label: "序列号"
                },
                {
                    value:"4",
                    label: "商品名称"
                },

            ],
            amount_of_source:[
                {
                    amount:"1",
                    source: "首期租金"
                },
                {
                    amount:"2",
                    source: "第一期租金"
                },
                {
                    amount:"3",
                    source: "逾期罚金"
                },
                {
                   amount:"4",
                    source: "商品买断"
                },

            ]
        }
    },
    methods: {
            back(){
                this.$router.push(-1)
            },
            search(){
                if(this.searchContent==""){
                    this.$message.warning('查询条件不能为空！')
                    return
                }else{
                      var data = {
                        store_id:1,
                        select_1:this.value,
                        select_2:this.amount,
                        value:this.searchContent
                }
                this.$axios.post('/store/commission_query',data).then(res=>{
                    console.log(res.data)
                }).catch(err=>{console.log(err)})
                }
            },
            account(){
                 this.$router.push({
                    name:'Cash',
                    params:{
                    id:1
                    }
                })
            },
            recode(){}
        },
    created() {
            this.$axios.get('/store/commission',{
            params:{
            store_id:1
                }
            }
            ).then(res=>{
               this.tableList.push(res.data.data.data_list[0])
               console.log(this.tableList)
               this.total = this.tableList.length
            }).catch(err=>{console.log(err)})
    }
}
</script>

