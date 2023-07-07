import request from "../utils/request";

export default function getNewsList(url,method,data){
    return request({
        url:url,
        method:method,
        data:data
    }).then(res=>{
        // 跳转回主页
        window.location.href="/";
        }).catch(err=>{
            console.log(err.message);
        })
}