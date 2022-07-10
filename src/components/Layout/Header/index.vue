<script setup>
import {toRefs} from 'vue'
const props =defineProps({
  title:String,
  color:String
})
const {title} = toRefs(props)
const {color} = toRefs(props)
// const colorA = {color}
</script>

<template>
  <div class="bar-head">
    <div class="bar-head-box">
      <div class="bar-head-box-item" :style="{backgroundColor:color}">
        <span>{{title}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bar-head{
  .bar-head-box{
    .bar-head-box-item{
      padding-left: 15px;
      padding-bottom: 10px;
      padding-top: 25px;
      span{
        font-size: 1.5em;
        font-weight: bold;
      }
    }
  }
}
</style>