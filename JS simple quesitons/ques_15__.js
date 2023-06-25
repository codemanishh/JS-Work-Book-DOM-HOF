// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let marks = prompt("Enter Your Marks :")
if( marks>=80 && marks<=100)
    console.log("You Have A GRAD marks")
else if(marks>=70 && marks<=89)
    console.log("You Have B GRAD marks")
else if(marks>=60 && marks<=69)
    console.log("You Have C GRAD marks")
else if(marks>=50 && marks<=59)
    console.log("You Have D GRAD marks")
else if(marks>=0 && marks<=49)
    console.log("You Have F GRAD marks")
else
    console.log("En-valid Entry")