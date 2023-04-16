# **DOM Assignment 9**
# **dome all the work in index.html file**

## **Task 1 **
In this i was change the color after hoverring on the **Gabrielle Essence Eau De Parfum** to *red* color which is **h1** tag
### **Before update**
![output Image](./ass9.1-before.png)
### **After update**
![output Image](./ass9.1-after.png)
```  In this i have added the code is 

const fstTest = document.querySelector('h1');
fstTest.addEventListener('mouseenter', function() {
this.style.color = 'red'; 
this.style.cursor="pointer";
});
fstTest.addEventListener('mouseleave', function() {
this.style.color = 'hsl(158, 36%, 37%)';
});

```

## **Task 2 **
In this i was change the color of the **button** when user is hovers it to *red*
### **Before update**
![output Image](./ass9.2-before.png)
### **After update**
![output Image](./ass9.2-after.png)
```  In this i have added the code is 

  const taskTwo = document.querySelector('.add-to-cart');

  taskTwo.addEventListener('mouseenter', function() {
  this.style.backgroundColor = 'red'; 
});

taskTwo.addEventListener('mouseleave', function() {
  this.style.backgroundColor = 'hsl(158, 36%, 37%)';
});


```