<template>
    <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
            <el-form-item>
                <el-button type="primary" @click="back"><i class="el-icon-plus"></i> 返回</el-button>
                <el-button type="danger" @click="go"><i class="el-icon-plus"></i> 新增</el-button>
            </el-form-item>
      </el-form>
    </el-col>
        <el-col :span="24">
            <span class="title-name">支付宝</span>
        </el-col>
    <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
        <el-table-column prop="uid" align="center" label="支付宝账户">
        </el-table-column>
      <el-table-column prop="number" align="center" label="真实姓名">
      </el-table-column>
      <el-table-column prop="operation" label="操作 " align="center">
        <template slot-scope="scope" >
         <el-button size="small" type="primary" @click="AliPay = true">编辑</el-button>
         <el-dialog title="新增支付宝账号" :visible.sync="AliPay" width="40%">
            <el-form :model="form">
                <el-form-item label="支付宝账号" :label-width="formLabelWidth">
                <el-input v-model="form.number" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="AliPay = false">取 消</el-button>
                <el-button type="primary" @click="AliPay = false">确 定</el-button>
            </div>
         </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="bottom">
        <el-col :span="24">
            <span class="title-name">银行卡</span>
        </el-col>
    </el-row>
    <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
        <el-table-column prop="uid" align="center" label="银行卡号">
        </el-table-column>
      <el-table-column prop="number" align="center" label="真实姓名">
      </el-table-column>
      <el-table-column prop="number" align="center" label="开户银行">
      </el-table-column>
      <el-table-column prop="operation" label="操作 " align="center">
        <template slot-scope="scope" >
         <el-button size="small" type="primary"  @click="BankCard = true">编辑</el-button>
         <el-dialog title="新增银行卡账号" :visible.sync="BankCard" width="40%">
            <el-form :model="form">
                <el-form-item label="银行卡号" :label-width="formLabelWidth">
                <el-input v-model="form.number" auto-complete="off" ></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="开户银行" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="BankCard = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
         </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      number: "",
      goods:[],
       BankCard: false,
        AliPay: false,
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
      listLoading: false,
      form: {
          name: '',
          region: '',
          number:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '80px',
      searchName: "",
      value:""
    };
  },
  methods: {
    back() {
       this.$router.go(-1)
      },
      push(){
          this.$router.push({ path: '/storeManagement/serialNumber'})
      },
      goNewStores(){
          this.$router.push({ path:'/storeManagement/newStores' })
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

