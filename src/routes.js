import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

import TabsPage from './pages/tabs.vue';
import Tab1Page from './pages/tab1.vue';
import Tab2Page from './pages/tab2.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/',
    component: TabsPage,
    tabs: [
      {
        path: '/tab1/:id?',
        id: 'tab1',
        component: Tab1Page,
      },
      {
        path: '/tab2/:id?',
        id: 'tab2',
        component: Tab2Page,
      },
    ],
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
