import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '../components/Navigation'
import Intro from '../components/Intro'
import Media from '../components/Media'
import Creative from '../components/Creative'
import Sales from '../components/Sales'
import Cases from '../components/Cases'
import Resources from '../components/Resources'
import test from '../components/test'

Vue.use(Router)  //使用路由

//设置路由
export default new Router({
    // mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Navigation',
            component: Navigation
        },
        {
            path: '/intro',
            name: 'intro',
            component: Intro
        },
        {
            path: '/media',
            name: 'media',
            component: Media
        },
        {
            path: '/creative',
            name: 'creative',
            component: Creative
        },
        {
            path: '/sales',
            name: 'sales',
            component: Sales
        },
        {
            path: '/cases',
            name: 'cases',
            component: Cases
        },
        {
            path: '/resources',
            name: 'resources',
            component: Resources
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
    ]
});