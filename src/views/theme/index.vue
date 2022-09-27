<template>
  <Gradient  />
  <Restaurant  />
</template>
<script setup lang="ts">
import Gradient from '@/components/theme/Gradient.vue';
import Restaurant from '@/components/theme/Restaurant.vue'; 
import { useThemeStore } from '@/store/modules/theme';
import { THEME_TYPE } from '@/utils'

const store = useThemeStore() 

</script>
<style lang="less" scoped>



</style>
