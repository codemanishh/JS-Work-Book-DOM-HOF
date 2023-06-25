// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4ZZZZ
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

// ANSWER-------------------------------------------------------------------------

// 4 >= 3: true
// 4 < 3: false
// 4 <= 3: false
// 4 == 4: true
// 4 === 4: true
// 4 != 4: false
// 4 !== 4: false
// 4 != '4': false
// 4 == '4': true
// 4 === '4': false

// console.log(4>3?true:false)
// console.log(4>=3?true:false)
// console.log(4<3?true:false)
// console.log(4<=3?true:false)
// console.log(4==3?true:false)
// console.log(4!==3?true:false)
// console.log(4==='4'?true:false)


pyLength="python".length
jarLenght="jargon".length
if (pyLength>jarLenght)
console.log("python lenght is greter than jar lenght")
else if (pyLength<jarLenght)
console.log("jargon lenght is greter than python lenght")
else
console.log("both have same lenght")

