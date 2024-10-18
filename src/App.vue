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
}
</style>
