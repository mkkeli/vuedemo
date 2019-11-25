// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({//实例化一个Vue
  el: '#app',//挂载到id为app的div里面
  router,
  components: { App },//这个vue实例有个局部App组件
  template: '<App/>'//表示用替换index.html里面的
})
