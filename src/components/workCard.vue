<template>
    <div class="card-work">
      <div class="card-div">
        <div class="title">
          <span class="material-symbols-outlined">{{ icon }}</span>
          <p>{{ title }}</p>
        </div>
        <div class="img">
          <img :src="img" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  defineProps(['title', 'img', 'icon']);
  </script>
  
  <style scoped>
  .card-work {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2e2d2e;
    border-radius: 10px;
  }
  
  .title {
    display: flex;
    gap: 1rem;
  }
  
  .img {
    border-radius: 10px;
    overflow: hidden;
  }
  /* *{
    border: 1px solid;
  } */
  
  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  
  .card-div {
    height: 95%;
    width: 95%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 0.1fr 1fr;
    gap: 0px 0px;
  }
  </style>
  