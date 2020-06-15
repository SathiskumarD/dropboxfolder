const el1 = document.querySelectorAll('div');
el1[1].style.backgroundColor = 'yellow';
for (let x = 0; x < el1.length; x++) {
    //console.log(el1[x].textContent);
    el1[x].style.color = 'red';
    el1[x].textContent = `${x}. Next div`;
}
el1.forEach(function (el) {
    //console.log(el);
    el.addEventListener('mouseover',function(e){
        //console.log(this);
        //console.log(e.target);
        el.style.backgroundColor = 'yellow';
        console.log(el.textContent);
    })
    el.addEventListener('mouseout',function(e){
    el.style.backgroundColor = 'white';
    })
    el.style.backgroundColor = 'green';
})