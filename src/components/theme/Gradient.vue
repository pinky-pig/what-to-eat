<template>
  <div class="gradient-bg">
    <div class="gradient-top"></div>
    <div class="gradient-bottom"></div>
  </div>
</template>
<script setup lang="ts"> 
    
</script>
<style lang="less" scoped>
  @import '~/styles/constant.less';
  .gradient-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  
    .gradient-style(@color) {
      position: absolute;
      width: 100vh;
      height: 100vh;
      background-image: radial-gradient(
        rgba(@color, 0.8) 20%,
        rgba(@color, 0.6) 40%,
        rgba(@color, 0.4) 60%,
        rgba(@color, 0.2) 80%,
        transparent 100%
      );
      border-radius: 50%;
      opacity: 0.2;
      filter: blur(4rem);
    }
  
    .gradient-top {
      .gradient-style(@second-color);
      top: -50%;
      right: -20%;
    }
  
    .gradient-bottom {
      .gradient-style(@primary-color);
      bottom: -50%;
      left: -20%;
    }
  }
  </style>
  