import { register, getUserList, login, profile, } from '@/api/user'
import {setUserToken, getUserToken} from '@/utils/auth'

import { reactive } from 'vue'
import { Toast } from 'vant'
import router from '@/router/index'

export default function ():any {
  const userInfo = reactive({
    username:'',
    password:'',
  });
  const regInfo = reactive({
    username:'',
    nickname:'',
    password:'',
    passwordCheck:'',
    gender:'',
    birthday:'',
    phone:'',
  })
  const loginInfo = reactive({
    loginStatus:false,
    username:''
  })

  const toLogin = ()=>{
    login(userInfo).then((res)=>{
      const token = (res as any).token
      setUserToken(token)
      router.back()
    }).catch((err)=>{
      Toast.fail(err.message);
    })
  }
  const toLogout = ()=>{
    setUserToken('')
    router.back()
  }
  const toRegister = () => {
    if(regInfo.password !== regInfo.passwordCheck){
      Toast.fail('密码不一致');
      return
    }
    register(regInfo).then((res)=>{
      Toast.success('注册成功');
      console.log(res);
    }).catch((err)=>{
      Toast.fail(err.message.name)
    })
  }
  const toGetProfile = ()=>{
    const token = getUserToken()
    profile(token).then((res)=>{
      for(const i in res){
        loginInfo[i] = res[i]
      }
      loginInfo.loginStatus = true
    }).catch(()=>{
      loginInfo.loginStatus = false
    })
  }
  const toGetUserList = () => {
    getUserList().then((res)=>{
      console.log(res);
    })
  }

  return{
    userInfo,
    regInfo,
    loginInfo,
    toLogin,
    toLogout,
    toRegister,
    toGetProfile,
    toGetUserList
  }
}
