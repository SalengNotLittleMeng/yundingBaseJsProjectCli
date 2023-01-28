//这个文件主要管理全局变量，如果对localStoreage有特殊需求（限制容量，添加过期时间等）也可以在此封装
// 理论上说，我们不应该在项目中随便定义全局变量，大部分在项目中使用的全局变量（除了那种仅使用一次的），
//我们都应该统一管理，提前定义在$store这个对象里并注释
const $Store={
    //这里表示项目的view目录，支持live- serve，如果上服失败的话注意修改这里
    baseUrl:function(){
        if(window.location.toString().slice(0,5)=='http:'){
            return'http://127.0.0.1:5500/src/view'
        }else{
            const PathArray=window.location.toString().split('/')
            return PathArray.slice(0,PathArray.findIndex(path=>{
                return path=='view'
            })+1).join('/')
        }
    }()
}