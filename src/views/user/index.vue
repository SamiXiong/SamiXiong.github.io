<template>
  <div class="app-container">
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item>
          <el-select v-model="value" clearable placeholder="状态">
              <el-option
                v-for="item in status"
                :key="item.statusId"
                :label="item.label"
                :value="item.statusId">
              </el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item >
          <el-input  v-model="searchName"></el-input>
        </el-form-item>
        <el-form-item style="float:right">
           <el-button type="primary" @click="doFilter()"><i class="el-icon-search"></i>查询</el-button>
        </el-form-item>
        <el-row>
         <el-form-item>
          <el-select v-model="value1" clearable placeholder="请选择芝麻信用分">
              <el-option
                v-for="item in status"
                :key="item.value1"
                :label="item.label"
                :value="item.value1">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="float:right">
           <el-button type="primary" @click="search()"><i class="el-icon-search"></i>查询</el-button>
        </el-form-item>
      </el-row>
      </el-form>
    </el-col>
    <!--列表-->
    <el-table :data="tableList" v-loading="listLoading" border element-loading-text="拼命加载中" style="width: 100%;">
         <el-table-column prop="id" label="用户编号" width="100">
           </el-table-column>
      <el-table-column prop="nickname" label="用户名" width="100">
      </el-table-column>
      <el-table-column prop="realname" label="真实姓名" width="100" >
      </el-table-column>
      <el-table-column prop="tel" min-width="75" label="账号" >
      </el-table-column>
      <el-table-column label="芝麻信用分" width="110px">
        500
      </el-table-column>
      <el-table-column prop="create_time" label="注册时间" width="110px">
      </el-table-column>
      <el-table-column  label="状态" width="120" >
        <template slot-scope="scope">
          <el-tag size="small" :type="scope.row.is_forbidden | statusFilter" v-if="scope.row.is_forbidden == 1">启用</el-tag>
          <el-tag size="small"  :type="scope.row.is_forbidden | statusFilter" v-if="scope.row.is_forbidden == 2">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作 ">
        <template slot-scope="scope" >
         <el-button size="small" type="primary"  @click="seeuser(scope.row)">查看</el-button>
         <el-button v-if="scope.row.is_forbidden!='1'" size="mini" type="success" @click="handleModifyStatus(scope.row,'1')">启用
          </el-button>
          <el-button v-if="scope.row.is_forbidden!='2'" size="mini" @click="handleModifyStatus(scope.row,'2')">禁用
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--工具条-->
    <el-pagination layout="total, prev, pager, next"
                    background
                    :page-size="pageSize"
                    @size-change="handleSizeChange"
                    :total="total"
                    :current-page="currentpage"
                    @current-change="handleCurrentChange"
                    style="text-align:center;">
    </el-pagination>


    <!-- 新增编辑院校 -->
    <!-- <el-dialog title="Edit" :visible.sync="isShowEditVisible">
      <el-form label-width="80px" :model="temp" ref="dataForm">
        <el-form-item label="姓名" prop="cname">
          <el-input v-model="temp.cname"></el-input>
        </el-form-item>
        <el-form-item label="时间" prop="date">
          <el-input v-model="temp.date"></el-input>
        </el-form-item>
        <el-form-item label="状态" v-model="temp.status">
         <el-select v-model="temp.status" placeholder="启用状态">
            <el-option v-for="item in status"
                       :label="item.label"
                       :value="item.statusId"
                       :key="item.statusId"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowEditVisible = false">取消</el-button>
        <el-button type="primary" :loading="listLoading" @click="updateData" class="title1">确定</el-button>
      </div>
    </el-dialog> -->

    <!-- 删除弹框 -->
    <el-dialog
      title="删除"
      :visible.sync="deleteVisible"
      width="30%">
      <span>确认删除吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>



