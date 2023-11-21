<template>
    <input type="email" name="text" class="input" :placeholder="placeholder">
</template>

<script setup>
import {defineProps} from 'vue'
defineProps(['placeholder'])
</script>

<style scoped>
.input {
 padding: 15px;
 border-radius: 10px;
 background-color: #212121;
 font-size: small;
 font-weight: bold;
 border: none;
 outline: none;
 color: #757575;
}


</style>