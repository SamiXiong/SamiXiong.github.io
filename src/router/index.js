import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  // 用户管理
  {
    path: '/table',
    component: Layout,
    // redirect: '/table/index',
    name: 'table',
    meta: { icon: 'example' },
    hidden: false,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/table/index'),
        meta: { title: '用户列表', icon: 'table' }
      }
      // {
      //   path: 'tree',
      //   name: 'Tree',
      //   component: () => import('@/views/tree/index'),
      //   meta: { title: 'Tree', icon: 'tree' }
      // },
      // {
      //   path: 'fullcalendar',
      //   name: 'Fullcalendar',
      //   component: () => import('@/views/fullcalendar/fullcalendar'),
      //   meta: { title: '日历', icon: 'tree' }
      // }
    ]
  },
  // 商品参数
  {
    path: '/shop',
    // component: () => import('@/views/user/index')
    component: Layout,
    redirect: '/shop/ClassificationList',
    name: 'shop',
    meta: { title: '商品参数', icon: 'table' },
    children: [
      {
        path: 'ClassificationList',
        name: 'ClassificationList',
        component: () => import('@/views/shop/ClassificationList'),
        meta: { title: '分类列表', icon: 'table' }
      },
      {
        path: 'BrandList',
        name: 'BrandList',
        component: () => import('@/views/shop/BrandList'),
        meta: { title: '品牌列表', icon: 'table' }
      },
      {
        path: 'leasePeriod',
        name: 'leasePeriod',
        component: () => import('@/views/shop/leasePeriod'),
        meta: { title: '租赁周期', icon: 'table' }
      }
    ]
  },
  // 商品管理
  {
    path: '/shopManagement',
    component: Layout,
    redirect: '/shopManagement/MerchantList',
    name: 'shopManagement',
    meta: { title: '商品管理', icon: 'table' },
    children: [
      {
        path: 'ToAudit',
        name: 'ToAudit',
        component: () => import('@/views/shopManagement/ToAudit'),
        meta: { title: '待审核', icon: 'table' }
      },
      {
        path: 'MerchantList',
        name: 'MerchantList',
        component: () => import('@/views/shopManagement/MerchantList'),
        meta: { title: '商品列表', icon: 'table' }
      }
    ]
  },
  // 运营模块
  {
    path: '/operating',
    component: Layout,
    redirect: '/operating/banner',
    name: 'operating',
    meta: { title: '运营模块', icon: 'table' },
    children: [
      {
        path: 'banner',
        name: 'banner',
        component: () => import('@/views/operating/banner'),
        meta: { title: 'banner图', icon: 'table' }
      },
      {
        path: 'select',
        name: 'select',
        component: () => import('@/views/operating/select'),
        meta: { title: '首页精选', icon: 'table' }
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/operating/Recommend'),
        meta: { title: '推荐位', icon: 'table' }
      },
      {
        path: 'project',
        name: 'project',
        component: () => import('@/views/operating/project'),
        meta: { title: '专题', icon: 'table' }
      }
    ]
  },
  // 订单管理
  {
    path: '/orderManagement',
    name: 'orderManagement',
    redirect: '/orderManagement/applyFor',
    component: Layout,
    meta: { title: '订单管理', icon: 'table' },
    children: [
      {
        path: 'applyFor',
        name: 'applyFor',
        component: () => import('@/views/orderManagement/applyFor'),
        meta: { title: '申请中', icon: 'table' }
      },
      {
        path: 'afterSales',
        name: 'afterSales',
        component: () => import('@/views/orderManagement/afterSales'),
        meta: { title: '售后', icon: 'table' }
      },
      {
        path: 'cancelled',
        name: 'cancelled',
        component: () => import('@/views/orderManagement/cancelled'),
        meta: { title: '已取消', icon: 'table' }
      },
      {
        path: 'complete',
        name: 'complete',
        component: () => import('@/views/orderManagement/complete'),
        meta: { title: '已完成', icon: 'table' }
      },
      {
        path: 'inTheLease',
        name: 'inTheLease',
        component: () => import('@/views/orderManagement/inTheLease'),
        meta: { title: '租赁中', icon: 'table' }
      }
    ]
  },
  // 提现申请
  {
    path: '/withdrawal',
    name: 'withdrawal',
    component: Layout,
    meta: { icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'withdrawal',
        component: () => import('@/views/withdrawal/index'),
        meta: { title: '提现申请', icon: 'table' }
      }
    ]
  },
  // 交易记录
  {
    path: '/trading',
    name: 'trading',
    component: Layout,
    meta: { icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'trading',
        component: () => import('@/views/trading/index'),
        meta: { title: '交易记录', icon: 'table' }
      }
    ]
  },
  // 门店管理
  {
    path: '/storeManagement',
    name: 'storeManagement',
    redirect: '/storeManagement/storeList',
    component: Layout,
    meta: { title: '门店管理', icon: 'table' },
    children: [
      {
        path: 'storeList',
        name: 'storeList',
        component: () => import('@/views/storeManagement/storeList'),
        meta: { title: '门店列表', icon: 'table' }
      },
      {
        path: 'serialNumber',
        name: 'serialNumber',
        component: () => import('@/views/storeManagement/serialNumber'),
        meta: { title: '序列号库', icon: 'table' }
      },
      {
        path: 'newStores',
        name: 'newStores',
        component: () => import('@/views/storeManagement/newStores'),
        hidden: true
      }
    ]
  },
  // 客服中心
  {
    path: '/CustomerService',
    name: 'CustomerService',
    component: Layout,
    meta: { title: '客服中心', icon: 'table' },
    children: [
      {
        path: 'articleLists',
        name: 'articleLists',
        component: () => import('@/views/CustomerService/articleLists'),
        meta: { title: '文章列表', icon: 'table' }
      },
      {
        path: 'DocumentManagement',
        name: 'DocumentManagement',
        component: () => import('@/views/CustomerService/DocumentManagement'),
        meta: { title: '文案管理', icon: 'table' }
      }
    ]
  },
  // 用户列表
  {
    path: '/AccountManagement',
    name: 'AccountManagement',
    component: Layout,
    meta: { title: '账号管理', icon: 'table' },
    children: [
      {
        path: 'AccountList',
        name: 'AccountList',
        component: () => import('@/views/AccountManagement/AccountList'),
        meta: { title: '账号列表', icon: 'table' }
      },
      {
        path: 'RightsManagement',
        name: 'RightsManagement',
        component: () => import('@/views/AccountManagement/RightsManagement'),
        meta: { title: '权限管理', icon: 'table' }
      }
    ]
  },
  {
    path: '/tab',
    name: 'tab',
    component: Layout,
    meta: { icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'tab',
        component: () => import('@/views/tab/index'),
        meta: { title: 'tab选项卡', icon: 'form' }
      }
    ]
  },
  // 表单
  {
    path: '/form',
    component: Layout,
    redirect: '/table/BaseForm',
    name: 'form',
    meta: {
      title: 'form',
      icon: 'form'
    },
    children: [
      {
        path: 'Form',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      },
      {
        path: 'quillEditor',
        name: 'quillEditor',
        component: () => import('@/views/form/quillEditor'),
        meta: { title: 'quillEditor', icon: 'form' }
      },
      {
        path: 'tinymce',
        name: 'tinymce',
        component: () => import('@/views/form/tinymce'),
        meta: { title: 'tinymce', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/icon',
    component: Layout,
    name: '图标',
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'index',
        name: '图标',
        component: () => import('@/views/svg-icon/index'),
        meta: { title: '图标', icon: 'form', roles: ['admin'] }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
