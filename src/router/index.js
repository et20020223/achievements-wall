import {createRouter, createWebHistory} from 'vue-router';
import Campaign from '../pages/Campaign.vue';

const routes = [

  // 競選頁面 - 獨立路由
  {
    path: '/campaign',
    name: 'campaign',
    component: () => import('../pages/Campaign.vue'),
    meta: {
      title: '競選活動',
      isSkipLogin: true,
    },
  },

  // 競選網頁編輯器 - 獨立路由
  {
    path: '/campaign-editor',
    name: 'campaign-editor',
    component: () => import('../pages/CampaignEditor.vue'),
    meta: {
      title: '競選網頁編輯器',
      isSkipLogin: true,
    },
  },

  // 競選網頁編輯器2 - 獨立路由
  {
    path: '/campaign-editor-2',
    name: 'campaign-editor-2',
    component: () => import('../pages/CampaignEditorV2.vue'),
    meta: {
      title: '競選網頁編輯器2',
      isSkipLogin: true,
    },
  },

  {
    path: '/',
    children: [
      {
        path: '',
        name: 'Home',
        component: Campaign,
        meta: {
          breadCrumb: [
            {text: '首頁', to: '/'},
          ],
          pageTitle: '首頁',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const isSkipLogin = to.meta.isSkipLogin;

//   if (!isSkipLogin) {
//     try {
//       await checkAuth();
//       next();
//     } catch (error) {
//       logout();
//       next('/login');
//     }
//   } else {
//     next();
//   }
// });

export default router;
