import md5 from 'md5'
import axios,{AxiosRequestConfig, AxiosResponse} from 'axios'
import { getUserToken, } from '@/utils/auth'

const request = axios.create({
    baseURL:'https://openapi.dataoke.com/api',
    timeout: 10000
})

// http请求拦截器
request.interceptors.request.use((config:AxiosRequestConfig) => {
  if(config.url.indexOf('http://192.168.1.135:3001') === -1){
    // config.params.token = "kvBgUtFEUJH2T7y75ipr"
    // config.params.token = "M0w6IsCR3xHRTK5N1BnW"
    const secret = "646d5b79488fe8ab75640cd9462b6cd3"
    let a = ''
    for (const i in config.params) {
      a = a + i + "=" + config.params[i] + "&";
    }
    a = a + "key=" + secret;
    const c = md5(a)
    const d = upperCase(c)
    config.params.sign = d
  } else {
    config.headers['Authorization'] = 'Bearer ' + getUserToken()
  }
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
request.interceptors.response.use((r:AxiosResponse<any>) => {
    return r.data
}, error => {
    if(error.response.data){
      return Promise.reject(error.response.data)
    }
    return Promise.reject(error)
})


// 将字符串的字符全部转换为大写字符
function upperCase(str) {
  const arr = str.split("");
  let newStr = "";
  // 通过数组的forEach方法来遍历数组
  arr.forEach(function (value) {
    if (value >= "a" && value <= "z") newStr += value.toUpperCase();
    else newStr += value;
  });
  return newStr;
}

export default request