<script setup>
/***
 * Author:Noi-q
 * Email: noi.vcal@gmail.com
 */
import {ref} from 'vue'

const activeTab = ref(0)
const switchTab = (active)=>{
  if(active == 1){
    activeTab.value = 1
  }
  if(active == 0){
    activeTab.value = 0
  }
}
</script>

<template>
  <div class="clearSticky">
    <Header title="我的信箱" color="#fff" />
  </div>
  <div class="tabs">
    <div class="tabs-item">
      <div class="item" :class="activeTab == 0 ? 'on-item' : ''" @click="switchTab(0)">
        <span>我发出的</span>
      </div>
      <div class="item" :class="activeTab == 1 ? 'on-item' : ''" @click="switchTab(1)">
        <span>我收到的</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tabs{
  .tabs-item{
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .item{
      // background-color: red;
      width: 100%;
      text-align: center;
      padding: 13px;
      border-radius: 7px;
    }
    .on-item{
      background-color: #eee;
      font-weight: bold;
    }
  }
}
</style>