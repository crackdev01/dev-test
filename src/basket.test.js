const calculateTotalCost = require('./basket');

describe('calculateTotalCost', () => {
    test('calculates the total cost of empty basket as 0', () => {
        expect(calculateTotalCost([])).toBe(0);
    });

    test('calculates the total cost of a basket correctly', () => {
        const basket = ['Apple', 'Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
        expect(calculateTotalCost(basket)).toBe(170);
    });
});
