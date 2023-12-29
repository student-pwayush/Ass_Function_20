function calculateTax() {
    const taxRates = [
      { range: 20000, rate: 0.1 },
      { range: 40000, rate: 0.15 },
      { range: 80000, rate: 0.2 },
      { range: Infinity, rate: 0.25 }
    ];
  
    return function(income) {
      let taxAmount = 0;
  
      for (const { range, rate } of taxRates) {
        if (income <= range) {
          taxAmount += income * rate;
          break; 
        } else {
          taxAmount += range * rate;
          income -= range;
        }
      }
  
      return taxAmount;
    };
  }
  
  const calculateTaxForIncome = calculateTax();
  
  const income1 = 5000;
  const income2 = 45000;
  const income3 = 80000;
  
  console.log(`Tax for income $${income1}: $${calculateTaxForIncome(income1)}`);
  console.log(`Tax for income $${income2}: $${calculateTaxForIncome(income2)}`);
  console.log(`Tax for income $${income3}: $${calculateTaxForIncome(income3)}`);
  