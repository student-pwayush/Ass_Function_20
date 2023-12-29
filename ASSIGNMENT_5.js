function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const input1 = 4;
  const input2 = 2;
  const input3 = 9;
  
  console.log(`Factorial of ${input1}: ${factorial(input1)}`);
  console.log(`Factorial of ${input2}: ${factorial(input2)}`);
  console.log(`Factorial of ${input3}: ${factorial(input3)}`);
  