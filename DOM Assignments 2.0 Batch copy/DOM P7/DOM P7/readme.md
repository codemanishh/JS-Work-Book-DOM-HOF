# **DOM Assignment 1**
# **done the wrok in index.html file**

## **Task 1 **
In this i removed the wrods that contain the wror **2.0** in there name.
### **before update**
![output Image](./ass7.1-before.png)
### **after update**
![output Image](./ass7.1-after.png)

```  In this i have added the code is 

var parentElement = document.querySelector(".main__languages");
  var children = parentElement.children;
for (var i = children.length - 1; i >= 0; i -= 2) {
    children[i].remove();
  }

```

## **Task 2 **
In this i have changed the **placeholder** of  the input box and also added a now button for submit the form . 
### **before update**
![output Image](./ass7.2-before.png)
### **after update**
![output Image](./ass7.2-after.png)

```  In this i have added the code is 


var t1 = document.querySelector('.main__form-input');
t1.placeholder = "iNeuron";
let btn = document.createElement("button");
btn.type="button";
btn.innerHTML="After writing The Text Submit The Form";
let parent=document.querySelector(".container");
parent.appendChild(btn);
btn.style.marginLeft="520px";
btn.style.marginTop="10px";
btn.style.backgroundColor="red";
btn.style.color="white";
btn.style.fontSize="20px";
btn.style.width="400px";
btn.style.height="50px";
```