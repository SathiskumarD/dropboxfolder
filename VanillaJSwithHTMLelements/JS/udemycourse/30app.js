const el1 = document.querySelector('div');
el1.textContent = '#1';
const el2 = document.querySelector('#main');
el2.textContent = '#2';
const el3 = document.getElementById('main');
el3.textContent = '#3';
el2.textContent = '#4';
const el4 = document.querySelector('.output');
el4.textContent = '#5';
el1.style.backgroundColor = 'blue';
console.log(el4.style.backgroundColor);
el2.style.color = 'red';
//console.dir(document);
//document.querySelector('div').textContent='New text';