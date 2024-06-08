//Api(application programming interface)



//4 type of operations :

//Crud (create, read, update, delete)


//fetch method():

// const person = {
//     "name " : "MGU",
//     "age"    :20,
//     "course" : "js"
// }

let bike ={
    name : "fz",
    color: "green",
    price : "2l",
    comfort: true
}

console.log(bike);

const convertToJson =JSON.stringify(bike);

console.log(convertToJson)

const convertBackToObj =JSON.parse(convertToJson)

console.log(convertBackToObj);


const gtDataFromDb =async () =>{ //gt operation

    try {
    

    const result = await fetch("https://fakestoreapi.com/products");
    
    const response =await result.json();

    console.log(response)

}catch(error){
    console.log(error)
}
}
gtDataFromDb()


//Dom(Document Object Model)

//Events : //1.moouse events:

            //click, leave,entter,dbl,scroll,over,up
           //2.Keyboard events

           //keypress,keydown,keyup


 const   jsheading =document.getElementById("heading")


 const button = document .getElementById('btn')

//  let content =  jsheading.textContent;

// let content =jsheading.innerHTML;

button.addEventListener('mouseUp',(event) => jsheading.textContent = "Hey JS");

// button.addEventListener('dblclick',(event) => jsheading.textContent = "Hey Html");

// button.addEventListener('mouseover',(event) => jsheading.textContent = "Hey CSS");

// button.addEventListener('mouseleave',(event) => jsheading.textContent = "Hey Bootstrap");


button.addEventListener('click',(event)  => { 
    
    jsheading.textContent = "Hey Java";
    jsheading.style.color ="red";
    jsheading.style.backgroundColor = "yellow";

    jsheading.style.fontSize  ='45px'

    
});


