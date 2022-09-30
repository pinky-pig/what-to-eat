<template>
  <div id="container" class=" w-screen h-screen bg-[#14161a] flex flex-col items-center justify-center gap-24">
    <Playground></Playground>
    
    <div class="flex-center gap-24 z-30">
      <div class="btn" @click="select"> 选 择 </div>
      <div class="btn"> 更换主题 </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import Playground from './playground/index.vue'
import { Sortition } from '@/composables';
let sort = new Sortition(8)

const select = () => { 
  sort.start()
}
</script>

<style lang="less" scoped>
.btn{
  @apply cursor-pointer flex w-24 h-10 bg-[#2a2f37] rounded-md text-[#a4b2c1] font-bold flex justify-center items-center;
}
</style>
