/*  var Person = function(name, age) {
    ​    this.name = name;
    ​    this.age = age;
    ​    this.getDetails = function() {
    ​        return this.name + ", " + this.age;
    ​    }
    }
    var Student = function(name, age, subject) {
    ​    Person.call(this, name, age);
    ​    this.subject = subject;
    ​    this.getDetails = function() {
    ​        return this.subject + ": " + this.name + ", " + this.age
    ​    }
    }
    var person = new Person("Antonio Lyasas", 19);
    var student = new Student("Antonio Lyasas", 19, "Maths"); 
    console.log(typeof(person) !== typeof(student)); */

     /* var Building = function(address) {
        this.address = address;
     }
     var bank = new Building("12 Alphabet St, AB1 CD2");
     var bankCopy = new Building("12 Alphabet St, AB1 CD2");
     console.log(bank.prototype !== Building);  */

     function printOut() {
        ​	for (i = 0; i < arguments.length; i++) {
        ​		console.log(arguments[i].toString());
        ​	}
        }
        printOut([1,2,3]);
        