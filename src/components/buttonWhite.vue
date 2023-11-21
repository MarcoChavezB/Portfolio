
<template>
    <button class="button" type="button" @click="toggleCheckbox">
      <span class="button__text">{{ title }} <span class="material-symbols-outlined">
mail
</span></span>
    </button>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
   
  defineProps({
      title:{
          type: String,
      }
  })
  
  </script>
  
  
  
  <style scoped>
  
  .button {
      position: relative;
      width: 100%;
      height: 3rem;
      cursor: pointer;
      background-color: white;
      border: none;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 1em #00000013;
      transition: all 0.3s;
      font-weight: 500;
      color: black;
  }
  
  .button:hover{
    box-shadow: 0 0 2em #00000013;
    transform: scale(1.01);
    color: black;
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