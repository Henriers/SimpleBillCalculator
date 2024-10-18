import { ref, computed } from 'vue';

export function useBillCalculator() {
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

  return {
    selectedCurrency,
    price,
    tip,
    currencySymbol,
    total,
    totalColor,
    formattedTotal,
    resetInputs,
  };
}
