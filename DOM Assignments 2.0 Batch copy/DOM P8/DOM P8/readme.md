# **DOM Assignment 8**
# **wrork done in index.html file**

## **Task 1 **
In this task i just added scroll feature to the Right **aside** by just adding the overflow **auto** to it
### **before update**
![output Image](./ass8.1-before.png)
### **after update**
![output Image](./ass8.1-after.png)
```  In this i have added the code is 

const firstTask = document.querySelector(".new");  
firstTask.style.overflow ="auto";

```

## **Task 2 **
In this task i maked  the background image to **none** which basically removes the background-image whole page.
### **before update**
![output Image](./ass8.2-before.png)
### **after update**
![output Image](./ass8.2-after.png)
```  In this i have added the code is 

const secondTask = document.querySelector("body");
secondTask.style.backgroundImage="none"; 

```

## **Task 3 **
In this task I make a Home Hamburger fold-out menu
### **before update**
![output Image](./ass8.3-before.png)
### **after update**
![output Image](./ass8.3-after.png)
```  In this i have added the code is 

const button = document.querySelector(".navbar-toggler");
const navbarContent = document.getElementById("navbarTogglerDemo01");

button.addEventListener("click", function() {
  if (navbarContent.style.display === "none" || navbarContent.style.display === "") {
    navbarContent.style.display = "block";
  } else {
    navbarContent.style.display = "none";
}
});

```