// import { config } from "@/config";
import axios from "axios";

export const axiosinstance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true
})

axiosinstance.interceptors.request.use(function (config) {
    return config;
},
    function (error) {
        return Promise.reject(error)
    },
);

axiosinstance.interceptors.request.use(function onFulFilied(response){
    return response;

}, function onRejected(error){
    return Promise.reject(error)
}

)