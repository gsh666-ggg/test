import request from "../utils/request";

export default function getNewsList(url,method,data){
    return request({
        url:url,
        method:method,
        params:data
    })
}