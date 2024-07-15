import type { RouteRecordRaw } from 'vue-router';
import { createWebHashHistory, createRouter } from "vue-router";

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
            component: () => import('@/pages/form/BasicForm/AddMarketing.vue'),
            props: (route) => ({ isDialog: false }),
            meta: { title: '基础表单' }
          },
          {
            path: 'create',
            component: () => import('@/pages/form/BasicForm/AddMarketing.vue'),
            props: (route) => ({ isDialog: false }),
            meta: { title: '创建活动' }
          },
          {
            path: 'update',
            component: () => import('@/pages/form/BasicForm/EditMarketing.vue'),
            props: (route) => ({ isDialog: false }),
            meta: { title: '修改活动' }
          },
          {
            path: 'steps',
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
            component: () => import('@/pages/table/BasicTable.vue'),
            meta: { title: '基础表格', plain: true }
          },
          {
            path: 'pinia',
            component: () => import('@/pages/table/PiniaTable/PiniaTable.vue'),
            meta: { title: '表格 + pinia', plain: true }
          },
          {
            path: 'editable',
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
            path: ':id/basic', // 占位符 :id
            name: 'basicDetail',
            component: () => import('@/pages/detail/BasicDetail.vue'),
            meta: { title: '基础详情' }
          },
          {
            path: 'context-menu',
            component: () => import('@/pages/detail/ContextMenuDemo.vue'),
            meta: { title: '右键菜单' }
          },
        ]
      },

      /** 笔记 */
      {
        path: 'notes',
        meta: { title: '笔记' },
        children: [
          {
            path: 'js',
            component: () => import('@/pages/notes/JsCookbook.vue'),
            meta: { title: 'JavaScript 笔记', plain: true },
          },
          {
            path: 'css',
            component: () => import('@/pages/notes/CssCookbook.vue'),
            meta: { title: 'CSS 笔记', plain: true },
          },

          {
            path: 'json-format',
            component: () => import('@/pages/notes/tools/JsonFormat.vue'),
            meta: { title: 'JSON 格式化' }
          },
          {
            path: 'regex-preview',
            component: () => import('@/pages/notes/tools/RegexPreview.vue'),
            meta: { title: '正则表达式 预览' }
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
        component: () => import('@/pages/NotFound.vue'),
        meta: { plain: true },
      }
    ]
  },
  // 所有未定义的路径都将匹配 * 这个路由定义，然后重定向到 404
  {
    path: '/:pathMatch(.*)*',
    redirect: { path: '/404' },
  }
]

// 从配置文件里获取项目的 base
const base = import.meta.env.VITE_BASE_PATH;

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(base), // 路由类型
  routes
})

export default router