import axios from "axios";

var req = axios.create({

    baseURL:"http://127.0.0.1/todoList/api/",

    timeout:5000

})

req.interceptors.request.use((config)=>{
    return config;
},function (error){
    return Promise.reject(error)
})

req.interceptors.response.use((response)=>{
    return response;
},function (error){
    return Promise.reject(error);
});

export default req;