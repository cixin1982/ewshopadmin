//引入axios依赖包
import axios from "axios";
//axios创建对象
const request = axios.create({
    //管理后台要使用的接口的基地址
    baseURL: "https://api.shop.eduwork.cn/",
    //超时时间
    timeout: 8000,
});

const win:any = window ;

//定义前置拦截器，请求拦截器，请求发出之前触发的
request.interceptors.request.use((config) => {
    //config接口请求的配置信息
    //获取token
    const token = localStorage.getItem("token");
    //判断token是否存在
    if (token) {
        //若存在，把token添加到请求头中
        config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    //报错的是定义前置拦截器时候抛出一个错误信息
    return Promise.reject(error);
});

request.interceptors.response.use((response) => {
    //响应 回来的数据操作
    return response.data;
}, (error) => {
    const {response} = error;
    //报错时抛出一个报错信息
    switch (response.status) {
        case 401:
            win.$message.error("登陆失败，请重新登录");
            localStorage.removeItem("token");
            setTimeout(() => {
                window.location.href = "/login";
            }, 500);
            break;
        case 404:
            win.$message.error("接口不存在");
            break;
        case 500:
        case 502:
            win.$message.error("网络异常");
            break;
        case 422: {
            const msg = response.data.errors[Object.keys(response.data.errors)[0]][0];
            win.$message.error(msg);
            // window.$message.error('邮箱已存在')
            break;
        }
    }
    //报错的时候抛出一个报错信息
    return Promise.reject(error);
});

//抛出对象的信息
export default request;