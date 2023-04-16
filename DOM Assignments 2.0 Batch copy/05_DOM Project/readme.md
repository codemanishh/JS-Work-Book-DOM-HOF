# **DOM Assignment 5**
# **done the work in index.html file**

## **Task 1 **
IN this project i have added a new  **pro-subscription** button in the top near the *contact* 
```  In this i have added the code is 
  let element =document.createElement("a");
  element.innerText="Support Me";
  element.href = "index.html";
  element.className = "btn";
  const newBtn = document.querySelector(".hi");
  newBtn.appendChild(element);
```
Then i have change the color of all the items description to **blueviolet**
```  In this i have added the code is 
  const elements = document.querySelectorAll(".recipe-text");
elements.forEach(element => {
  element.style.color = 'blueviolet';
});
```
Then i have added a new item in the menue of the products.
```  In this i have added the code is 
let newRec=document.createElement("a");
newRec.href="#";
newRec.innerHTML="Chines (7)";
const newReec=document.querySelector("section div div");
newReec.appendChild(newRec);

```
Then i have added a new card in the list of items also
```  In this i have added the code is 

let newCard=document.createElement("div");
newCard.className="card";
newCard.innerHTML="Avalable soon"
const newCardd=document.querySelector(".recipe-gallery");
newCardd.appendChild(newCard);


```

### **after update**
![output Image](./05_DOM%20Project/Output/DOM%20P2%20SS.png)
