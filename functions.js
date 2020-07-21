// console.log("functions")

const nuggetizer = (animal) => {
  return `processed ${animal}`;
};
console.log(nuggetizer("pig"));
console.log(nuggetizer("fish"));
console.log(nuggetizer("chicken"));
console.log(nuggetizer("student"));

const addition = (num) => {
  return num + 42;
};
console.log(addition(42));

// Write a function that takes in the year you were born and figures out how old yuo will be in 2099

const howOld = (num) => {
  return  ` In 2099 I will be ${2099 - num}`;
};
console.log(howOld(2000));
