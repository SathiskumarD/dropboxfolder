/*let a='first';
let b='second';
let c='third';
function scopetest(){
    console.log(a);
      a ='firstchanged';
    let b='secondchanged';
    let c='thirdchanged';
    if (a !=''){
        console.log(a);
        console.log('inside if :' + b);
        console.log(c);
    };
    
}

scopetest();
//console.log(b);//
console.log(a);
console.log(b);
console.log(c);*/


var a = 1;

function four() {
      a = 4;
      if (true) {
        console.log(a);
  }
 }

four();
console.log(a);