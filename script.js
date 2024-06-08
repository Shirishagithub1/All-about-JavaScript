let heading =document.getElementById('js');

// let content = heading.textContent

// console.log(typeof(content));

// heading.textContent = "mahatma gandhi university"

// heading.style.color ='red';

// set the id

// heading.setAttribute('id' , 'java');


// String methods :

 let college ='kakatiya junior college';

for(let i =0; i<college.length; i++){
    console.log(college[i]);
}


//or

for( let string of college){
    console.log(string)
}
// //index positions :

// college = college[0]




// heading.textContent = college;


// //slice method

// let university ="mahathma gandhi university";

// university = university.slice(9,16);

// heading.textContent = university;


// //UpperCase and Lowercse :

// school = "Krishnaveni";

// school = school.toUpperCase();


// heading.textContent = school;

// //length of string :

// device = "Computer"

// device =device.length

// heading.textContent = device;


// //ascii value
// //device =device[0].charCodeAt9();


// //cancatinate
// home = "Sweet Home";

// home = home.concat(home);

// heading.textContent = home;


// //endswith , startwith


// item = "spoon";

// item = item.endsWith("n"); 

// heading.textContent = item;


// //incldes

// items = "chair";

// items = items.include('ch');

// heading.textContent = items;


// //repeat();

// company ="Atos";

// company = company.repeat(2);

// heading.textContent = company;


// //repeat()
// college =college.repeat(3);



//replace the letter or  word

// college = college.replace("ka","hg");

// college =college.replaceAll('k',h)


// //sub string

// college = college.substring(0,5)





//part of string
// college = college.lastIndexOf('k')




//Split : devide individual words:

// college = college.split(',')


// console.log(college);


// heading.textContent = college;




//to string
// let number =100.113;
// let numberOne = number.toString();

// console.log(numberOne)








//number tofixed:

// let num =3;
// let number =num.toExponential()
// heading.textContent = number;


//to fixed

//toprision:



//objects :

let mobile = {
    company :'relame',
    price :   30000,
    ram : 6 ,
    rom :120,
    color :'silver'

    
};

console.log(mobile);

//for accessing the specific value

//dot notation

let obj =mobile.company

obj = `My Bike is ${mobile.company} ${mobile.name} its price is ${mobile.price}, its gives the mileage of ${mobile.mileage} per liter`;

heading.textContent = obj;




