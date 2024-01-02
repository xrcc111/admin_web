<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <div class="left">
      left
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.layout{
  display: flex;
  height: 100vh;
  
}
.layout .left{
    width: 100px;
  }

  .layout .right{
    width: calc(100vw - 100px);
  }
</style>