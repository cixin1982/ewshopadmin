//引入axios依赖包
import axios from "axios";
//axios创建对象
const request = axios.create({
    //管理后台要使用的接口的基地址
    baseURL:"https://api.shop.eduwork.cn/",
    //超时时间
    timeout:8000,
});

//定义前置拦截器，请求拦截器，请求发出之前触发的
request.interceptors.request.use((config) => {
    //config接口请求的配置信息
    return config;
}, (error) => {
    //报错的是定义前置拦截器时候抛出一个错误信息
    return Promise.reject(error);
});

request.interceptors.response.use((response) => {
    return response.data;
},(error) => {
    //报错的时候抛出一个报错信息
    return Promise.reject(error);
});

//抛出对象的信息
export default request;