<script setup>
import { ref,onMounted } from 'vue'
import {useRouter} from 'vue-router'

const active = ref(0)
const router = useRouter()
onMounted(()=>{
  const currentRoute = router.currentRoute.value.path
  switch (currentRoute) {
    case '/home':
      active.value = 0
      break;
    case '/plan':
      active.value = 1
      break;
    case '/write':
      active.value = 2
      break;
    case '/my':
      active.value = 3
      break;
  }
})
const handleClick = (active) => {
  console.log(active)
  switch (active) {
    case 0:
      router.push({
        path:'/home'
      })
      break;
    case 1:
      router.push({
        path:'/plan'
      })
      break;
    case 2:
      router.push({
        path:'/write'
      })
      break;
    case 3:
      router.push({
        path:'/my'
      })
      break;
  }
  // if(active == 0){
  //   router.push({
  //     path:'/home'
  //   })
  // }
}
</script>

<template>
  <var-bottom-navigation active-color="black" v-model:active="active" :fixed="true">
    <var-bottom-navigation-item @click="handleClick" label="写信" icon="message-text-outline" />
    <var-bottom-navigation-item @click="handleClick" label="计划" icon="magnify" />
    <var-bottom-navigation-item @click="handleClick" label="信箱" icon="message-processing-outline" />
    <var-bottom-navigation-item @click="handleClick" label="我的" icon="account-circle" />
  </var-bottom-navigation>
</template>

<style>
</style>