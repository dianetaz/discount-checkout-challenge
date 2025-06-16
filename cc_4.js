// Create 5 product objects
let products = [
    { name: "Cell Phone", category: "electronics", price: 1000, inventory: 5 },
    { name: "Mom Jeans", category: "apparel", price: 45, inventory: 10 },
    { name: "Strawberries", category: "groceries", price: 1, inventory: 50 },
    { name: "Broom", category: "household", price: 10, inventory: 20 },
    { name: "Pencils", category: "stationary", price: 15, inventory: 12 }
  ];
  
  //  Apply category-based discount
  for (let product of products) {
    switch (product.category) {
      case "electronics":
        product.price *= 0.8; // 20% off
        break;
      case "apparel":
        product.price *= 0.85; // 15% off
        break;
      case "groceries":
      case "household":
        product.price *= 0.9; // 10% off
        break;
      default:
        // No discount
        break;
    }
  }
  
  // Define customer types and extra discounts
  const customerTypes = ["regular", "student", "senior"];
  
  function applyCustomerDiscount(total, customerType) {
    if (customerType === "student") {
      return total * 0.95; // 5% off
    } else if (customerType === "senior") {
      return total * 0.93; // 7% off
    } else {
      return total; // no extra discount
    }
  }
  
  // Simulate checkout for 3 customers
  for (let i = 1; i <= 3; i++) {
    let customerType = customerTypes[Math.floor(Math.random() * customerTypes.length)];
    let cart = [products[0], products[1], products[2]]; // each customer buys 3 items
    let total = 0;
  
    for (let item of cart) {
      if (item.inventory > 0) {
        total += item.price;
        item.inventory--; // reduce inventory
      }
    }
  
    total = applyCustomerDiscount(total, customerType);
  
    console.log(`Customer #${i} (${customerType}) - Total after discount: $${total.toFixed(2)}`);
  }
  
  // Product details after discounts
  console.log("\nProduct details after discounts:");
  let sampleProduct = products[0];
  for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
  }
  
  //  Log all products using Object.entries and destructuring
  console.log("\nUpdated Products Inventory:");
  for (let product of products) {
    let entries = Object.entries(product);
    let output = "";
    for (let [key, value] of entries) {
      output += `${key}: ${value}, `;
    }
    console.log(output);
  }
  