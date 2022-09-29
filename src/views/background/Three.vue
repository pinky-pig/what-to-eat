<template>
  <div class="box w-267px h-267px border border-blue-200 gap-2 "> 
    <div data-order="0" class="item0 bg-red-200">0</div>
    <div data-order="1" class="item1 bg-orange-200">1</div>
    <div data-order="2" class="item2 bg-yellow-200">2</div>
    <div data-order="3" class="item3 bg-green-200">3</div>
    <div data-order="4" class="item4 bg-blue-200">4</div>
    <div data-order="5" class="item5 bg-blue-500">5</div>
    <div data-order="6" class="item6 bg-purple-200">6</div>
    <div data-order="7" class="item7 bg-black">7</div>
  </div>
  
</template>
<script setup lang="ts"> 

</script>
<style lang="less" scoped>
.box{
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                      'd . f'
                      'g h i';
}
.item{
  @apply w-50px h-50px;
}

.item0{
  .item;
  grid-area: a;
}
.item1{
  .item;
  grid-area: b;
}
.item2{
  .item;
  grid-area: c;
}
.item3{
  .item;
  grid-area: f;
}
.item4{
  .item;
  grid-area: i;
}
.item5{
  .item;
  grid-area: h;
}
.item6{
  .item;
  grid-area: g;
}
.item7{
  .item;
  grid-area: d;
}
</style>
