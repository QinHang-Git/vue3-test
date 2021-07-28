<template>
  <van-nav-bar
    title="登录"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <div v-if="loginOrReg"> 
    <van-field v-model="userInfo.username" label="用户名" />
    <van-field v-model="userInfo.password" type="password" label="密码" />
    <van-button class="button-login" type="primary" size="large" @click="tologinHandle">登录</van-button>
    <a class="link-login" @click="switchLoginOrReg">现在注册</a>
  </div>
  <div v-else>
    <van-field v-model="userInfo.username" label="用户名" />
    <van-field v-model="userInfo.password" type="password" label="密码" />
    <van-field v-model="userInfo.passwordCheck" type="password" label="再次输入密码" />
    <van-button class="button-login" type="primary" size="large" @click="toRegisterHandle">注册</van-button>
    <a class="link-login" @click="switchLoginOrReg">已有账号，现在登录</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useLoginHook from './hook/useLoginHook'

import router from '@/router/index'

export default defineComponent ({
  name:"login",
  components: {},
  setup() {
    // 登录user相关内容
    const loginHook = useLoginHook()

    const loginOrReg = ref(true)

    const onClickLeft = function (){
      router.back()
    }
    const switchLoginOrReg = function (){
      loginOrReg.value = !loginOrReg.value
    }
    return {
      ...loginHook,
      loginOrReg,
      onClickLeft,
      switchLoginOrReg
    }
  },
})
</script>

<style scoped>
.van-nav-bar {
  background-color: #ffd4d4;
}
.button-login{
  width: calc( 100% - 40px );
  margin: 20px;
}
.link-login{
  float: right;
  margin-right: 20px;
}
</style>