<template>
    <div class="app-container">
         <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="限时优惠" name="first">
            <limited></limited>
        </el-tab-pane>
        <el-tab-pane label="每周新品榜" name="second">
            <New></New>
        </el-tab-pane>
        <el-tab-pane label="热租排行榜" name="third">
            <Hot></Hot>
        </el-tab-pane>
  </el-tabs>
    </div>
</template>
<script>
import { Limited ,New ,Hot} from "../../views/operating/components"
  export default {
      components:{
          Limited,
          New,
          Hot
      },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
