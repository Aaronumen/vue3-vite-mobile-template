<template>
  <div class="home-app bg-red">
    首页
    <Demo></Demo>
  </div>
</template>
<script setup lang="ts">
import Demo from "@/components/demo"
console.log(import.meta.env)
</script>
<style lang="less" scoped>
.home-app {
  height: 100px;
  width: 100px;
}
</style>
