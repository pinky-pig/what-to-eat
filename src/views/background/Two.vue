<template>
  <div class="container">
    <div class="relative">
      <div class="tint"></div>
      <canvas id="myCanvas" width="320" height="180"></canvas>
      <p class="screen label"><span>42</span>TV</p>
      <p class="screen error">No Signal</p>
      <div class="led"></div>
    </div>
  </div>
</template>
<script setup lang="ts"> 

let idTimer:any = null
onMounted(() => {
  const ctx = (document.getElementById("myCanvas") as HTMLCanvasElement).getContext("2d") as CanvasRenderingContext2D
  let tempo = 0
  function genNoise() {
    var imgData = ctx.createImageData(400,300);
    var t1 = new Date()
    for (var i=0; i < 400*300*4; i+=4) {
      var num = Math.random()*255 
      imgData.data[i+0] = parseInt(num + '')
      imgData.data[i+1] = parseInt(num + '')
      imgData.data[i+2] = parseInt(num + '')
      imgData.data[i+3] = parseInt(num/0.5 + '')
    }
    var t2 = new Date()
    tempo = t2.getTime() - t1.getTime()
    ctx.putImageData(imgData, 0, 0);
  }
  idTimer = setInterval(genNoise, 15);
})
onUnmounted(() => {
  clearInterval(idTimer)
})
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

body {
  width: calc(100%);
  height: calc(100%);
  background-color: #fff;
}

div.container {
  width: 320px;
  height: 180px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

div.tint {
  position: absolute;
  width: 320px;
  height: 180px;
  background-color: #E0F57E;
  /* multiple box shadows */
  box-shadow: 0 0px 0px 1px rgba(255,255,255,.4), 0 0px 0px 16px rgba(0,0,0,1), 0 48px 32px -16px rgba(0,0,0,1), 40px 15px 100px -9px rgba(255,0,0,.5), -32px 5px 100px 8px rgba(255,70,205,.5), -32px -33px 100px 2px rgba(120,120,255,.5), 25px 1px 100px 6px rgba(255,100,0,.6), 32px -32px 100px -2px rgba(0,255,120,.6), 0 48px 32px -16px rgba(0,0,0,.4);
}
.relative{
  position: relative;
}
canvas {
  position: absolute;
}
div.led{
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: #FF0000;
  top:187px;
  right: 10px;
  box-shadow: 0 0px 0px 1px rgba(255,0,0,.3),
    1px 1px 2px 2px rgba(255,0,0,.4),
    -1px -1px 2px 2px rgba(255,0,0,.4);
}

p.screen{
  background: #1155ff;
  padding: 5px;
  opacity: .7;
  border: 2px solid #00eeee;
  color: #fff;
  font-size: 24px;
  position: absolute;
  font-weight: 400;
  font-family: "arial";
}
p.label span{
  font-family: "arial";
  margin-right:5px;
}
p.label{
  font-family: "arial black";
  top: -5px;
  right: 10px;
  font-size: 15px;
}
p.error{
  font-weight: 400;
  top: 48px;
  left: 100px;
}
.tint {
  -webkit-animation: hue-rot 7s infinite alternate;
  animation: hue-rot 7s infinite alternate;
}

@-webkit-keyframes hue-rot {
  100% {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}

@keyframes hue-rot {
  100% {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}

</style>
