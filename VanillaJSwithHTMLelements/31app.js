const el1 = document.querySelectorAll('div');
el1[1].style.backgroundColor = 'yellow';
for (let x = 0; x < el1.length; x++) {
    console.log(el1[x].textContent);
    el1[x].style.color = 'red';
    el1[x].textContent = `${x}. Next div`;
}
el1.forEach(function (el) {
    console.log(el);
    el.style.backgroundColor = 'green';
})