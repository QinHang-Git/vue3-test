import router from '@/router/index'

export default function ():any {

  const toLoginPage = () => {
    router.push('/login')
  }
  const toLogoutPage = () =>{
    router.push('/logout')
  }
  const toUserListPage = ()=>{
    router.push('/userList')
  }
  const toBackPage = function (){
    router.back()
  }
  return{
    toLoginPage,
    toLogoutPage,
    toUserListPage,
    toBackPage
  }
}
