import { defineConfig } from 'umi';

export default defineConfig({
  title: '米修在线',
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          redirect: '/course',
        },
        {
          path: '/course',
          // component: './Course',
          routes: [
            { path: '/course', redirect: '/course/list' },
            { path: '/course/list', component: './Course', title: '课程列表' },
            {
              path: '/course/add',
              component: './Course/addCourse',
              title: '添加课程',
            },
            {
              path: '/course/edit/:id',
              component: './Course/addCourse',
              title: '编辑课程',
            },
          ],
        },
        {
          path: '/about',
          component: './About',
        },
      ],
    },
  ],
  sass: {
    implementation: require('node-sass'),
  },
  cssModulesTypescriptLoader: {},
});
