// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// Наприклад:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);

function generateKey(leng, characters) {
  let key = "";
  for (let i = 0; i < leng; i++) {
    key += characters[Math.round(Math.random() * (characters.length - 1))];
  }
  return key;
}
console.log(key);
