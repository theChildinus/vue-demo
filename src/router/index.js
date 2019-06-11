import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import NewContact from '@/components/NewContact'

import UserInfo from '@/views/identitymag/UserInfo'
import CreateUser from '@/views/identitymag/CreateUser'

import ResourceInfo from '@/views/resourcemag/ResourceInfo'
import AddResource from '@/views/resourcemag/AddResource'

import Organization from '@/views/authmag/Organization'
import EditPolicy from '@/views/authmag/EditPolicy'
import PolicyInfo from '@/views/authmag/PolicyInfo'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/newcontact',
      name: 'NewContact',
      component: NewContact
    },
    // 身份管理 -- 用户信息 + 新建用户
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/createuser',
      name: 'CreateUser',
      component: CreateUser
    },

    // 资源管理 -- 资源信息 + 添加资源
    {
      path: '/resourceinfo',
      name: 'ResourceInfo',
      component: ResourceInfo
    },
    {
      path: '/addresource',
      name: 'AddResource',
      component: AddResource
    },

    // 权限管理 -- 组织管理 + 查看资源 + 编辑策略
    {
      path: '/organization',
      name: 'Organization',
      component: Organization
    },
    {
      path: '/editpolicy',
      name: 'EditPolicy',
      component: EditPolicy
    },
    {
      path: '/policyinfo',
      name: 'PolicyInfo',
      component: PolicyInfo
    }
  ]
})
