<template>
    <div class="app-preferences">
        <div class="icon">
            <img :src="icon" alt="">
        </div>
        <div class="title">
            <p>{{ title }}</p>
        </div>
    </div> 
</template>

<script setup>
import {defineProps} from 'vue';
defineProps(['title', 'icon']);
</script>

<style scoped>
.app-preferences{
    border-radius: 10px;
    background-color: #2d2d2d;
    transition: all 0.3s ease-in-out;
    display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 0.5fr 1.7fr; 
  gap: 0px 0px; 
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
}
.title{
    border-radius: 0px 10px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #252425;
}
.title p{
    margin-left: 1rem;
}
.app-preferences:hover{
    background-color: #2e2e2e;
    translate: translate(0, -5px);
}
</style>