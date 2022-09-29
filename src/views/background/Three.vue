<template>
  <div class=" w-500px h-200px border border-blue-200 flex flex-row flex-wrap gap-2 justify-center items-center"> 
    <div data-order="0" class="item bg-red-200"></div>
    <div data-order="1" class="item bg-orange-200"></div>
    <div data-order="2" class="item bg-yellow-200"></div>
    <div data-order="3" class="item bg-green-200"></div>
    <div data-order="4" class="item bg-blue-200"></div>
    <div data-order="5" class="item bg-blue-500"></div>
    <div data-order="6" class="item bg-purple-200"></div>
    <div data-order="7" class="item bg-black"></div>
  </div>
  
</template>
<script setup lang="ts"> 

</script>
<style lang="less" scoped>
.item{
  @apply w-50px h-50px;
}
</style>
