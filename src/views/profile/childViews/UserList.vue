<template>
  <van-nav-bar 
    title="用户列表" 
    left-text="返回"
    left-arrow
    @click-left="toBackPage"/>
  <van-list>
    <van-cell v-for="item in userList" :key="item.id" :title="item.nickname">
     {{item.phone}}
    </van-cell>
  </van-list>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useUserInfo from '@/hooks/useUserInfo'
import useRouterList from '@/hooks/useRouterList'

export default defineComponent ({
  name:"UserList",
  components: {},
  setup() {
    const { userList,toGetUserList } = useUserInfo()
    const { toBackPage } = useRouterList()

    onMounted(()=>{
      toGetUserList()
    })
    return {
      userList,
      toBackPage
    }
  },
})
</script>

<style scoped>

</style>