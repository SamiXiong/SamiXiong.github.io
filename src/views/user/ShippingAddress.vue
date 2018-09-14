<template>
    <div class="app-container">
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true">
                    <el-form-item>
                        <el-button type="primary" @click="back"><i class="el-icon-plus"></i> 返回</el-button>
                        <span class="title-name">收货地址</span>
                    </el-form-item>
            </el-form>
        </el-col>
        <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
            <el-table-column prop="uid" align="center" label="联系人">
            </el-table-column>
            <el-table-column prop="number" align="center" label="联系方式">
            </el-table-column>
            <el-table-column prop="date" align="center" label="下单时间" >
            </el-table-column>
            <el-table-column prop="number" align="center" label="标记" >
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
             tableList: [
                {
                uid: 1,
                date: "2015-08-10",
                cname: "雷涛",
                title: "Pfrgt Nyhwmzcdz Iclaepebm Rhbloqr Kxtqed Tedogn",
                boolean: true,
                status: 1,
                number: 1221
                }
            ],
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    created(){
        console.log(this.$route.params.id)
        this.$axios.get('/user/charter_record',{
          params:{
              user_id:1
          }
      }).then(res=>{
          console.log(res.data.data)
      }).catch(err=>{console.log(err)})
    }
}
</script>

