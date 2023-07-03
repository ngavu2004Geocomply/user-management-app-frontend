import axios from "axios";

const axiosClient = axios.create({
    baseURL: '${import.meta.env.REACT_APP_BASE_URL}/api'
})

// axiosClient.interceptors.request.use((config:AxiosRequestConfig) => {
//     config.headers.Authorization = 'Bear'
//     return config;
// })

export default axiosClient;