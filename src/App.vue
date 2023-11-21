<template>
  <div class="app-first">
    <div class="header">
      <headerComp />
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>


<style scoped>
.body {
  height: 100vh;
  width: 100%;
}

.app-first{
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-rows: 0.1fr 1.8fr 0.3fr;; 
  gap: 0px 0px;
}

</style>

<script setup>
import headerComp from './components/headerComp.vue'
</script>