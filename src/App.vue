<template>
  <div class="app">
    <div class="container">
      <BillCalculator />
    </div>
  </div>
</template>

<script setup lang="ts">
import BillCalculator from './components/BillCalculator.vue';
</script>

<style>
.app {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lavender;
  color: black;
}

.container {
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 10px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
  padding: 20px; 
  background-color: white; 
  width: 100vh; 
  margin: 0 20px;
}
</style>
