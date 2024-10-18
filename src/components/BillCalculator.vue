<template>
  <div class="calculator">
    <h1>Bill Calculator</h1>
    
    <label for="currency">Currency:</label>
    <select id="currency" v-model="selectedCurrency" @change="resetInputs">
      <option value="USD">$ USD</option>
      <option value="PHP">₱ PHP</option>
      <option value="YEN">¥ YEN</option>
    </select>
    
    <label for="price">Price:</label>
    <input id="price" type="number" v-model.number="price" />

    <label for="tip">Tip:</label>
    <input id="tip" type="number" v-model.number="tip" />
    
    <h2 :style="{ color: totalColor }">
      Total: {{ formattedTotal }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import { useBillCalculator } from '../composables/useBillCalculator';

const {
  selectedCurrency,
  price,
  tip,
  totalColor,
  formattedTotal,
  resetInputs,
} = useBillCalculator();
</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

label {
  margin: 10px 0;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 10px; 
  margin-bottom: 15px; 
  border: 1px solid #ccc;
  border-radius: 5px; 
}

h2 {
  margin-top: 20px; 
  font-size: 1.5rem; 
}
</style>

