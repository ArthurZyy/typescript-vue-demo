declare namespace API {
    type commonResult<T = any> ={
        data: T,
        code: string,
        showMessage: false | {
            method: 'message' | 'notification',
            type: 'success' | 'error' | 'info' | 'warning',
            message: string,
            description?: string
        }
    }
}

export interface UserInfo {
    name:API.commonResult
}