<template>
    <div class="app-container">
        <el-tabs v-model="activeName" class="tabs">
            <el-tab-pane label="用户信息" name="first">
                <el-row class="bottom">
                    <el-col :span="12">
                        <el-col :span="5">
                            <span class="title-name">用户头像:</span>
                        </el-col>
                    </el-col>
                    <el-col :span="12">
                        <el-col :span="4">
                            <span class="title-name">芝麻信用:</span>
                        </el-col>
                        <el-col :span="8">
                             <span class="title-name">{{info.credit_score}}</span>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="12">
                        <el-col :span="5">
                            <span class="title-name">注册账号:</span>
                        </el-col>
                        <el-col :span="8">
                            <span class="title-name">{{info.tel}}</span>
                        </el-col>
                    </el-col>
                    <el-col :span="12">
                        <el-col :span="4">
                            <span class="title-name">是否学生:</span>
                        </el-col>
                        <el-col :span="8">
                            <span class="title-name" v-if="student">是</span>
                            <span class="title-name" v-if="!student">否</span>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="12">
                        <el-col :span="5">
                            <span class="title-name">真实姓名:</span>
                        </el-col>
                        <el-col :span="8">
                           <span class="title-name">{{info.realname}}</span>
                        </el-col>
                    </el-col>
                    <el-col :span="12">
                        <el-col :span="4">
                            <span class="title-name">用户类型</span>
                        </el-col>
                        <el-col :span="8">
                            <span class="title-name">{{info.user_type}}</span>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="12">
                        <el-col :span="5">
                            <span class="title-name">用户名:</span>
                        </el-col>
                        <el-col :span="8">
                           <span class="title-name">{{info.nickname}}</span>
                        </el-col>
                    </el-col>
                    <el-col :span="12">
                        <el-col :span="4">
                            <span class="title-name">用户状态</span>
                        </el-col>
                        <el-col :span="8">
                           <span class="title-name">{{info.user_status}}</span>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="12">
                        <el-col :span="5">
                            <span class="title-name">身份证号:</span>
                        </el-col>
                        <el-col :span="8">
                            <span class="title-name">{{info.user_status}}</span>
                        </el-col>
                    </el-col>
                    <el-col :span="12">
                        <el-col :span="4">
                            <span class="title-name">是否通过实名认证</span>
                        </el-col>
                        <el-col :span="8">
                            <span class="title-name">{{info.is_certified}}</span>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="12">
                        <el-col :span="5">
                            <span class="title-name">所处地区:</span>
                        </el-col>
                        <el-col :span="8">
                            <el-input placeholder="111111111"></el-input>
                        </el-col>
                    </el-col>
                    <el-col :span="12">
                        <el-col :span="4">
                            <span class="title-name">收获地址</span>
                        </el-col>
                        <el-col :span="8">
                            <span class="title-name">{{length}}个</span>
                            <el-button  type="primary" @click="gosee()">点击查看</el-button>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="12">
                        <el-col :span="5">
                            <span class="title-name">性别:</span>
                        </el-col>
                        <el-col :span="8">
                            <span class="title-name">{{info.sex}}</span>
                        </el-col>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="租机记录" name="second">
                <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
                     <el-table-column prop="uid" align="center" label="商品名称"></el-table-column>
                     <el-table-column prop="uid" align="center" label="订单号"></el-table-column>
                     <el-table-column prop="uid" align="center" label="每月租金"></el-table-column>
                     <el-table-column prop="uid" align="center" label="规格"></el-table-column>
                     <el-table-column prop="uid" align="center" label="下单时间"></el-table-column>
                     <el-table-column prop="uid" align="center" label="店铺"></el-table-column>
                     <el-table-column prop="uid" align="center" label="增值服务"></el-table-column>
                     <el-table-column prop="uid" align="center" label="状态"></el-table-column>
                     <el-table-column prop="uid" align="center" label="操作">
                         <template slot-scope="scope">
                             <el-button type="primary" @click="see()">
                                查看
                             </el-button>
                         </template>
                     </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {
        info:[],
        length:"",
        id:'',
        student:true,
        activeName:"first",
        value:"到底有没有",
        checked1:"",
        checked2:"",
      listLoading: false,
      searchName: "",
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
    };
  },
  created(){
      this.id = this.$route.params.id
      console.log(this.id)
      this.$axios.get('/user/detail',{
          params:{
              user_id:this.id
          }
      }).then(res=>{
          this.info = res.data.data[6]
          if(this.info.is_student_certified=="F"){
              this.student=false;
          }
          this.length = this.info.address.length
          console.log(this.info)
      }).catch(err=>{console.log(err)})
        this.$axios.get('/user/charter_record',{
            params:{
                user_id:this.id
            }
        }).then(res=>{
            console.log(res.data)
            // this.info = res.data.data[6]
            // if(this.info.is_student_certified=="F"){
            //     this.student=false;
            // }
            // this.length = this.info.address.length
            // console.log(this.info)
        }).catch(err=>{console.log(err)})
       
  },
  methods: {
    go() {
        this.$prompt('请输入邮箱', '提示', {
          title: "新增/编辑品牌",
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      gosee(){
          this.$router.push({
              name:'ShippingAddress',
              params:{
                  id:this.id
              }
          })
      },
      push(){
          this.$router.push({ path: '/storeManagement/serialNumber'})
      },
      back(){
          this.$router.go(-1)
      }
  }
};
</script>
