//Quiz for this & arrow function
/**
 * let person = {
  name: '손흥민',
  //   sayHi: () => {
  //     console.log(`hello I am ${person['name']}`);
  //   },
  sayHi: function () {
    console.log(`hello I am ${this.name}`);
  },
};
person.sayHi();
 */
let person = {
  name: '손흥민',
};
person.sayHi = function () {
  console.log('Hello, I am ' + this.name);
};
person.sayHi(); //Hello, I am 손흥민

/**
 * let obj = {
  data: [1, 2, 3, 4, 5],
};
function calculator(array) {
  return array.reduce((a, b) => {
    return a + b;
  }, 0);
}
let result = calculator(obj.data);
console.log(result);
 */
const obj = {
  data: [1, 2, 3, 4, 5],
};
obj.calculator = function () {
  let result = 0;
  this.data.forEach((value) => {
    return (result += value);
  });
  console.log(result);
};
obj.calculator();

/**
 * const btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
  console.log(this.innerHTML);
});

setTimeout(() => {
  console.log(btn.innerHTML);
}, 1000);
 */
const btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
  setTimeout(() => {
    console.log(this.innerHTML);
  }, 1000);
});
