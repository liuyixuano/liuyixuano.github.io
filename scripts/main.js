let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cutecat.jpg') {
      myImage.setAttribute('src', 'images/cutecat2.jpg');
    } else {
      myImage.setAttribute('src', 'images/cutecat.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Cutecat 可爱死了，' + myName;
      }
  }
  
if(!localStorage.getItem('name')) {
    setUserName();
} else {
let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cutecat 可爱死了，' + storedName;
}
  
myButton.onclick = function() {
    setUserName();
}
 