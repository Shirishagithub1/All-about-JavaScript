
let Televison ={
    name : "R20",
    company : "Vu",
    price : 20000,
    quality : 1024,
    color :['silver','blue','white'],
    myFullName : function(name){
         return `My name is ${name}`
    },
    address:{
        house : {
            house1 :203,
            house2 : 200,
        },
        pincode :508211,
        village :'nakrekal',

    }
};


//Object Destructuring : 

let {name,company,color, price, quality } = Televison;
console.log('Television name is :', name, quality);

let myName = Televison.myFullName("Siri");
let myName1 =Televison.myFullName("Ale");


let myRoom = Televison.address.village;
console.log(myRoom);
console.log(myName, myName1);


//square bracket 

let house = Televison['address']['house']['house1'];

console.log(house);


//Global object inbuilt method math :

let minValue =Math.min(10,80);

console.log(minValue);

//Max

let maxValue = Math.max(20,80,567);

console.log(maxValue);


//square root

let myNumber = 25;

let checksqrt=Math.sqrt(myNumber);

console.log(checksqrt);

let tan =Math.sin()

//Round :fraction value

let pizza =290.07; 

//final price :291only



let finalPrice = Math.round(pizza);

console.log(`pizza price is ${finalPrice}`);

//floor :

let watch = 3000.64;

let watchPrice = Math.floor(watch);

console.log(watchPrice);

//ceil :

let watch1 = 3000.64;

let watchPrice1 = Math.ceil(watch1);

console.log(watchPrice1);


//Randem Number :

let random =Math.random() *6;


let floorTheValue = Math.floor(random);
console.log(floorTheValue);




//DOM Manipulations

function changecolor(event){
    // let random =Math.random() * 255;
    // console.log(random);

    let random1 = Math.random() * 255;
   let actualValue = Math.floor(random1);

   let random2 = Math.random() * 255;
    let actualValue2 = Math.floor(random2);

    let random3 = Math.random() * 255;
     let actualValue3 = Math.floor(random3);

    //  console.log(actualValue,actualValue2,actualValue3);


    document.body.style.backgroundColor = `rgb(${actualValue}, ${actualValue2}, ${actualValue3})`

    var color ='yellow';
    event.style.backgroundColor =color;
    
}
