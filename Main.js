// Temp in Kelvin degree
const Kelvin = 0
console.log(Kelvin);
//  Converting Kelvin into Celsius
const Celsius = Kelvin - 273
console.log(Celsius);
// Calculating Fahrenheit
let fahrenheit = Celsius * (9/5) + 32
console.log(fahrenheit);
// Using .floor to round down variable
console.log(Math.floor(fahrenheit));
console.log (`The temperature is ${fahrenheit} degrees fahrenheit.`);
const Newton = Celsius * (33/100)
console.log(Newton);
console.log(Math.floor(Newton));
console.log(`The temperature is ${(Math.floor(Newton))} degrees.`);
