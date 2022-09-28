<template>
  <div id="container" class="w-screen h-screen bg-[#14161a] flex items-center justify-center">
    <Canvas></Canvas>
    
    <div class=" flex-center gap-8 z-20">
      <div class="cursor-pointer flex w-24 h-10 bg-[#2a2f37] rounded-md text-[#a4b2c1] font-bold flex-center"> 更换主题 </div>
    
      <div class="cursor-pointer flex w-24 h-10 bg-[#2a2f37] rounded-md text-[#a4b2c1] font-bold flex-center"> 更换主题 </div>
    </div>


  </div>
</template>
<script setup lang="ts">
import Canvas from './canvas/index.vue';
    
</script>
