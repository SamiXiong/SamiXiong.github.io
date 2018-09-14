<template>
    <div class="app-container">
        <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;" class="bottom">
            <el-table-column prop="uid" align="center" label="商品名称">
            </el-table-column>
            <el-table-column prop="number" align="center" label="订单号">
            </el-table-column>
            <el-table-column prop="date" align="center" label="买家账号">
            </el-table-column>
            <el-table-column prop="number" align="center" label="增值服务" >
            </el-table-column>
            <el-table-column prop="number" align="center" label="每月租金" >
            </el-table-column>
            <el-table-column prop="number" align="center" label="规格" >
            </el-table-column>
            <el-table-column prop="operation" label="状态 ">
            </el-table-column>
        </el-table>
        <el-row class="bottom">
            <el-col :span="12">
                <span class="title-name">支付信息</span>
            </el-col>
            <el-col :span="12">
                <span class="title-name">收货人信息</span>
            </el-col>
        </el-row>
        <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">买家姓名</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
           <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">收货人</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
        <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">首期支付</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
           <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">联系电话</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
         <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">下单时间</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
           <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">收货地址</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
        <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">平台确认订单时间</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
           <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">唯一识别码</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
        <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">商家确认订单时间</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
           <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">总租金</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
        <el-row class="bottom">
             <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">商家收入</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
           <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">商品市场价</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
        <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">首期支付</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
           <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">增值服务费</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
         <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">租机信息</span>
               </el-col>
               <el-col :span="8" style="line-height:40px">
                   <el-button size="small" @click="see()">查看详情</el-button>
               </el-col>
            </el-col>
           <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">上上签</span>
               </el-col>
               <el-col :span="8" style="line-height:40px">
                   <el-button size="small" @click="seeContract()">查看上上签合同</el-button>
               </el-col>
            </el-col>
        </el-row>
        <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">租期</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
         <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">账期</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
         <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">用户预约归还时间</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
         <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">预约归还备注信息</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
         <el-row class="bottom">
            <el-col :span="12">
               <el-col :span="6">
                   <span class="title-name">后台确认归还时间</span>
               </el-col>
               <el-col :span="8">
                   <span class="title-name"></span>
               </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        listLoading: false,
        activeName: 'second',
        searchName: "",
        value:"",
        tableList: [],
      };
    },
    created(){
       this.$axios.get('/order/buyout_detail',{
            params:{
               id:1,
            }
        }).then(res=>{
            this.tableList = res.data.data.data_list
            this.length = this.info.address.length
            console.log(this.tableList);
        }).catch(err=>{console.log(err)})
    },
    methods: {
        seeContract(){
             this.$axios.get('/order/return_detail',{
                params:{
                    id:1
                }
            }).then(res=>{
                this.tableList = res.data.data.data_list
                this.length = this.info.address.length
                console.log(this.tableList);
            }).catch(err=>{console.log(err)})
        }
    },
  };
</script>