import request from '@/utils/request'
import { AxiosPromise } from 'axios'

// 登录用户名和密码接口限制
interface UserInfo{
  username:string,
  password:string
}

export function register(data:UserInfo):AxiosPromise<any>{
  return request({
    url:"http://192.168.1.135:3001/register",
    method:'post',
    data,
  })
}
export function getUserList():any{
  return request({
    url:"http://192.168.1.135:3001/userlist",
    method:'get',
  })
}
export function login(data:UserInfo):AxiosPromise<any>{
  return request({
    url:"http://192.168.1.135:3001/login",
    method:'post',
    data,
  })
}
export function profile(data:string):AxiosPromise<any>{
  return request({
    url:"http://192.168.1.135:3001/profile",
    method:'get',
  })
}

