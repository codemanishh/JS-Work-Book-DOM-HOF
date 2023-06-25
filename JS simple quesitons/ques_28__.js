
// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

let n=5
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }

console.log()


let n1=5
for (let i = 1; i <= n1; i++) {
    let row = '';
    for (let j = 1; j <= n1; j++) {
      row += '*';
    }
    console.log(row);
  }
  
  console.log()

  let n3 = 5;
  let row = "";
  for (let i = 1; i <= n3; i++) {
    for (let j = 1; j <= n3 - i; j++) {
      row += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      row += "*";
    }
    row += "\n";
  }
  console.log(row);

