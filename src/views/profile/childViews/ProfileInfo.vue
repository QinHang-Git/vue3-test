<template>
  <van-nav-bar 
    title="个人资料" 
    left-text="返回"
    left-arrow
    @click-left="toBackPage"/>
  <van-list class="form-list">
    <van-cell v-for="item in formItem" :key="item.prop" :title="item.label">{{loginInfo[item.prop] || '未填写'}}</van-cell>
  </van-list>
  <div class="logout">
   <van-button class="logout-button" type="primary" @click="toLogout">退出登录</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useUserInfo from '@/hooks/useUserInfo'
import useRouterList from '@/hooks/useRouterList'

export default defineComponent ({
  name:"ProfileInfo",
  components: {},
  setup() {
    const {loginInfo, toLogout, toGetProfile} = useUserInfo()
    const { toBackPage } = useRouterList()

    const formItem = [
      { label:'用户名', prop:'username'},
      { label:'昵称', prop:'nickname'},
      { label:'性别', prop:'gender'},
      { label:'生日', prop:'birthday'},
      { label:'手机号', prop:'phone'},
    ]
    
    onMounted(()=>{
      toGetProfile()
    })

    return {
      loginInfo, toLogout,
      formItem,
      toBackPage,
    }
  }
})
</script>

<style scoped>
.van-nav-bar {
  background-color: #ffd4d4;
}
.form-list{
  margin-top: 20px;
}
.logout{
  text-align: center;
}
.logout-button{
  margin-top: 50px;
}
</style>