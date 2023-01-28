// axios在实际项目中并不能完全满足需求，实际项目中，
// 请求层往往是要对一些结果和数据进行统一处理的，
// 因此我们需要对axios进行封装使用

// 同时，很多接口是可以复用的，
// 因此我们可以进行模块化管理，统一暴露对象，并将所有请求函数收入$api对象

// 创建实例
const instance = axios.create({
    // 基础路径
    baseURL:'../../mock',
    // 请求限时
    timeout: 5000,
});
  // 请求拦截器
instance.interceptors.request.use(
    (config) => {
      // 登录功能扩展时携带token，这个token需要自己存入localstorage
    const token = localStorage.getItem('Authorization');
      // 如果携带token，这个地方是登陆时后端保存状态用的
    //   如果后端用的是cookie的话这里要进行修改或删除
    // Authorization这个值是后端给的参数，要跟后端进行协商，确定token携带在了哪里
    if (token && typeof window !== 'undefined') {
        config.headers['Authorization'] = token;
    }
    return config;
    },
  );
  
  // 响应拦截器
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    // 统一错误处理
    (error) => {
        const { config, response } = error;
        // 对各种类型的错误进行统一处理，具体自己在case里面写逻辑即可
        switch (response.status) {
            case 401:
            break;
            case 403:
            break;
            case 404:
            break;
            case 500:
            break;
            default:
        }
    return Promise.reject(error);
    }
);
//请求模块，引入这个JS后自己调用即可
const $api={
  //如果需要传参数的话使用参数params来完成
    getUserMessage:function(params){
        //这里的instance就是axios的实例，跟axios用法一样，但被扩展了方法
        return instance.get('/user.json')
    },
    userLogin:function(params){
      return instance.get('/login.json')
    }
}