//1. Write a function that takes an array and returns a new array with the elements in reverse order

    let array = ["siri", "kaju", "jay","dhanu", "sam"]

    const totalNames =array.reverse();

    console.log(totalNames)
     

 //2. Write a function that takes an array and an element, and checks if the element is present in the array.

 let array1 = ["siri","keerthi","samantha","kajal"]

let nameIsIncluded = array1.includes("samantha");

console.log(nameIsIncluded)

//3.  Write a function that takes an array and an element, and returns the index of the element in the array. If the element is not found, return -1.

const nms = ['sir','jaya','sri','sath','gan','sri'];

console.log(nms.indexOf('jaya'));


console.log(nms.indexOf('sri',3));


console.log(nms.indexOf('sam'));

//4.  Write a function that takes an array, removes the second element, and inserts two new elements in its place. Return the modified array.


  let names =["chair","tv","laptop","fan"]

  let removedNames = names.splice(0,2,"A.C","Fridge")

 
  console.log("Removed Names",removedNames);

  console.log(names);


//5.  Write a function that takes an array and returns a new array containing the first three elements.


const arr5 = ["siri","jay","kaju","sam"];
const n = 3;
const result = arr5.slice(0, n); //(start,end)
console.log(result); 

//6.  Write a function that takes two arrays and returns a new array that is the concatenation of the two arrays.

let arr =[2,4,6,3,6];

let arr1 =[7,7,4,4];

let totalValues = arr.concat(arr1)

console.log(totalValues);


//7.  Write a function that takes an array of strings and returns the array sorted in alphabetical order.


let array7 =["siri","babu","jay", "sai","abhi","kaju"];

let namesIsOrder = array7.sort();

console.log(namesIsOrder);

// 8.  Write a function that takes an array of numbers and returns a new array where each number is doubled.

let array2 = ["siri","janu","may","sai"]

let newNames =array2.map((name) =>{

    return 'siri';
});

console.log(newNames);


//9.  Write a function that takes an array of numbers and returns a new array containing only the even numbers.

// Initializing numbers array
let numbers = [8, 1, 5, 6, 9, 2];

let evenNumbers = numbers.filter(function(element) {
	return element % 2 === 0;
});


console.log(`Even numbers in an array are: ${evenNumbers}`);


// 10. Write a function that takes an array of numbers and returns the sum and multiplication of all the numbers in the array.

let number =[1,9];

let value =number.reduce((accumulator, number) =>{
   

      return accumulator + number
},1);

console.log(value)

//multiplication :

let number1 =[1,9];

let value1 =number1.reduce((accumulator, number1) =>{
   

      return accumulator * number1
},1);

console.log(value1)





