<template>
    <div class="app-work">
        <div class="header">
            <p>My works</p>
        </div>
        <div class="body">
            <cardWork/>     
        </div>
    </div>
</template>

<script setup>
import cardWork from './cardWork.vue';
</script>

<style scoped>
.app-work{
    height: 100%;
    width: 100%;
    grid-auto-columns: 1fr; 
    grid-template-rows: 0.2fr 1fr; 
    gap: 0px 0px;  
}

.header{
    border-bottom: 1px solid ;
}

</style>

