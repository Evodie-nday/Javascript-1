const kelvin = 293;

const celsius = kelvin - 273;

let fahrenheit = celsius * (9 / 5) + 32; 

fahrenheit = Math.floor(fahrenheit); 

console.log(The temperature is ${fahrenheit} degrees Fahrenheit.); 

let newton = celsius * (33 / 100); 
newton = Math.floor(newton); 

console.log(The temperature is ${newton} degrees Newton.);

const myAge = 25;

let earlyYears = 2; 

earlyYears *= 10.5; 

let laterYears = myAge - 2; 

laterYears *= 4; 

console.log(Early Years: ${earlyYears}, Later Years: ${laterYears}); 

let myAgeInDogYears = earlyYears + laterYears; 

let myName = 'John Doe'.toLowerCase();

console.log(My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.);