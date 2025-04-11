/*
  This function calculates total amount spent per category
  It returns an array of objects in the format:
  [{ category: 'Food', totalSpent: 10 }, ...]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {}; // To store category-wise totals

  // Loop through all transactions
  transactions.forEach((txn) => {
    const { category, price } = txn;

    // If category already exists, add to its total
    if (categoryMap[category]) {
      categoryMap[category] += price;
    } else {
      // Else, initialize the total with the first price
      categoryMap[category] = price;
    }
  });

  // Convert the map to the required output format
  const result = [];

  for (let cat in categoryMap) {
    result.push({ category: cat, totalSpent: categoryMap[cat] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
