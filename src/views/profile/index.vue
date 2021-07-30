<template>
  <van-nav-bar title="个人中心" />
  <div class="profile">
    <van-button v-if="!loginInfo.loginStatus" class="to-login" type="primary" round @click="toLoginPage">登录 / 注册</van-button> 
    <div v-else class="had-login" @click="toLogoutPage">
      <van-icon size="80" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
      <div>
        <div class="user-name">欢迎您：{{loginInfo.nickname || '未填写昵称'}}</div>
        <div class="user-info">查看个人资料</div>
      </div>
    </div>
    <van-grid :column-num="4">
      <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
    </van-grid>

    <van-list>
      <van-cell @click="toUserListPage" title="用户列表" />
      <van-cell  title="我的关注" />
      <van-cell  title="我的关注" />
      <van-cell  title="我的关注" />
      <van-cell  title="我的关注" />
      <van-cell  title="我的关注" />
      <van-cell  title="我的关注" />
    </van-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useUserInfo from '@/hooks/useUserInfo'
import useRouterList from '@/hooks/useRouterList'

export default defineComponent ({
  name:"Profile",
  components: {},
  setup() {
    // 获取个人信息，登出系统
    const {loginInfo, toGetProfile, toGetUserList} = useUserInfo()
    const {toLoginPage, toLogoutPage, toUserListPage} = useRouterList()
    onMounted(()=>{
      toGetProfile()
    })
    return {
      toLoginPage,
      toLogoutPage,
      toUserListPage,
      loginInfo,
      toGetUserList
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
  margin: 20px 0;
  align-self:center
}
.had-login{
  display: flex;
  width: calc( 100% - 40px );
  margin:30px 20px;
}
.user-name{
  margin-top: 10px;
  margin-left: 20px;
  font-size: 20px;
}
.user-info{
  margin-top: 20px;
  margin-left: 20px;
  font-size: 12px;
  color: rgb(82, 142, 231);
}
</style>