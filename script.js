//1)Function Decaration


function myName(){
    let name ="siri"

    console.log(name);
    let a =2;
    let b =8;
    console.log(a+b);

    for(i=0;i<=3;i++){
        console.log(`Function Decaration ${i}`)
    }

}
myName();


//2) Function Expression:

let collegeName = function(){
    console.log("Function Expression")
}
collegeName();



//3)  arrow function


let friend = () => {
    
    
    console.log("welcome to insta") //return 
}
friend(); //calling function


//arguments and parameters return keyword:

const fullName1 = (secondName , firstName,age=20) => {


let fllName = `my Name is : ${firstName} ${secondName} my age is :${age}`;

console.log(fllName)
}
fullName1("siri", "Ale");
fullName1("dhan", "R");


//return keyword :

const fullName2 = (secondName , firstName,age=20) => {


    let myName = `my Name is : ${firstName} ${secondName} my age is :${age}`;
    
    return myName;
    }
    let result = fullName2("siri", "Ale");
    

    console.log(result);


// Ex-2:

const fullName3 = (secondName , firstName,age=22) => {


    return `my Name is : ${firstName} ${secondName} my age is :${age}`;
    
   }
    let result1 = fullName3("jaanu", "Ale");
    

    console.log(result1);


    //Dom(Document Object Model)

    //Manipulating the html css with help of JS


    let myHeading = document.getElementById('js');

    let num = 1;
function changeName(){
    let a = 90>30;

    myHeading.textContent ="siri";
}

// const element = document.getElementById("intro");

// document.getElementById("demo").innerHTML ="Rondem text:" +element.unnerHTML;




const element = document.getElementById("p");

document.getElementById("demo").innerHTML ='The text is first paragraph' +element[0],innerHTML;


 