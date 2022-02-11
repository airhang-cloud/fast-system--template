import axios from "axios";
import { getToken } from "./index";
import { Message } from "@arco-design/web-vue";

export let service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 30000,
});

service.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        config.headers = {
            Authorization: getToken(),
        };
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
service.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        const { data, status } = response;
        if (status != 200 && data.code != 200) {
            Message.error("请求超时");
        } else return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        Message.error("请求超时");
        return Promise.reject(error);
    }
);
