<template>
    <div class="app-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户取消" name="first">
            <UserCancelled></UserCancelled>
        </el-tab-pane>
        <el-tab-pane label="自动取消" name="second">
          <autoCancelled></autoCancelled>
        </el-tab-pane>
        <el-tab-pane label="平台拒绝" name="third">
          <platformCancelled></platformCancelled>
        </el-tab-pane>
    </el-tabs>
    </div>
</template>
<script>
import { autoCancelled,UserCancelled,platformCancelled} from "../../views/orderManagement/components"
  export default {
    components:{
      autoCancelled,
      UserCancelled,
      platformCancelled,
    },
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
    created(){
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      applySearch(){
        alert(this.value)
      },
      see(){

      }
    },
  };
</script>