# **DOM Assignment 6**
# **done the wrok in index.html file**

## **Task 1 **
In this i removed the default logo the new **iNeuron's** new logo 
### **after update**
![output Image](./Output/DOM%20P3%20SS-1.png)
```  In this i have added the code is 

const elements = document.querySelector(".logo");
elements.remove();

let ele2 =document.createElement("img");
ele2.src="./assets/ineuron-logo.png";
ele2.alt="photo not loaded";
ele2.style.width="400px";

ele2.style.position="absolute";
ele2.style.top="20px";
ele2.style.left="150px";

let parent =document.querySelector("main");
parent.appendChild(ele2);

```

## **Task 2 **
In this i change the price of the PREMIUM Subscription $4 TO $10 
### **after update**
![output Image](./Output/DOM%20P3%20SS-1.png)
```  In this i have added the code is 

let new3 =document.querySelector(".app_price span");
new3.innerHTML="<span>$10</span>";

```