<template>
  <div class="w-4/5 h-3/5 z-10 rounded-xl bg-blue-200/5 relative">
    <!-- <img class="w-full h-full object-contain" src="@/assets/theme/one/背景.png" alt=""> -->

    <img class="absolute top-0 w-full h-10% z-10" src="@/assets/theme/one/header.png" />
    
    <svg class="w-full h-full absolute" >
      <defs>
        <pattern id="rect" patternUnits="userSpaceOnUse" width="15" height="19">
          <rect width="12" height="16" fill="#092B17" rx="2"></rect>
        </pattern>
      </defs>

      <rect id="canvas" width="100%" height="100%" fill="#345B41" />
      <rect id="canvas" width="100%" height="100%" fill="url(#rect)" />
    </svg>

    <img class="absolute bottom-0 w-full z-10" src="@/assets/theme/one/foot.png" />

  </div>
</template>
<script setup lang="ts"> 

</script>
<style lang="less" scoped>



</style>
