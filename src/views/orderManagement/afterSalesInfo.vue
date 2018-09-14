<template>
    <div class="app-container">

    </div>
</template>
<script>
  export default {
       name: 'ToBePaid',
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
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
       go() {
        
      },
       applySearch(){
         if(this.searchName==""){
            this.$message.warning('查询条件不能为空！')
            return
         }else{
            var data = {
              select:this.value,
              value:this.searchName,
              pageNo:1,
              num:5,
            }
            console.log(data)
            this.$axios.post('/order/return_list',data).then(res=>{
              this.tableList = res.data.data.data_list
              this.total = res.data.data.data_list.length
              console.log(this.total)
            }).catch(err=>{console.log(err)})
         }
       },
       see(row){
        this.$router.push({
              name:"backInfo",
              params:{
                  id:row.id
              }
          })
       }
    },
    created(){
       this.$axios.get('/order/rep_detail',{
            params:{
               order_id:1,
            }
        }).then(res=>{
            this.tableList = res.data.data.data_list
            this.length = this.info.address.length
        }).catch(err=>{console.log(err)})
    }
  };
</script>