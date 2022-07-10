<script setup>
import Header from '../Layout/Header/index.vue'
import BottomBar from '../Layout/BottomBar/index.vue'
</script>

<template>
  <!-- <div class="header">
    <Header/>
  </div> -->
  <div class="view">
    <router-view/>
  </div>
  <div class="">
    <BottomBar/>
  </div>
</template>

<style scoped>
.header{
  position: sticky;
  top: 0;
}
.view{
  margin-bottom: 50px;
}
</style>