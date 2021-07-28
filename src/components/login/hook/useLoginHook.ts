import { register, getUserList, login, profile, } from '@/api/user'
import {setUserToken, getUserToken} from '@/utils/auth'

import { reactive } from 'vue'
import { Toast } from 'vant'
import router from '@/router/index'

export default function ():any {
  const userInfo = reactive({
    username:'',
    password:'',
    passwordCheck:''
  });
  const toRegisterHandle = () => {
    if(userInfo.password !== userInfo.passwordCheck){
      Toast.fail('密码不一致');
      return
    }
    register(userInfo).then((res)=>{
      Toast.success('注册成功');
      console.log(res);
    })
  }
  const getUserListHandle = () => {
    getUserList().then((res)=>{
      console.log(res);
    })
  }
  const tologinHandle = ()=>{
    login(userInfo).then((res)=>{
      const token = (res as any).token
      setUserToken(token)
      router.back()
    }).catch((err)=>{
      Toast.fail(err.response.data.message);
    })
  }
  const getProfile = async()=>{
    const token = getUserToken()
    const result = await profile(token).catch(()=>{
      Toast.fail('token不存在，请登录');
      return false
    })
    if(result){
      return result
    }
  }
  const tologoutHandle = ()=>{
    setUserToken('')
  }
  return{
    userInfo,
    tologinHandle,
    toRegisterHandle,
    getUserListHandle,
    getProfile,
    tologoutHandle
  }
}
