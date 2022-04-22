class Person{
    constructor(nm, age){
        this.name = nm
        this.age = age
    }

    sayHello(){
        console.log('Hello world!')
    }
}

const PersonC = function(nm, age){
    this.name = nm
    this.age = age
}

PersonC.prototype.sayHello = 
function(){console.log('Hello world')}

PersonC.call()

console.log(PersonC.prototype)
console.log(Person.sayHello)



