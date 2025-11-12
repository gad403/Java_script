function union(a, b) {
  let unionSet = new Set(a);
  for (let i of b) unionSet.add(i);
  return unionSet;
}

function intersection(setA, setB) {
  let intersectionSet = new Set();
  for (let i of setB) {
    if (setA.has(i)) intersectionSet.add(i);
  }
  return intersectionSet;
}

function difference(setA, setB) {
  let differenceSet = new Set(setA);
  for (let i of setB) differenceSet.delete(i);
  return differenceSet;
}

function subset(setA, setB) {
  for (let i of setB) {
    if (!setA.has(i)) return false;
  }
  return true;
}

const setA = new Set(['apple', 'mango', 'orange', 'banana']);
const setB = new Set(['apple', 'banana']);

const result_union = union(setA, setB);
const result_intersection = intersection(setA, setB);
const result_difference = difference(setA, setB);
const result_subset = subset(setA, setB);

console.log("Union Result:", Array.from(result_union));
console.log("Intersection Result:", Array.from(result_intersection));
console.log("Difference Result:", Array.from(result_difference));
console.log("Subset Result:", result_subset);
