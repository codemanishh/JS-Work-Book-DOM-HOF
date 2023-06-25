// 23. Write a program to check that the number given by the user is a prime number or not.

let found=0
let num=prompt("Enter the number")
for(let i=2;i<num-1;i++){
    if(num%i==0){
        found=1;
     }
}
if(found==0)
console.log("its a prime")
else
console.log("Not A prime no")

