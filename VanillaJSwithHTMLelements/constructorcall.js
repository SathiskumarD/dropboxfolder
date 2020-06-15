/* function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
    }

    let myCar= new Car('Toyota','RAV4',2017);
    console.log(myCar); */
    /* function MyFunction(){
        console.log('I am a simple function');
    }

    let myFunction = new MyFunction();
    console.log(typeof myFunction); */

    //can't really do anything with this particular object..
    //it's certainly NOT a function reference anymore!

   /*  var x = "5" === 5;
    console.log(x); */

/* var product = function(n) 
{
//placeholder
 return n*10;
 if(typeof(n) != number) return 0;
 }
 var x = product("hi");
 console.log(x); */

 /* for (i = 0; i <1000; i++)  
{  
      for (x = 0; x < 100; x++)  
     {  
         console.log(x);
        if (x == 10)   
        {  
             break;  
        }  
     }  
}   */

/* 
var animal = "Giraffe";
   
(function() {
	var animal = tortoise = "Tortoise";
})();
   
console.log(animal);
console.log(tortoise); */
/* 
var fruit = "Apple";
   
var lunch = {
	snack: 'Sandwich',
	fruit: "Banana",
	getFruit: function() {
    	return this.fruit;
	}
}
   
var getFruit = lunch.getFruit;
   
console.log(lunch.getFruit());
console.log(getFruit()); */

/* (function() {
    function addMember(member) {
        var members = [];
        function printMembers() {
          for(var i = 0; i < members.length; i++) {
            console.log(members[i]);
          }
        }

        return function (member) {
          members[members.length] = member;
          printMembers();
        }
    }

  var newMember = addMember("John");
  newMember("Anth");
  newMember("Dan");
})(); */

/* var person = new Person("Anna", "Prosser", 29);
class Person {

 constructor(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
 }

 getName() {
  return this.firstName + " " + this.lastName;
 }

}  */

/* var person = new Person();
var Person = (firstName, lastName, age) => {
   this.firstName = firstName;
   this.lastName = lastName;
   this.age = age;
   this.getName = () => this.firstName + " " + this.lastName;
} */
var Bar = function() {
    ​    this.foo = function() { return "bar"; }
    ​    this.foobar = { a: 1, b: 2 }
    }
    var firstBar = new Bar();
    var secondBar = new Bar();

