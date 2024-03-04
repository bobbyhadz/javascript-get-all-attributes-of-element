// Get all Attributes of a DOM Element in JavaScript

console.log('bobbyhadz.com');

const element = document.getElementById('blue');

// ✅ Get object of all {name: value}
const attrs = element.getAttributeNames().reduce((acc, name) => {
  return {...acc, [name]: element.getAttribute(name)};
}, {});

// 👇️ {id: 'blue', 'data-id': 'example', class: 'box'}
console.log(attrs);

console.log(attrs['id']); // 👉️ blue
console.log(attrs['data-id']); // 👉️ example
