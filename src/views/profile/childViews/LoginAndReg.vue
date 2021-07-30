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
    <van-button class="button-login" type="primary" size="large" @click="toLogin">登录</van-button>
    <a class="link-login" @click="switchLoginOrReg">现在注册</a>
  </div>
  <div v-else>
    <van-field v-for="item in formItem" :key="item.prop" v-model="regInfo[item.prop]" :label="item.label" />
    <van-button class="button-login" type="primary" size="large" @click="toRegister">注册</van-button>
    <a class="link-login" @click="switchLoginOrReg">已有账号，现在登录</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useUserInfo from '@/hooks/useUserInfo'

import router from '@/router/index'

export default defineComponent ({
  name:"login",
  components: {},
  setup() {
    // 登录user相关内容
    const { userInfo, regInfo, toLogin, toRegister } = useUserInfo()

    const loginOrReg = ref(true)

    const formItem = [
      { label:'用户名', prop:'username'},
      { label:'昵称', prop:'nickname'},
      { label:'密码', prop:'password'},
      { label:'再次输入密码', prop:'passwordCheck'},
      { label:'性别', prop:'gender'},
      { label:'生日', prop:'birthday'},
      { label:'手机号', prop:'phone'},
    ]

    const onClickLeft = function (){
      router.back()
    }
    const switchLoginOrReg = function (){
      loginOrReg.value = !loginOrReg.value
    }
    return {
      userInfo, regInfo, toLogin, toRegister,
      loginOrReg,
      onClickLeft,
      switchLoginOrReg,
      formItem
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