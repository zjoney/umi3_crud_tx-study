import { defineConfig, Route } from 'umi';

export default defineConfig({
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
          redirect: '/course'
        },
        {
          path: '/course',
          component: './Course'
        },
        {
          path: '/about',
          component: './About'
        }
      ]
    },
  ],
  sass: {
    implementation: require('node-sass'),
  },
  cssModulesTypescriptLoader: {},
});
