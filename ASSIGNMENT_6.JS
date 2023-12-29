function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func(...args); 
      } else {
        return function(...remainingArgs) {
          return curried(...args, ...remainingArgs);
        };
      }
    };
  }
  
  function add(x, y) {
    return x + y;
  }
  
  const curriedAdd = curry(add);
  
  const result1 = curriedAdd(8)(4);
  const result2 = curriedAdd(3, 6);
  
  console.log(`Result 1: ${result1}`); 
  console.log(`Result 2: ${result2}`); 
  