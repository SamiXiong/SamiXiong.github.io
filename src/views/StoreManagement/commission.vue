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
            <el-table-column prop="uid" align="center" label="当前账户余额"></el-table-column>
            <el-table-column prop="number" align="center" label="赚取交易金额"></el-table-column>
            <el-table-column prop="date" align="center" label="已提现金额" ></el-table-column>
            <el-table-column prop="title" align="center" label="正在审核中" ></el-table-column>
            <el-table-column label="操作" 
            align="center">
                <template slot-scope="scope">
                    <div>提现记录</div>
                    <div>提现账号</div>
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
          <el-input placeholder="" v-model="value"></el-input>
        </el-form-item>
        <el-form-item>
            <span class="title-name" style="margin-right:15px;">金额来源</span>
            <el-select v-model="value" clearable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
            </el-select>
        </el-form-item>
        </el-form>
        </el-col>
        <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;" class="bottom">
            <el-table-column prop="uid" align="center" label="商品名称"></el-table-column>
            <el-table-column prop="number" align="center" label="规格"></el-table-column>
            <el-table-column prop="date" align="center" label="买家" ></el-table-column>
            <el-table-column prop="title" align="center" label="唯一识别码" ></el-table-column>
            <el-table-column prop="number" align="center" label="订单号" ></el-table-column>
            <el-table-column prop="number" align="center" label="金额来源" ></el-table-column>
            <el-table-column prop="number" align="center" label="入账金额" ></el-table-column>
            <el-table-column prop="date" align="center" label="入账时间" ></el-table-column>
            <el-table-column label="操作" 
            align="center">
                <template slot-scope="scope">
                    <div>查看订单</div>
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
    data(){
        return{
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
            ],
            options:[
                {
                    value:"1",
                    label: "序列号"
                },
                {
                    value:"2",
                    label: "门店名"
                }

            ]
        }
    },
    methods: {
            back(){
                this.$router.push(-1)
            }
        }
}
</script>

