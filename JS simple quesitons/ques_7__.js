// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let arrayIs=['pw skills','manish','kumar',34,'is',93,'my name is ','pw skills',34]
b=arrayIs.indexOf("pw skills")
console.log(`the first occurance of pw skill is ${b}`)
c=arrayIs.lastIndexOf("pw skills")
console.log(`the last occurance of pw skills is ${c}`)