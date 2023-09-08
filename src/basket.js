const calculateTotalCost = (basket) => {
    const priceList = {
        Apple: 35,
        Banana: 20,
        Melon: 50,
        Lime: 15,
    };

    let totalCost = 0;
    const itemCounts = {};

    basket.forEach((item) => {
        itemCounts[item] = (itemCounts[item] || 0) + 1;
    });

    Object.keys(itemCounts).forEach((item) => {
        const count = itemCounts[item];
        const price = priceList[item];
        if (item === 'Melon') {
            totalCost += Math.ceil(count / 2) * price;
        } else if (item === 'Lime') {
            totalCost += ((count % 3) + Math.floor(count / 3) * 2) * price;
        } else {
            totalCost += count * price;
        }
    });

    return totalCost;
};

module.exports = calculateTotalCost;