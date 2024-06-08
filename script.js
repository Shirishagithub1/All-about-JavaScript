const details =(name) =>{
    const college =name();
    const info =`my college name is `+college;
    return info;

}
let response =details(() =>'MGU');
console.log(response);


//timer
//1.set interval 

// let number =0;

// setInterval(function(){  //callbackfun
//     number++
//     console.log("Hey",number);
// }, 100);
// clearInterval(timer);

//2.set timeout:

setTimeout(() =>{
console.log("hello set timeout")
},100)



const timer  = document.getElementById('timer-count');

timer.textContent = 60;

let clearTimer;

function startTimer(event) {

    // data.setAttribute('disabled', true);

    clearTimer = setInterval(() => {
        let counter = Number(timer.textContent);
        counter -= 1;

        timer.textContent = counter;
        
        if(counter === 0){
            clearInterval(clearTimer)
        }
        
    }, 1000)
}

const stopTimer = () => clearInterval(clearTimer);


//Spread Operator and Rest Operator :

let employee = {
    name : "Janu",
    age : 23,
    study: "BE"
}

let employee2 = {
    name2 : "dhanu",
    age2 : 42,
    study3: "Btech"
};


let Collegues = {
    ...employee,
    ...employee2
}

console.log(Collegues);


const employeeDetails ={
    name :"keerthi",
    age : 22,
    isSheGood :true,
    technology :['java',"testing"]
}

//destructuring:

const {name, ...restOfTheKeys} = employeeDetails;

console.log(name)
console.log(restOfTheKeys)