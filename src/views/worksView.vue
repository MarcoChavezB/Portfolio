<template>
    <div class="app-works">
        <div class="header">
            <sliderWorks/>
        </div>
        <div class="body">

        </div>
    </div>
</template>


<script setup>
import sliderWorks from '../components/sliderWorks.vue';
</script>


<style scoped>
.app-works {
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-rows: 0.2fr 1fr; 
  gap: 0px 0px; 
  height: 100vh;
}

</style>