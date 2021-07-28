<template>
  <a href="#" class="goods-item" @click.prevent="itemClick">
    <img :src="goodsItem.mainPic" alt="" @load="imgLoad" />
    <div class="goods-item-detail">
      <div class="goods-item-tital">{{ goodsItem.title }}</div>
      <div class="goods-item-sale">
        <div class="goods-item-price">￥{{ goodsItem.actualPrice }}</div>
        <div class="goods-item-sales">月销量：{{ goodsItem.monthSales }}</div>
      </div>
      <div class="goods-item-shopname">{{ goodsItem.shopName }}</div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ShopListItem",
  components: {},
  setup() {

    return {

    };
  },
  props: {
    goodsItem: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
});
</script>

<style scoped>
.goods-item {
  display: block;
  position: relative;
  height: 120px;
  margin: 5px;
  border-radius: 10px;
  background-color: rgb(250, 250, 250);
  color: black;
}
.goods-item>img {
  position: absolute;
  left: 10px;
  top: 10px;
  height: 100px;
  /* border: 1px solid #000; */
  border-radius: 8px;
}
.goods-item-detail {
  position: absolute;
  top: 10px;
  left: 120px;
  right: 10px;
}
.goods-item-tital {
  overflow: hidden;
  height: 40px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
}
.goods-item-sale {
  display: flex;
  height: 30px;
  align-items: flex-end;
  flex: end;
  padding-bottom: 10px;
}
.goods-item-price {
  color: red;
  font-size: 20px;
  line-height: 20px;
  margin-right: 20px;
}
.goods-item-sales {
  font-size: 12px;
  line-height: 12px;
  color: #666;
}
.goods-item-shopname {
  font-size: 12px;
  color: #666;
}
</style>