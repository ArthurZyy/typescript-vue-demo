import axios from 'axios'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        config.headers['Authorization'] = 'token'
        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        Promise.reject(error)
    }
)

export default service