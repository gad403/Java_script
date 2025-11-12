let arr = [10, 20, 30, 40, 50, 60];
console.log("Original Array:", arr);

let elementToRemove = 30;
arr = arr.filter(item => item !== elementToRemove);
console.log("After removing", elementToRemove + ":", arr);

let valueToCheck = 40;
let message = arr.includes(valueToCheck)
  ? "Array contains " + valueToCheck
  : "Array does not contain " + valueToCheck;
console.log(message);

arr.length = 0;
console.log("Array after emptying:", arr);
