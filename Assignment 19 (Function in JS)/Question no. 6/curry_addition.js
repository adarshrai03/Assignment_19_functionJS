function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func(...args);
      } else {
        return function (...nextArgs) {
          return curried(...args, ...nextArgs);
        };
      }
    };
  }
  
  // Test the curry function with a function that adds two numbers
  function add(x, y) {
    return x + y;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(2)(3)); // Output: 5
  console.log(curriedAdd(5)(10)); // Output: 15
  console.log(curriedAdd(7, 8)); // Output: 15
  