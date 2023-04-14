# **DOM Assignment 1**

## **Task 1 **
In this i was append a new **"Hire Me"** after the **Projects** option of nav bar
### **After update**
![output Image](./firstAssignmentImage/task1Output.png)
```  In this i have added the code is 

let element =document.createElement("li");
element.innerHTML="<a>Hire Me</a>";
let parent =document.querySelector("header nav ul");
parent.appendChild(element);
```

## **Task 2 **
In this i change the the SEARCH box PLACEHOLDER "Search" to "Search My Project"
### **After update**
![output Image](./firstAssignmentImage/task2Output.png)
```  In this i have added the code is 

const searchInput = document.querySelector('header nav div input');
searchInput.placeholder = 'Search My Project';
```