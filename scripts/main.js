
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tiger.svg')
	{
      myImage.setAttribute('src','images/tiger2.svg');
    }
	else
	{
      myImage.setAttribute('src','images/tiger.svg');
    }
}

function setUserName()
{
  let myName = prompt('Please enter your name.');
  if (!myName)
  {
	  setUserName();
  }
  else
  {
	  localStorage.setItem('name', myName);
	  myHeading.textContent = 'Hey ' + myName + '!';
  }
}

if(!localStorage.getItem('name'))
{
  setUserName();
}
else
{
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hey ' + storedName + '!';
}

myButton.onclick = function()
{
  setUserName();
}