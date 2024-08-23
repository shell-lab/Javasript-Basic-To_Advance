//Print voting eligibility using conditional statement 

let Firstname = "Sameer Hussain";
let age = "18";
let isMarried = false;
 if (age >= 18){
    console.log(Firstname +" is eligible to vote.")
 }
 else {
    console.log(Firstname +" is not eligible to vote.")
 }

 // print even odd
 let numArray = [1,2,3,4,5,6];
 let evennumber =[];
 for (let i = 0; i<numArray.length ; i++ ){
     if (numArray[i] % 2 == 0){
         evennumber.push(numArray[i]);
    }
}

 console.log(evennumber);

 //greet person base on gender
 
 let PersonArray = ["Sameer" ,"Arjun"];
