import request from '@/utils/request'

export const login = (data: any) => {
    request({
        url: '/api/login',
        method: 'post',
        data
    })
}