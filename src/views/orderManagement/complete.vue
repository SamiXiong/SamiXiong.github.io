<template>
    <div class="app-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="如期归还" name="first">
            <cheduled></cheduled>
        </el-tab-pane>
        <el-tab-pane label="逾期归还" name="second">
          <Within></Within>
        </el-tab-pane>
        <el-tab-pane label="商品买断" name="third">
          <buyout></buyout>
        </el-tab-pane>
    </el-tabs>
    </div>
</template>
<script>
import { Within,cheduled,buyout} from "../../views/orderManagement/components"
  export default {
    components:{
      Within,
      cheduled,
      buyout,
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