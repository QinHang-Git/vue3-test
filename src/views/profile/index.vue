<template>
  <van-nav-bar title="个人中心" />
  <div class="profile">
    <van-button v-if="!loginInfo.loginStatus" class="to-login" type="primary" round @click="loginHandle">登录 / 注册</van-button> 
    <div v-else >
      <div class="had-login">
        <van-icon size="80" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        <div>
          <div class="user-name">欢迎您：{{loginInfo.username}}</div>
        </div>
      </div>
      <van-button type="primary" @click="logoutHandle">退出登录</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import router from '@/router/index'
import useLoginHook from '@/components/login/hook/useLoginHook'
export default defineComponent ({
  name:"Profile",
  components: {},
  setup() {
    const loginInfo = reactive({
      loginStatus:false,
      username:''
    })
    const getProfile = useLoginHook().getProfile
    const logout = useLoginHook().tologoutHandle

    const loginHandle = function(){
      router.push('/login')
    }
    const logoutHandle = function(){
      console.log('aaaa');
      logout()
      checkLoginStatus()
    }
    const checkLoginStatus = async()=>{
      let result = await getProfile() 
      if(result){
        loginInfo.username = result.username
        loginInfo.loginStatus = true
      } else {
        loginInfo.loginStatus = false
      }
      console.log(loginInfo.loginStatus);
    }
    onMounted(async()=>{
      checkLoginStatus()
    })
    return {
      loginHandle,
      logoutHandle,
      loginInfo,
    }
  },
})
</script>

<style scoped>
.van-nav-bar {
  background-color: #ffd4d4;
}
.profile{
  display: flex;
  flex-direction: column;
}
.to-login{
  margin-top: 20px;
  align-self:center
}
.had-login{
  display: flex;
  width: calc( 100% - 40px );
  box-shadow: 1px 1px #666;
  margin-left: 20px;
  margin-top: 30px;
  border: solid 1px #ffd4d4;
}
.user-name{
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
}
</style>