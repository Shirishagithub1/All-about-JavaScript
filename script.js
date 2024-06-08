let arr = [1, 2,['siri', 32] , "dhanu", 'mgu', { name : 'ajJs' , age: "13" }, true, false, null, undefined];

// console.log(arr);


let name = arr[2][0].slice(0,3);
console.log(name);


let person =arr[5];

console.log(person);


//individual items :
let name2 = person.age
console.log(name2);


let myName =arr[3];

myName =myName.replace('0',"p")

console.log(myName);

//length

let lenghthOfArray =arr.length;

console.log(lenghthOfArray)

let basic =['a','e','i','o']


console.log(basic)

//push :

basic.push('u');
basic.push('p')

console.log(basic)

//pop : remove the end of the array

basic.pop();
basic.pop();

basic.pop();


console.log(basic);


//un-shift : add the begining

basic.unshift('i');

console.log(basic);


//shift : remove the from begining

basic.shift();

console.log(basic);


let emptyArray= [];

console.log(emptyArray);

emptyArray.push("siri");

console.log(emptyArray);



let array =['siri','jaanu','ram','siva','dileep'];

for(let i=0; i<array.length; i++){
    let index = array[i];
    console.log(index);
}


// for (let names of array){
// console.log(names)
// }


let vowels =['a','u','i','o','e','o','j','l','b','m'];

let onlyVowels =[];
let consonents =[];
let vowelsString ='aeiou'
for (let letter of vowels){
    if(vowelsString.includes(letter)){
        onlyVowels.push(letter)
    }
    else{
        consonents.push(letter)
    }

}
console.log(onlyVowels);
console.log(consonents);


//aray destructuring:

let array1 =  ['siri','raju','kajal','samantha'] 


let [name1,name3, ,name4] =array1;
console.log(name1,name3,name4);


let persons =[{name : "sam",age :22,study : "B tech"},{name : "Kaju",age :16,study : "B tech"},{name : "Raku",age :12,study : "B tech"}]


for (let person of persons ){

    const {name,age,study} =person;
    console.log(name,age);

    
}


//higher order functions:-

function fullName(name){
    return `my name is ` +name;
}
let nameOfGirl = fullName("siri");

console.log(nameOfGirl);


// //2nd one

// function fullName (age){
//     const myAge = age();
//     console.log(myAge);
// }
// let nameOfPerson =fullName(function age(){
//     return 20;

// });

// console.log(nameOfPerson);

function myOwnName(name){
    let myName =`my name is  ${name}`;

    return myName;
}
let namOfPersons = myOwnName(function second(){
    console
});//argument

console.log(namOfPersons);

//3 higher order fun we are going to add argument

function myOwnName1(one){
    one();

}
myOwnName1(function one(){  //argument
    console.log("my name is kajal")
});






