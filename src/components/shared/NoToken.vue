<template>
  <div class="NoToken">
    <van-empty image="error" :description="description" />
  </div>
</template>
<script setup lang="ts">
  //TODO加个not found的页面
  const description = '未获取到登录信息，请重新进入页面';
</script>
<style scoped lang="scss">
  .NoToken {
    width: 100vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
