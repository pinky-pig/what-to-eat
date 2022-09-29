<template>
  <svg class="w-full h-full absolute" >
    <defs>
      <pattern id="rect" patternUnits="userSpaceOnUse" width="15" height="19">
        <rect width="12" height="16" fill="#092B17" rx="2"></rect>
      </pattern>
    </defs>

    <rect id="canvas" width="100%" height="100%" fill="#345B41" />
    <rect id="canvas" width="100%" height="100%" fill="url(#rect)" />
  </svg>

  <img class="header" src="@/assets/theme/one/header.png" />
  <img class="header-title " src="@/assets/theme/one/旺角大排档.png" />
  <img class="footer" src="@/assets/theme/one/foot.png" />
</template>
<script setup lang="ts"> 

</script>
<style lang="less" scoped>
.header{
  @apply absolute w-full top-0 z-10;
  height: 10%;
}
.header-title{
  @apply absolute top-8px z-10;
  width: 390px;
  height: 82px;

}
.footer{
  @apply absolute w-full h-20px bottom-0 z-10;
}

@media screen and (max-width: 600px) {
  .header{
    height: 30px;
  }
  .header-title{
    top: 5px;
    width: 275px;
    height: 60px;
  }
}

</style>
