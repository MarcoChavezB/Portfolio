
<template>
    <button class="button" type="button" @click="toggleCheckbox">
      <span class="button__text">{{ title }} <span class="material-symbols-outlined">
        {{ icon }}
</span></span>
    </button>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
   
  defineProps({
      title:{
          type: String,
      },
      icon:{
            type: String,
      }
  })
  
  </script>
  
  
  
  <style scoped>
    span{
        color: #757575;
    }
  .button {
      position: relative;
      width: 100%;
      height: 3rem;
      cursor: pointer;
      background-color: #242324;
      color: white;
      border: none;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 1em #00000013;
      transition: all 0.3s;
      font-weight: 500;
  }
  
  .button:hover{
    box-shadow: 0 0 2em #00000013;
    transform: scale(1.01);
    font-weight: 600;
  }
  .button__text {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 1rem;
  }
  
  
  </style>