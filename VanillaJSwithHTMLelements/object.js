let car={
    make:'Toyota',
    model:'RAV4',
    year:2017,
    getprice:function(){
        //perform some calc//
        return 31000;
    },
    printdescription: function(){
        console.log(this.make+' ' +this.model)
    }

}

car.printdescription();
console.log(car.year);
//console.log(car.printdescription());//


var anothercar={}
anothercar.whatever='bob';
console.log(anothercar.whatever);

var a={
    myproperty: {b: 'hi'}
}
console.log(a.myproperty.b);

var c={
    myproperty: [ 
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: 'crazy'}
    ]
}

console.log(c.myproperty[2]);

let carlot=[
    {year: 2017, make: 'Toyota',model:'4Runner'},
    {year: 2015, make: 'BMW', model: '528i' },
    {year: 1982, make:'Buick', model: 'skylark'},

];console.log(carlot[0]);

