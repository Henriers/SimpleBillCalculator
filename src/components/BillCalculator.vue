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
import { ref, computed } from 'vue';

const selectedCurrency = ref('USD');
const price = ref(0);
const tip = ref(0);

const currencySymbol = computed(() => {
  switch (selectedCurrency.value) {
    case 'PHP': return '₱';
    case 'YEN': return '¥';
    default: return '$';
  }
});

const total = computed(() => {
  return price.value + tip.value;
});

const totalColor = computed(() => {
  if (total.value < 100) return 'red';
  if (total.value > 999) return 'green';
  return 'black';
});

const formattedTotal = computed(() => {
  return `${currencySymbol.value} ${total.value.toFixed(2)}`;
});

const resetInputs = () => {
  price.value = 0;
  tip.value = 0;
};

</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
