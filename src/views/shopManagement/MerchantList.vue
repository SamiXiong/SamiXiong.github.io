<template>
    <div class="app-container">
        <el-button size="samll" type="warning" style="margin-bottom:10px">返回</el-button>
        <span class="title-name tabs">查看商品</span>
        <el-tabs v-model="activeName" class="tabs">
            <el-tab-pane label="商品基本信息" name="first">
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">商品名称:</span>
                    </el-col>
                    <el-col :span="4">
                        <span class="title-name">苹果手机</span>
                    </el-col>
                     <el-col :span="2">
                        <span class="title-name">意外保证金文案:</span>
                    </el-col>
                    <el-col :span="4">
                        <span class="title-name">苹果意外保证金文案</span>
                    </el-col>
                     <el-col :span="3">
                        <span class="title-name">意外保证金（元）:</span>
                    </el-col>
                    <el-col :span="4">
                        <span class="title-name">3000</span>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">市场指导价(元):</span>
                    </el-col>
                    <el-col :span="4">
                        <span class="title-name">4000</span>
                    </el-col>
                     <el-col :span="2">
                        <span class="title-name">溢价（元）:</span>
                    </el-col>
                    <el-col :span="4">
                        <span class="title-name">100</span>
                    </el-col>
                     <el-col :span="3">
                        <span class="title-name">买断系数:</span>
                    </el-col>
                    <el-col :span="4">
                        <span class="title-name">3000</span>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="8">
                        <span class="title-name">租金（元）：</span>
                        <input type="text" disabled placeholder="300" class="input-text">
                    </el-col>
                    <el-col :span="8">
                        <span class="title-name">市场指导价（元）：</span>
                        <input type="text" disabled placeholder="300" class="input-text">
                    </el-col>
                    <el-col :span="8">
                        <span class="title-name">意外保证金（元）：</span>
                        <input type="text" disabled placeholder="300" class="input-text">
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <span class="span-title">
                        一次性支付优惠比例
                        （只针对三十天以上）
                    </span>
                    <el-col :span="3" class="float">
                        <span>
                            1
                        </span>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="16">
                        <span class="title-name ">商品规格：</span>
                        <input type="text" disabled placeholder="128G" class="input-text" style="margin-left:49px">
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">
                            规格1
                        </span>
                    </el-col>
                    <input type="text" disabled placeholder="红色" class="input-box">
                </el-row>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">尺码</span>
                    </el-col>
                    <el-col :span="10">
                        <input type="text" disabled placeholder="大包" class="input-box">
                        <input type="text" disabled placeholder="小包" class="input-box">
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">租赁周期</span>
                    </el-col>
                    <el-col :span="10" style="margin-top:11px;margin-left:11px">
                        <el-radio v-model="radio" label="1">一周期</el-radio>
                        <el-radio v-model="radio" label="2">二周期</el-radio>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">
                            商品规格
                        </span>
                    </el-col>
                </el-row>
                <el-table :data="tables" border class="bottom">
                    <el-table-column label="缩率图" prop="img"></el-table-column>
                    <el-table-column label="颜色" prop="color"></el-table-column>
                    <el-table-column label="租赁周期" prop="time"></el-table-column>
                    <el-table-column label="单日租金" prop="time"></el-table-column>
                    <el-table-column label="总租金" prop="money"></el-table-column>
                    <el-table-column label="买断价" prop="price"></el-table-column>
                    <el-table-column label="市场指导价" prop="guided"></el-table-column>
                    <el-table-column label="溢价" prop="guided"></el-table-column>
                    <el-table-column label="特价开始时间" prop="penalty"></el-table-column>
                    <el-table-column label="特价结束" prop="province"></el-table-column>
                    <el-table-column label="库存" prop="number"></el-table-column>
                </el-table>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">总库存</span>
                    </el-col>
                    <el-col :span="6">
                        <input type="text" disabled placeholder="2" class="input-box">
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">已启用库存</span>
                    </el-col>
                    <el-col :span="6">
                        <input type="text" disabled placeholder="2" class="input-box">
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">商品状态已启用</span>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">增值服务：</span>
                    </el-col>
                    <el-col :span="8">
                        <el-row>
                            <span class="title-name">
                                <i class="icon iconfont icon-dagou"></i>
                                <i>手机壳</i>
                                <i>30(元) 可选</i>
                            </span>
                        </el-row>
                        <el-row>
                            <span class="title-name">
                                <i class="icon iconfont icon-dagou"></i>
                                <i>手机膜</i>
                                <i>30(元) 可选</i>
                            </span>
                        </el-row>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="商品详细信息" name="second">
                <div>详细信息组件</div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data (){
        return{
            radio:"2",
            searchName:"",
           activeName: 'first',
           tables:[
               {
                  img:"11111",
                  color:"红色",
                  time:"5天",
                  money:"5000",
                  number:"10",
                  price:"5000",
                  penalty:"20",
                  guided:"5000",
                  province:"200" 
               }
           ]
        }
    }
}
</script>
