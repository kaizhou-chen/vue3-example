import type { RouteRecordRaw } from 'vue-router';
import { createWebHistory, createRouter } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/MainLayout.vue'), // 布局

    /**
    使用嵌套路由时，父组件一定要包含 router-view 才能正常显示子组件
    子路由的path，前面不要“/”

    <template>
      <router-view></router-view>
    </template>
    */
    children: [
      {
        path: '', // 默认页面
        name: 'home',
        component: () => import('@/pages/Dashboard.vue'),
        meta: { title: 'Dashboard', plain: true },        // plain: true，为不需要包装在 el-card 里的页面
      },
    
      /** 表单页 */
      {
        path: 'form',
        meta: { title: '表单页' },
        children: [
          {
            path: 'basic',
            name: 'basicForm',
            component: () => import('@/pages/form/BasicForm/BasicForm.vue'),
            props: (route) => ({ isDialog: false }),
            meta: { title: '基础表单' }
          },
          {
            path: 'create',
            name: 'createForm',
            component: () => import('@/pages/form/BasicForm/BasicForm.vue'),
            props: (route) => ({ isDialog: false, isUpdate: false }),
            meta: { title: '创建活动' }
          },
          {
            path: 'update',
            name: 'updateForm',
            component: () => import('@/pages/form/BasicForm/BasicForm.vue'),
            props: (route) => ({ isDialog: false, isUpdate: true }),
            meta: { title: '修改活动' }
          },
          {
            path: 'steps',
            name: 'stepForm',
            component: () => import('@/pages/form/StepForm/StepForm.vue'),
            meta: { title: '多步骤表单' }
          },
        ]
      },
    
      /** 表格页 */
      {
        path: 'table',
        meta: { title: '表格页' },
        children: [
          {
            path: 'basic',
            name: 'basicTable',
            component: () => import('@/pages/table/BasicTable.vue'),
            meta: { title: '基础表格', plain: true }
          },
          {
            path: 'pinia',
            name: 'piniaTable',
            component: () => import('@/pages/table/PiniaTable/PiniaTable.vue'),
            meta: { title: '表格 + pinia', plain: true }
          },
          {
            path: 'editable',
            name: 'editableTable',
            component: () => import('@/pages/table/EditableTable/EditableTable.vue'),
            meta: { title: '可编辑表格' }
          },
        ]
      },
    
      /** 详情页 */
      {
        path: 'detail',
        meta: { title: '详情页' },
        children: [
          {
            path: 'basic',
            name: 'basicDetail',
            component: () => import('@/pages/detail/BasicDetail.vue'),
            meta: { title: '基础详情' }
          },
          {
            path: 'tree',
            component: () => import('@/pages/detail/Tree.vue'),
            meta: { title: '树形控件', plain: true }
          },
          {
            path: 'context-menu',
            component: () => import('@/pages/detail/ContextMenuDemo.vue'),
            meta: { title: '右键菜单' }
          },
        ]
      },
    ]
  },
  
  /** 定义 404 页面 */
  {
    path: '/404',
    component: () => import('@/layout/MainLayout.vue'), // 布局
    children: [
      {
        path: '',
        name: '404',
        component: () => import('@/pages/NotFound.vue'),
        meta: { plain: true },
      }
    ]
  },
  // 所有未定义的路径都将匹配 * 这个路由定义，然后重定向到 404
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: '404' },
  }
]

// 从配置文件里获取项目的 base
const base = import.meta.env.VITE_BASE_PATH;

console.log('base', base)

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(base), // 路由类型
  routes
})

export default router