<template>
  <van-nav-bar title="商品列表" />
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="(image,index) in topicList.images" :key="index">
      <img :src="image.topicImage" @click="showTopic(image.link)"/>
    </van-swipe-item>
  </van-swipe>
  <van-list
    v-model:loading="shopList.loading"
    :finished="shopList.finished"
    finished-text="没有更多了"
    @load="getShopList"
  >
    <van-cell v-for="item in shopList.list" :key="item.goodsId">
      <ShopListItem :goodsItem="item"/>
    </van-cell>
  </van-list>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { getGoodList } from "@/api/shop";
import ShopListItem from "./components/ShopListItem.vue";

import useTopicList from './hook/useTopicList'

export default defineComponent({
  name: "Student",
  components: { ShopListItem },
  setup() {
    const shopList = reactive({
      list: [],
      finished: false,
      loading: false,
      page: "1",
    });
    const getShopList = () => {
      getGoodList(shopList.page).then((res) => {
        shopList.list.push(...res.data.list);
        shopList.page = res.data.pageId;
        shopList.loading = false;
        // shopList.finished = true
      });
    };

    const topicList = useTopicList()
    return {
      ...topicList,
      shopList,
      getShopList,
    };
  },
});
</script>

<style scoped>
.van-nav-bar {
  background-color: #ffd4d4;
}
/* .van-list {
  height: calc(100% - 46px);
  overflow: auto;
} */
.van-cell {
  padding: 0;
}
img{
  width: 100%;
}
</style>