//配置axios的js

//引入
import axios from "axios";



//配置信息
let config = {
    //每次请求的协议和ip地址，配置好后每次发送axios请求只用填写相对路径
    baseURL: '',
    //请求超时时间
    timeout: 10000,
    //每次是否携带cookie
    //withCredentials:true,
}

//创建实例
const instance = axios.create(config)

//请求拦截器，请求前将token添加到请求头
instance.interceptors.request.use(
    (config) => {//防止用户向后台请求不该有的数据
        //检查当前用户权限
        
    }
);
//响应拦截器,处理token过期情况
instance.interceptors.response.use(
    
)
//导出
export default instance