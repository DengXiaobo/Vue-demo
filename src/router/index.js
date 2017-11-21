import Vue from 'vue'
import Router from 'vue-router'
import Bottom from '@/components/Bottom'
import Home from '@/components/Meida/index'
import dapeixinxi from '@/components/Meida/dapeixinxi'
import fenlei from '@/components/Meida/fenlei'
import zhuanti from '@/components/Meida/zhuanti'
import detail from '@/components/Meida/detail.vue'
import zhidemai from '@/components/zhidemai/zhidemai-index'
import webView from '@/components/webView'
import me from '@/components/Me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/dapeixinxi',component:dapeixinxi},
    {path:'/fenlei',component:fenlei},
    {path:'/zhuanti',component:zhuanti},
    {path:'/detail',component:detail},
    {path:'/zhidemai',component:zhidemai},
    {path:'/webView',component:webView},
    {path:'/me',component:me}
  ]
})
