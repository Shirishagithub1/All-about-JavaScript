class Person{
    constructor(name,surname){
            this.firstName = name;
            this.surName =surname;
    }
    getName(){
        return`my name is ${this.firstName} and my name is ${this.surName}`
    }
}
const info = new Person("siri","ale");//instaciate
console.log(info);
const info2 =new Person("jay","ale")
console.log(info2);


// class car extends Person{
//     constructor(name,model,name,myAge){

//         super(name, myAge);
//         this.carName =company;
//         this .model =model;
//     }
//     getInfo(){
//         return this.getName()
//     }
// }
// let vehicle =new car('suzuki','swift','sirif',22);

// let name = vehicle.getName();
// console.log(vehicle);

//for Each:

Array.forEach(function(){
console.log()
});