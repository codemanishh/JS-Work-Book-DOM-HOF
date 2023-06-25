// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).


for (let i = 2; i <= 100; i++) {
    let prm = true;
  
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        prm = false;
        break;
      }
    }
    if (prm) {
      console.log(i);
    }
  }