<script>
import { getList, updateArticle } from '@/api/table'
export default {
  data() {
    return {
      value1:"",
      currentpage:1,
      tableList: [],
      listLoading: true,
      isShowEditVisible: false,
      deleteVisible: false,
      temp: {
        uid: '',
        cname: '',
        date: '',
        status: ''
      },
      total: 0,
      page: 1,
      pageSize: 5,
      status: [
        {
          value1: 1,
          label: '600分以下'
        }, {
          value1: 2,
          label: '600-649'
        }, {
          value1: 3,
          label: '650-679'
        }, {
          value1: 4,
          label: '680-700'
        }, {
          value1: 5,
          label: '700以上'
        }
      ],
      options: [
        {
          value: '1',
          label: '账号'
        }, {
          value: '2',
          label: '用户名'
        }, {
          value: '3',
          label: '真实姓名'
        }],
      value: '',
      searchName: '',
      filterTableDataEnd: []
    }
  },
  created() {
    this.fetchData()
  },
  filters: {
    statusFilter(is_forbidden) {
      const statusMap = {
        1: 'success',
        2: 'danger'
      }
      return statusMap[is_forbidden]
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true
      // getList(this.listQuery).then(response => {
      //   const limit = 10
      //   const pageList = response.data.filter((item, index) => index < limit * this.page && index >= limit * (this.page - 1))
      //   console.log(pageList)
      //   this.total = response.data.length
      //   this.tableList = pageList
      //   this.listLoading = false
      // })
      this.$axios.get('/user/index',{
        params:{
          pageNO:this.currentpage,
          num:this.pageSize
        }
      }).then(res=>{
        this.tableList = res.data.data.data_list
        console.log(this.tableList)
        // console.log(res.data.data.data_list.length);
        this.total = res.data.data.data_list.length
        this.listLoading = false
      }).catch(err=>{console.log(err)})
    },
    doFilter() {
      if (this.searchName === '') {
        this.$message.warning('查询条件不能为空！')
        return
      }else{
        var data = {
           select1:this.value,
            value:13788886666,
            pageNo:1,
            num:3
        }
        this.$axios.post('/user/query1',data).then(res=>{
          this.tableList = res.data.data.data_list
          this.total = res.data.data.data_list.length
        }).catch(err=>{console.log(err)})
      }
      console.log(this.searchName)
      // 每次手动将数据置空,因为会出现多次点击搜索情况
      this.filterTableDataEnd = []
      this.tableList.forEach((value, index) => {
        if (value.cname) {
          if (value.cname.indexOf(this.searchName) >= 0) {
            this.filterTableDataEnd.push(value)
            console.log(this.filterTableDataEnd)
          }
        }
      })
      // 页面数据改变重新统计数据数量和当前页
      this.page = 1
      this.total = this.filterTableDataEnd.length
      // 渲染表格,根据值
      this.currentChangePage(this.filterTableDataEnd)
    },
    search(){
      if(this.value1==""){
        this.$message.warning('查询条件不能为空！')
      }else{
        let data = {
          select2 : this.value1,
          pageNo:1,
            num:3
        }
         this.$axios.post('/user/query2',data).then(res=>{
           this.tableList = res.data.data.data_list
           console.log(res.data.data.data_list);
         }).catch(err=>{
           console.log(err)
         })
      }
    },
    clickfun(e) {
      console.log(e.target.innerText)
    },
    seeuser(row) {
      this.$router.push({
        name:'userinfo',
        params:{
          id:row.id
        }
      })
    },
    deleteUpdate(row) {
      console.log(row)
      this.deleteVisible = true
      this.temp = Object.assign({}, row)
      // console.log(row)
    },
    submitDelete() {
      const tempData = Object.assign({}, this.temp)
      console.log(tempData)
      console.log(this.tableList)
      for (const v of this.tableList) {
        if (v.uid === this.temp.uid) {
          const index = this.tableList.indexOf(v)
          this.tableList.splice(index, 1)
          this.fetchData()
          console.log(this.tableList)
          break
        }
      }
      this.deleteVisible = false
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      console.log(row)
      row.is_forbidden = status
      console.log(status),
      console.log(row.is_forbidden)
      console.log(row.id)
      this.$axios.get('/user/forbidden',{
        params:{
          user_id : row.id,
          is_forbidden : row.is_forbidden
        }
      }).then(res=>{
          console.log(res.data.code)
        }).catch(err=>{console.log(err)})
      
    },
    updateData() {
      const tempData = Object.assign({}, this.temp)
      console.log(tempData)
      updateArticle(tempData).then(() => {
        for (const v of this.tableList) {
          if (v.uid === this.temp.uid) {
            const index = this.tableList.indexOf(v)
            this.tableList.splice(index, 1, this.temp)
            break
          }
        }
        this.isShowEditVisible = false
        this.$notify({
          title: '成功',
          message: '更新成功',
          type: 'success',
          duration: 2000
        })
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      console.log(this.pageSize)
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.pageSize = val
      console.log(this.pageSize)
      this.fetchData()
    },
    currentChangePage(list) {
      let from = (this.page - 1) * this.pageSize
      const to = this.page * this.pageSize
      this.tableList = []
      for (; from < to; from++) {
        if (list[from]) {
          this.tableList.push(list[from])
        }
      }
    }
  }
}
</script>