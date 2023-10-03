// Write your code here!

/*
document.querySelector('main#main').remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute("id","victory");

newHeader.innerHTML = "Angelo is the champion";

document.body.append(newHeader);

*/

document.querySelector('main#main').remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute('id','victory');

newHeader.textContent = "Angelo is the champion.";

document.body.append(newHeader);



