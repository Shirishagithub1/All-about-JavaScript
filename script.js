//1. Callback Methods: 
    //   a. What is a callback function in JavaScript?  

    //A JavaScript callback is a function which is to be executed after another
    // function has finished execution. 
      
    // b. Write a function that takes a callback as an argument and calls it.

       function name(callback){
        console.log("siri...");
        callback();
        console.log("dhanu...")
       }
       function myCallback(){
        console.log("This is callbck")
       }
       name(myCallback);
    //2. Timers in javascript :
    //a. explain thw differnece b/w setTimeout and setInterval

    //The setTimeout() method is used to call a function after a certain period of time. The setInterval() Javascript method is used to call a function
    // repeatedly at a specified interval of time.


    //b. Write a code snippet using setTimeout to display a message after 3 seconds.
    
        
       setTimeout(function(){
          console.log("here displyed after 3 seconds")
             },3000);
        

       
//3. Dom Project with timers:

//a. Create a countdown timer that displays numbers from 5 to 1 on a webpage. 

let count =5;
let startButton = document.querySelector("start");
let displayTimer = document.querySelector("timer");
function startTimer(){
    startButton.setAttribute("disable",true);
    let id=setInterval(function(){
        displayTimer.innerHTML -= 1;
        --count;
        if(count==1){
clearInterval(id);
        }
    },1000)
    console.log("hello",count)
    setTimeout(() =>{
        console.log(("hello",count))
    },5200);
}





//b..Change the background color of a div element every 2 seconds using setInterval.

var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["black", "blue", "brown", "green"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);

//4.Spread and Rest Operators: 
// a. What do the spread and rest operators do in JavaScript? 

//rest operator is used to gather elements into an array, while the spread operator is
// used to spread the content of an array.


//b.Use the spread operator to concatenate two arrays.


const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const concatenateArray = [...array1, ...array2];


console.log(concatenateArray);

//5. This Keyword :

//a. Describe the role of the this keyword in JavaScript. 

//arrow function is not going to have its own this keyword 


//b.Provide an example where this is used within an object method

let detailsOfPerson = {
    name : "Shirisha",
    secondName : " Ale",
    age : 22,
   
    fullName: function(){
        const myName = `Hello my name is : `+this.name + this.secondName;
        console.log(myName)
    }
    
}

detailsOfPerson.fullName();

