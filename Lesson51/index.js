// Task 1
let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;
console.log(sum); // 120

// Task 2
let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let myAge = 25; 
let myAgeInSeconds = myAge * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
console.log(myAgeInSeconds); 

// Task 3
let count = 42;
let userName = "42";

// Первый способ
let countAsString1 = count.toString();
let userNameAsNumber1 = Number(userName);

console.log(countAsString1); 
console.log(userNameAsNumber1); 

// Второй способ
let countAsString2 = String(count);
let userNameAsNumber2 = parseInt(userName);

console.log(countAsString2); 
console.log(userNameAsNumber2);

// Task 4
let a = 1;
let b = 2;
let c = "белых медведей";
let result = String(a) + String(b) + " " + c;

console.log(result);

// Task 5
let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";
let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;

console.log(lengthWords); 

// Task 6
let num = 27;
let bool = true;
let str = "Hello";

console.log(`Variable: num have type: ${typeof num}`); 
console.log(`Variable: str have type: ${typeof str}`); 
console.log(`Variable: bool have type: ${typeof bool}`); 

// Task 7
let userName2 = prompt("Введите ваше имя:");
let userAge = prompt("Введите ваш возраст:");

console.log(`Имя: ${userName2}`);
console.log(`Возраст: ${userAge}`);

// Task 8
let a2 = 4;
let b2 = 3;

[a2, b2] = [b2, a2];

console.log(a2);
console.log(b2);

// Task 9
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher); 

// Task 10
let person = {
  firstName: "Kenny",
  lastName: "Stilinsky",
  age: 28,
  gender: "male",
  height: 180,
  weight: 80,
  occupation: "developer",
  country: "CA",
  city: "Toronto",
  email: "kenny.stilinsky@example.com",
  phoneNumber: "123-456-7890",
  isMarried: true,
  children: 3,
  hobbies: ["music", "gaming", "sports"]
};

console.log(person);
