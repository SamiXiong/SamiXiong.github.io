<template>
    <div class="app-container">
    <el-row :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
            <el-form-item>
                <el-button type="primary" @click="back"><i class="el-icon-plus"></i> 返回</el-button>
                <span class="title-name">新增门店</span>
            </el-form-item>
      </el-form>
    </el-row>
    <el-row class="bottom">
        <el-col :span="12">
            <span class="title-name">公司认证信息</span>
        </el-col>
        <el-col :span="12">
            <span class="title-name">门店详细信息</span>
        </el-col>
    </el-row>
    <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">上传头像:</span>
            </el-col>
            <el-col :span="8">
                <form action="" name="myform">
                    <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" style="margin-top:8px">
                </form>
            </el-col>
        </el-col>
    </el-row>
    <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">公司名称:</span>
            </el-col>
            <el-col :span="8">
                <el-input  v-model="companyName"></el-input>
            </el-col>
        </el-col>
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">主营类目:</span>
            </el-col>
            <el-col :span="8" style="margin-top:10px">
                <el-checkbox >品牌电脑</el-checkbox>
                <el-checkbox >优享手机</el-checkbox>
            </el-col>
        </el-col>
    </el-row>
     <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">法人代表:</span>
            </el-col>
            <el-col :span="8">
                <el-input  v-model="legalPerson"></el-input>
            </el-col>
        </el-col>
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">门店名称:</span>
            </el-col>
            <el-col :span="8">
                <el-input  v-model="storeName"></el-input>
            </el-col>
        </el-col>
    </el-row>
     <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">法人身份证:</span>
            </el-col>
            <el-col :span="8">
                <el-input  v-model="idCard"></el-input>
            </el-col>
        </el-col>
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">门店地址</span>
            </el-col>
            <el-col :span="8">
                <el-input v-model="address"></el-input>
            </el-col>
        </el-col>
    </el-row>
     <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">是否三证合一:</span>
            </el-col>
              <el-radio-group v-model="is_three_certificate" style="margin-top:10px">
                <el-radio :label="1">是</el-radio>
                <el-radio :label="3">不是</el-radio>
                </el-radio-group>
        </el-col>
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">门店联系人</span>
            </el-col>
            <el-col :span="8">
                <el-input v-model="contact"></el-input>
            </el-col>
        </el-col>
    </el-row>
    <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">统一社会信用代码:</span>
            </el-col>
            <el-col :span="8">
                <el-input  v-model="code"></el-input>
            </el-col>
        </el-col>
         <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">联系方式</span>
            </el-col>
            <el-col :span="8">
                <el-input v-model="phone"></el-input>
            </el-col>
        </el-col>
    </el-row>
    <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">每单获得佣金比例:</span>
            </el-col>
            <el-col :span="8">
                <el-input v-model="commission"></el-input>
            </el-col>
        </el-col>
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">门店电话</span>
            </el-col>
            <el-col :span="8">
                <el-input  v-model="storePhone"></el-input>
            </el-col>
        </el-col>
    </el-row>
    <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">工商注册号</span>
            </el-col>
            <el-col :span="8">
                <el-input v-model="commission"></el-input>
            </el-col>
        </el-col>
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">组织机构代码证</span>
            </el-col>
            <el-col :span="8">
                <el-input  v-model="storePhone"></el-input>
            </el-col>
        </el-col>
    </el-row>
     <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">意外保障服务:</span>
            </el-col>
            <el-radio-group v-model="accident_protection_service" style="margin-top:10px">
                <el-radio :label="1">提供</el-radio>
                <el-radio :label="2">不提供</el-radio>
            </el-radio-group>
        </el-col>
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">门店账号</span>
            </el-col>
            <el-col :span="8">
                <el-input  v-model="StoreAccount"></el-input>
            </el-col>
        </el-col>
    </el-row>
    <el-row class="bottom">
        <el-col :span="12" style="float:right">
            <el-col :span="4">
                <span class="title-name">门店密码</span>
            </el-col>
            <el-col :span="8">
                <el-input  v-model="StorePasswords"></el-input>
            </el-col>
        </el-col>
    </el-row>
    <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">营业执照:</span>
            </el-col>
            <el-col :span="8" style="margin-top:10px">
                
            </el-col>
        </el-col>
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">合同印章照片</span>
            </el-col>
            <el-col :span="8">
                <img :src="imageUrl" alt="">
            </el-col>
        </el-col>
    </el-row>
     <el-row class="bottom">
        <el-col :span="12">
            <el-col :span="5">
                <span class="title-name">身份证正面:</span>
            </el-col>
            <el-col :span="8">
                <img :src='business_license_url'>
            </el-col>
        </el-col>
        <el-col :span="12">
            <el-col :span="4">
                <span class="title-name">身份证反面</span>
            </el-col>
            <el-col :span="8">
                
            </el-col>
        </el-col>
    </el-row>
    <el-row>
         <el-button size="middle" type="primary"  @click="save()" v-if="storeid">保存</el-button>
          <el-button size="middle" type="primary"  @click="add()" v-if="!storeid">新增</el-button>
    </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      baseUrl:'https://52zuji.oss-cn-hangzhou.aliyuncs.com',
      storeid:false,
      accident_protection_service:"2",
      info:[],
      listLoading: false,
      searchName: "",
      is_three_certificate:"",
      companyName:"",
      storeName:"",
      idCard:"",
      address:"",
      contact:"",
      code:"",
      phone:"",
      commission:"",
      storePhone:"",
      StoreAccount:"",
      StorePasswords:"",
      legalPerson:"",
      business_license_url:"",
      imageUrl: '',
      upFile:'',
    };
  },
  methods: {
     
    go() {
      },
      push(){
          this.$router.push({ path: '/storeManagement/serialNumber'})
      },
      back(){
          this.$router.go(-1)
      },
      save(){
          var data = {
            enterprise_name:this.companyName,
            realname:this.legalPerson,
            id_number:this.idCard,
            is_three_certificate:this.is_three_certificate,
            tax_code:this.code,
            platform_commission_rate_per_order:this.commission,
            accident_protection_service:this.accident_protection_service,
            business_license_url:this.business_license_url,
            name:this.storeName,
            store_address:this.address,
            contact_person:this.contact,
            tel:this.phone,
            store_phone:this.storePhone,
            user_id:this.info.user_id,
            store_id:this.$route.params.id
        }
        console.log(data)
        this.$axios.post('/store/store',data).then(res=>{
           console.log(res.data)
        }).catch(err=>{console.log(err)})
      },
      add(){
          console.log(this.is_three_certificate);
          this.upFile=document.myform.file.value
          console.log(this.upFile)
        //   var data = {
        //     enterprise_name:this.companyName,
        //     realname:this.legalPerson,
        //     id_number:this.idCard,
        //     is_three_certificate:this.is_three_certificate,
        //     tax_code:this.code,
        //     platform_commission_rate_per_order:this.commission,
        //     accident_protection_service:this.accident_protection_service,
        //     business_license_url:this.business_license_url,
        //     name:this.storeName,
        //     store_address:this.address,
        //     contact_person:this.contact,
        //     tel:this.phone,
        //     store_phone:this.storePhone,
        //     user_id:this.info.user_id,
        //     store_id:this.$route.params.id
        // }
        // console.log(data)
        // this.$axios.post('/store/store_add',data).then(res=>{
        //    console.log(res.data)
        // }).catch(err=>{console.log(err)})
      },
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        alert(this.imageUrl)
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
  },
  created () {
       this.storeid=this.$route.params.id
       console.log(this.storeid)
       if(this.$route.params.id==""){
          
       }else{
           this.storeid= true
           this.$axios.get('/store/store',{
            params:{
               store_id:this.$route.params.id
                }
            }
            ).then(res=>{
               console.log(res.data.data)
               this.info = res.data.data
               this.companyName = this.info.enterprise_name
               this.legalPerson = this.info.realname
               this.storeName = this.info.name
               this.idCard = this.info.id_number
               this.address = this.info.store_address
               this.contact = this.info.contact_person
               this.code = this.info.tax_code
               this.phone = this.info.tel
               this.commission = this.info.platform_commission_rate_per_order
               this.storePhone = this.info.store_phone
               this.is_three_certificate = this.info.is_three_certificate
               this.accident_protection_service = this.info.accident_protection_service
            //    this.StoreAccount = this.
                this.business_license_url = this.info.business_license_url
                }).catch(err=>{console.log(err)})
       }
  }
};
</script>
<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .avatar {
        width: 50px;
        height: 50px;
        display: block;
    }
</style>

