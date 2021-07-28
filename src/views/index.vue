<template>
  <div class="views">
    <router-view></router-view>
  </div>
  <van-tabbar v-model="active">
    <van-tabbar-item replace to="/business/home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/business/shop" icon="search">商城</van-tabbar-item>
    <van-tabbar-item replace to="/business/joke" icon="friends-o">笑话</van-tabbar-item>
    <van-tabbar-item replace to="/business/profile" icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent ({
  name:"Business",
  components: {
    
  },
  setup() {
    const active = ref(0)
    return {
      active
    }
  },
})
</script>

<style scoped>
.views{
  height: calc( 100vh - 50px );
  overflow: auto;
}
</style>