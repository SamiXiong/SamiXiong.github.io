<template>
    <div class="app-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="租赁中" name="first">
            <lease></lease>
        </el-tab-pane>
        <el-tab-pane label="归还中" name="second">
          <back></back>
        </el-tab-pane>
        <el-tab-pane label="逾期未归还" name="third">
          <noBack></noBack>
        </el-tab-pane>
        <el-tab-pane label="维修中" name="fourth">
          <maintenance></maintenance>
        </el-tab-pane>
    </el-tabs>
    </div>
</template>
<script>
import {back,lease,noBack,maintenance} from "../../views/orderManagement/components"
  export default {
    components:{
      back,
      lease,
      noBack,
      maintenance
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