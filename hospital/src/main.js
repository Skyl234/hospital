import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //导入 ElementPlus 组件库中的所有图标
//整体导入ELementPlus组件库
import ElementPlus from 'element-plus'//导入组件库所有模块和功能
import 'element-plus/dist/index.css'//导入组件库所需全局css样式
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'//导入日期所需的中文语言包

import axios from './axios/index.js'//引入创建好的配置文件





const app = createApp(App)

app.use(router)

//与vue实例进行关联
app.config.globalProperties.$axios = axios
//注册 ElementPlus 组件库中的所有图标到全局 Vue 应用中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//更改地区，使用相应组件显示中文
app.use(ElementPlus, {
    locale: zhCn,
})

//全局前置守卫(拦截请求),防止用户越权访问其他角色的路由
router.beforeEach((to, from, next) => {
    next()
})


app.mount('#app')
