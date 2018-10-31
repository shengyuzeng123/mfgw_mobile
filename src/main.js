// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import PubHead from './components/Head.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueVideoPlayer from 'vue-video-player'
import VueLazyload from "vue-lazyload"
import 'element-ui/lib/theme-chalk/index.css'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import './assets/css/myVideo.css'
import './assets/css/public.less'
import router from './router'
import {store} from './store/store'
import WXConfig from './assets/js/wx.jsapi'

Vue.use(VueLazyload)
Vue.use(VueVideoPlayer)
Vue.prototype.$axios = axios  //增加Vue构造函数的原型方法，指向axios模块
Vue.use(ElementUI)   //使用UI组件（饿了么团队出品）
Vue.config.productionTip = false
Vue.prototype.WXConfig = WXConfig

//注册全局组件
Vue.component('PubHead', PubHead); //公共头部
// Vue.component('Pubfooter', Foot); //公共脚部

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});