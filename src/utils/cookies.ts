import Cookies from 'js-cookie'

const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => {
    Cookies.set(sidebarStatusKey, sidebarStatus)
}

const tokenKey = 'sidebar_status'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string) => {
    Cookies.set(tokenKey, token)
}
export const removeToken = () => Cookies.remove(tokenKey)


const languageKey = 'sidebar_status'
export const getLanguage = () => Cookies.get(languageKey)
export const setLanguage = (language: string) => {
    Cookies.set(languageKey, language)
}