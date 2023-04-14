# **DOM Assignment 1**
# **dome in index.html file**

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
## **Task 3 **
In this code i was target the teh class.hero-left-section and inside a #P and again inside that i changed teh content of that one of the last child's span to "INeuron's Intelligence Pvt Ltd"
### **After update**
![output Image](./firstAssignmentImage/task3Output.png)
```  In this i have added the code is 

const textElement = document.querySelector(".hero-left-section p span:last-child");
textElement.innerHTML = "INeuron's Intelligence Pvt Ltd";
```
## **Task 4 **
In this project i changed the photo/profile picture of the user
### **After update**
![output Image](./firstAssignmentImage/task4Output.png)
```  In this i have added the code is  

const image = document.querySelector("section div img");
image.setAttribute("src", "./Profile picture.png");
```

## **Task 5 **
In this project i have added one more button after the chat which is "Support Me" which is below the profile picture.
### **After update**
![output Image](./firstAssignmentImage/task5Output.png)
```  In this i have added the code is  

let element =document.createElement("button");
element.innerText="Support Me";

const newBtn = document.querySelector("section div div");
newBtn.appendChild(element);
 
```


# **DOM Assignment 2**

# **done in about.html file**

## **Task 1 **
In this project i have changed the nav option which is "when you click on the the "About" then one more "Project" option is added and the  and the  "contact" option is removed which is also the 2nd child of the ul
### **After update**
![output Image](./secondAssignmentImage/task1Output.png)
```  In this i have added the code is  

2nd assignment            **task           1 **

let element =document.createElement("li");
element.innerHTML="<a>Projects</a>";
let parent =document.querySelector("header nav ul");
parent.appendChild(element);
const rem =document.querySelector("header nav ul");
rem.removeChild(rem.children[2]);

```


## **Task 2 **
In this project i have added one more option in the "About" section and added "Skills" and on click data for that skils are "I have Great Skills in the Web development "  
### **After update**
![output Image](./secondAssignmentImage/task2Output.png)
```  In this i have added the code is  

2nd assignment            **task           2 **

var newDiv = document.createElement("div");
newDiv.className = "accordian";
newDiv.innerHTML="<h3>Skills</h3><p>I have Great Skills in the Web development .</p>";
var parentDiv =document.querySelector(".accordian-wrapper");
parentDiv.appendChild(newDiv);
```

# **DOM Assignment 3**
# **done in contact.html file**


## **Task 1 **
In this project i have changed the placeholders of "User output board " and the "user input board" so something else 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
### **After update**
![output Image](./thirdAssignmentImage/task1Output.png)
```  In this i have added the code is  

3nd assignment            **task           1 **

var t1 = document.querySelector('.enterName');
var t2 = document.querySelector('.enterMail');
var t3 = document.querySelector('.enterMessage');
var t4 = document.querySelector('.userName');
var t5 = document.querySelector('.userEmail');
var t6 = document.querySelector('.userMessage');

// Change placeholder to "HI"
t1.placeholder = "FSJS 2.0";
t2.placeholder = "FSJS 2.0";
t3.placeholder = "fsjs@ineuron.io";
t4.placeholder = "fsjs@ineuron.io";
t5.placeholder = "Hallo World!";
t6.placeholder = "Hallo World!";

```
