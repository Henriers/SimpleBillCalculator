import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BillCalculator from '../BillCalculator.vue';

describe('BillCalculator', () => {
  it('renders correctly', () => {
    const wrapper = mount(BillCalculator);
    expect(wrapper.find('h1').text()).toBe('Bill Calculator');
  });

  it('calculates total correctly', async () => {
    const wrapper = mount(BillCalculator);
    const priceInput = wrapper.find('#price');
    const tipInput = wrapper.find('#tip');

    await priceInput.setValue(50);
    await tipInput.setValue(15);
    
    const totalText = wrapper.find('h2').text();
    expect(totalText).toContain('Total: $ 65.00');
  });

  it('resets inputs when currency changes', async () => {
    const wrapper = mount(BillCalculator);
    const priceInput = wrapper.find('#price');
    const tipInput = wrapper.find('#tip');
    const currencySelect = wrapper.find('#currency');

    await priceInput.setValue(50);
    await tipInput.setValue(10);
    
    await currencySelect.setValue('PHP');
    const priceValue = priceInput.text();
    const tipValue = tipInput.text();

    expect(priceValue).toContain('');
    expect(tipValue).toBe('');
  });

  it('changes currency and updates total correctly', async () => {
    const wrapper = mount(BillCalculator);
    const currencySelect = wrapper.find('#currency');
    const priceInput = wrapper.find('#price');
    const tipInput = wrapper.find('#tip');

    await currencySelect.setValue('PHP');
    await priceInput.setValue(100);
    await tipInput.setValue(20);
    
    const totalText = wrapper.find('h2').text();
    expect(totalText).toContain('Total: ₱ 120.00');
  });



});
