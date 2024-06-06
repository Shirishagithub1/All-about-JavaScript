//Checkout the higher order functions in the javascript


function myOwnName (name){
    let babuName = name();   
 
   return babuName
 }
 
 
 let myName = myOwnName(function name(){
     return 'my name is : Siri'
 });
 
 
 
 console.log(myName);


 //check the higher order array methods like map filter reduce.

 let arr = [{ name : "siri",  study: "BSc", village :"nkl" }, { name : "Hari" ,  study: "MCA" , Village : "Hyd"} , { name : "Jaanu", study: "MBBS" , Village : "Nlg"}, { name : 'Kaju', study: "BE" , Village : "Mumbai"} ];


 //higher order methods :

 //forEach :

 let names = ['siri','ram','shiva','jansi','raghu','aishwarya','dileep']
//  arr.forEach(function(names,index,arr){

//     console.log(index,arr);
//  });

 //map :


 let newData =names.map((name) => {

    return name[0];
 });
 console.log(newData.join(','));

//or
 let number =[2,7,9,3,3]

 let newData1 = number.map((num) =>{
   return num *3


 });
 console.log(newData1);


 //filter 

 let num = [3,5,3,3,51,13,9,65,8]

 let filteredData =num.filter((num) =>{


    return num <=10;
 });


 console.log(filteredData);


 //Reduce :
 let number1 =[2,4,3,2];

 let  totalValue = number1.reduce((accumulator,num) => {

    return accumulator + num
 },0);

 console.log(totalValue);

 let names1 = ['siri','ram','shiva','jansi','raghu','aishwarya','dileep']

 //include :

 let isThere = names1.includes('siri');

 console.log(isThere);


 //or 

 let number3 =[3,5,32,9,24]

 let num3 =number3.every(( nm) =>{
    
 });
 console.log(num3);


 //reverse :
 let names2 = ['siri','ram','shiva','jansi','raghu','aishwarya','dileep']

let  names6 =['sai','kumar','ab']
 const  allNames =names2.concat(names6).reverse().slice(0,5)[2][2];

 console.log(allNames);




















