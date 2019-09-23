import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import UserInfo from '@/views/identitymag/UserInfo'
import CreateUser from '@/views/identitymag/CreateUser'

import ResourceInfo from '@/views/resourcemag/ResourceInfo'
import AddResource from '@/views/resourcemag/AddResource'

import PolicyInfo from '@/views/authmag/PolicyInfo'
import EditPolicy from '@/views/authmag/EditPolicy'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },

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

    // 资源管理 -- 资源信息 + 编辑资源
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

    // 权限管理 - 策略信息 + 编辑策略
    {
      path: '/policyinfo',
      name: 'PolicyInfo',
      component: PolicyInfo
    },
    {
      path: '/editpolicy',
      name: 'EditPolicy',
      component: EditPolicy
    }
  ]
})
