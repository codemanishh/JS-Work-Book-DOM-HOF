# **DOM Assignment 4**
# **done the work in index.html file**

## **Task 1 **
In this task i have added the **background-color** to the card's footer's
### **after update**
![output Image](./Output/DOM%20P1%20SS.png)
```  In this i have added the code is 
const elements = document.querySelectorAll(".one-third");
elements.forEach(element => {
  element.style.color = 'black';
});
const element2=document.querySelector(".clash-card__unit-stats--barbarian");
element2.style.backgroundColor='#bd7c2f';

const element3=document.querySelector(".clash-card__unit-stats--archer");
element3.style.backgroundColor='#d04976';

const element4=document.querySelector(".clash-card__unit-stats--giant");
element4.style.backgroundColor='#de7b09';

const element5=document.querySelector(".clash-card__unit-stats--goblin");
element5.style.backgroundColor='#71a32a';

const element6=document.querySelector(".clash-card__unit-stats--wizard");
element6.style.backgroundColor='#309eff';
```