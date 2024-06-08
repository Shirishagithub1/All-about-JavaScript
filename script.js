//Promises:

//Callback hell:

// function data(() => {
//     return()=> {
//         return () =>{

//         }
//     }
// });


//1.Pending :

    let firstState =new Promise(() =>{});
    console.log(firstState)


    //3. Fullfilled state.

    const fullFilled = new Promise((resolve, reject) => {

    


     const a =12;
     const b =30;
     const total =a+b;
     resolve(total);
    });
    console.log(fullFilled);


    //3. Rejected promise :

    let rejectState = new Promise((resolve, reject) =>{
        let a =0;

        let b =0;

        reject("rejected primise")
    });

    console.log(rejectState)
    
//1. Resolve promise 
new Promise((resolve, reject) =>{


    const x =20;

    const y =30;

    const total =x+y;
    resolve(total);

}).then((result) => console.log(result))


//Promise Chaning :
let addition = (num, num1) => {
        return  new Promise((resolve, reject) => {
    
            let sum = num + num1 ;
    
            if(sum === 70){
               resolve(sum)
            } else {
               reject("parameters are not same")
            }
         })
    }
    
     addition(4, 30).then((result) =>  console.log(result))
     .catch((err) => console.log(err));


     //Async and await;

     console.log("First  thing");
// .
     console.log("Second thing")

     setTimeout(() =>{

        console.log(add)
        console.log("FutureOne")
        console.log("First Asynchronouse program")
     },1000)
     setTimeout(() =>{
        console.log("Second")
        console.log("Second Asynchronouse program")
     },1000)

     console.log("FourthOne ");

     console.log("fifthOne");

     //Async and Await:


     //arrow fun:
     const fullName = async() =>{

     }
     //fun declaration :

     console.log("first-aa")
      async function myName(){

        const data = await "MGU";
        console.log(data)

      }
      myName()

      console.log("second-aa")


      //arrow funvtion:

      const fullName1 =async () => {
        return "Name"
      }
      console.log(fullName1())


      //

      const theName =async (num, num1) => {
        try{
            const sum = num + num1;
            if(sum ===10){
              return sum
            }
        }catch(error){
            console.log(error)
            
        }
      }

    //   const responce =theName(2,8)

    const getResponce =async () =>{
        const data =theName(2,8);
        console.log(data)
    }

    getResponce();


//API :application progrmming interface

//Application Programming Interface". It's a way
// for two different programs, or software components, 
//to communicate with each other. APIs define the protocols and rules for how one component should interact with the other

//Crud Operations :

//Create, Read,Delete, Update


    


