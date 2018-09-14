<template>
    <div class="app-container">
        <el-button size="samll" type="warning" style="margin-bottom:10px" @click="back()">返回</el-button>
        <span class="title-name tabs">查看商品</span>
        <el-tabs v-model="activeName" class="tabs">
            <el-tab-pane label="商品基本信息" name="first">
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">商品名称:</span>
                    </el-col>
                    <el-col :span="4">
                        <span class="title-name">{{info.goods_name}}</span>
                    </el-col>
                     <el-col :span="2">
                        <span class="title-name">商品品牌</span>
                    </el-col>
                    <el-col :span="4">
                        <span class="title-name">{{info.brand_name}}</span>
                    </el-col>
                     <el-col :span="2">
                        <span class="title-name">商品分类</span>
                    </el-col>
                    <el-col :span="4">
                        <span class="title-name">{{info.category_name}}</span>
                    </el-col>
                </el-row>
               
                <el-row class="bottom">
                    <el-col :span="8">
                        <span class="title-name">租金（元）：</span>
                        <span class="title-name">{{info.rent_daily_price}}</span>
                    </el-col>
                    <el-col :span="8">
                        <span class="title-name">市场指导价（元）：</span>
                        <span class="title-name">{{info.market_price}}</span>
                    </el-col>
                    <el-col :span="8">
                        <span class="title-name">意外保证金（元）：</span>
                        <span class="title-name">{{info.contingent_security_price}}</span>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="12">
                        <span class="title-name ">商品规格：</span>
                        <input type="text" disabled placeholder="128G" class="input-box">
                    </el-col>
                    <el-col :span="12">
                        <span class="title-name ">意外保障金文案</span>
                        <span class="title-name">{{info.copy_contingency_fund}}</span>
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
                        <span class="title-name">租赁周期</span>
                    </el-col>
                    <el-col :span="10">
                        <span class="title-name">{{info.period}}</span>
                    </el-col>
                </el-row>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">
                            商品规格
                        </span>
                    </el-col>
                </el-row>
                <el-table :data="table" border class="bottom">
                    <el-table-column label="缩率图" prop="front_img"></el-table-column>
                    <el-table-column label="颜色" prop="color"></el-table-column>
                    <el-table-column label="租赁周期" prop="period"></el-table-column>
                    <el-table-column label="单日租金" prop="rent_daily_price"></el-table-column>
                    <el-table-column label="总租金" prop="total_rent_price"></el-table-column>
                    <el-table-column label="买断价" prop="buyout_price"></el-table-column>
                    <el-table-column label="市场指导价" prop="market_price"></el-table-column>
                    <el-table-column label="溢价" prop="premium_price"></el-table-column>
                    <el-table-column label="特价开始时间" prop="spec_begin"></el-table-column>
                    <el-table-column label="特价结束" prop="spec_end"></el-table-column>
                    <el-table-column label="库存" prop="total_stock"></el-table-column>
                </el-table>
                <el-row class="bottom">
                    <el-col :span="2">
                        <span class="title-name">总库存</span>
                    </el-col>
                    <el-col :span="6">
                        <span class="title-name">{{info.total_stock}}</span>
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
                    <el-col :span="4">
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
                <div>
                    
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data (){
        return{
            id:"",
            radio:"2",
            searchName:"",
            info:[],
            table:[],
            imginfo:[],
           activeName: 'first',
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    created(){
        this.id = this.$route.params.id
        this.$axios.get('/goods/look',{
            params:{
                goods_id:this.id
            }}).then(res=>{
                this.info = res.data.data
                this.table.push(this.info)
            }).catch(err=>{console.log(err)})
         this.$axios.get('/goods/detail_look',{
            params:{
                goods_id:this.id
            }}).then(res=>{
                var data = res.data.data
                this.imginfo.push(data.front_img,data.carousel_figure_img,data.specification_sheet_img,data.costs_img,data.rental_flow_chart_img)
                console.log(this.imginfo)
            }).catch(err=>{console.log(err)})
    }
}
</script>
