import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export function getGoodList(page:string):AxiosPromise<any>{
  return request({
    url:"/goods/get-goods-list",
    params:{
      appKey:'5fa0d3a407682',
      pageId:page,
      pageSize:10,
      version:'v1.2.3'
    }
  })
}
export function getTopicList():AxiosPromise<any>{
  return request({
    url:"goods/topic/carouse-list",
    params:{
      appKey:'5fa0d3a407682',
      version:'v2.0.0'
    }
  })
}
