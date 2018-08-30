<template>
    <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
            <el-form-item>
                <el-button type="primary" @click="goStoreList"><i class="el-icon-plus"></i> 返回</el-button>
                <span class="title-name">新增门店</span>
            </el-form-item>
      </el-form>
    </el-col>
    <el-row>
        <el-col :span="12">
            <span class="title-name">公司认证信息</span>
        </el-col>
        <el-col :span="12">
            <span class="title-name"></span>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">公司名称:</span>
            </el-col>
            <el-col :span="8">
                <el-input placeholder="小邱网络科技"></el-input>
            </el-col>
        </el-col>
    </el-row>
     <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">法人代表:</span>
            </el-col>
            <el-col :span="8">
                <el-input placeholder="小邱"></el-input>
            </el-col>
        </el-col>
    </el-row>
     <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">法人身份证:</span>
            </el-col>
            <el-col :span="8">
                <el-input placeholder="111111111"></el-input>
            </el-col>
        </el-col>
    </el-row>
     <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">是否三证合一:</span>
            </el-col>
            <el-col :span="8" style="margin-top:10px">
                <el-radio v-model="value" label="1">是</el-radio>
                <el-radio v-model="value" label="2">否</el-radio>
            </el-col>
        </el-col>
    </el-row>
    <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">统一社会信用代码:</span>
            </el-col>
            <el-col :span="8">
                <el-input placeholder="ASASDSDS"></el-input>
            </el-col>
        </el-col>
    </el-row>
     <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">每单获得佣金比例:</span>
            </el-col>
            <el-col :span="8">
                <el-input placeholder="111111111"></el-input>
            </el-col>
        </el-col>
    </el-row>
     <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">意外保障服务:</span>
            </el-col>
            <el-col :span="8" style="margin-top:10px">
                <el-radio v-model="value" label="1">接受</el-radio>
                <el-radio v-model="value" label="2">不接受</el-radio>
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
      searchName: "",
      value:"1"
    };
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
      push(){
          this.$router.push({ path: '/storeManagement/serialNumber'})
      },
      goStoreList(){
          this.$router.push({ path:'/storeManagement/storeList' })
      }
  }
};
</script>

