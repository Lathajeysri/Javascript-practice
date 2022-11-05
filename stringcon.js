console.log('hello');
var firstName="Dhakshin";   //Initializing the two string variables
var lastName="Saran";
var fullName= firstName.concat(" ",lastName); //merging using concat concept
console.log("Full Name is"+" "+fullName);

 // printing first letter of both string
var startFirst=firstName.slice(0,1);   //slice method it slices from index 0 to length of 1
var startSecond=lastName.slice(0,1);
console.log("First letter of both name is"+" "+startFirst+" and "+startSecond);

//reversing the two strings

/*first spliting the two string using split method by giving space
   then reversing the two string using reverse function*/

   var reverseFirst=fullName.split(" ").reverse().join();    //here fullName is Dhakshin Saran
console.log("Reverse of two string is "+reverseFirst);

var reverseFirstName=firstName.split("").reverse().join();    //reverse of all character in one string
console.log("Reverse of first string is "+reverseFirstName);


//length of a variable
var lengthFirst=firstName.length;
console.log("The length of FirstName is "+lengthFirst);

// find the index of letter 'a'
  var colourName="black";   //initailizing new string variable
  console.log("Name of color is "+colourName);
  console.log("The index of a is "+colourName.toLowerCase().indexOf('a'));  //done  using index function

  

//number of occurence of 'a'
  function countOfLetter(str,letter){
  var  count=0;
   for(var i=0;i<str.length;i++){    
      if (str.charAt(i)==letter){
         count+=1;
      }
   }
   return count;
   }
   var letterToCheck="a";
   var result=countOfLetter(colourName,letterToCheck); // passing the parameter to a function
   console.log( "The count of a is "+result);



// print a number with prefix with $
   var firstnum=10;  //intialize number
const adddollar=Symbol.for('$');    //first it will assign the value to a variable
    const dollar1=Symbol.keyFor(adddollar);  //keyfor will assign just $ to a variable
    console.log("Number with prefix dollar is "+dollar1+firstnum);

//question6 
var number1=10;  //initialize the variable
var number2=5;

                                       //designing the structure of function to perform task
function add(a,b){             
   return a+b;
 }
//function to perform subtract
 function sub(a,b){
   return a-b;
 }

 //function to perform multiply
 function mul(a,b){
   return a*b;
 }

 //function to perform subtract
 function divide(a,b){
   return a/b;
 }
 var totaladd=add(number1,number2);   //passing the parameter to a  function add
console.log("Addition of two numbers is "+totaladd);

var totalsub=sub(number1,number2);   //passing the parameter to a  function subtract
console.log("Subtraction of two numbers is "+totalsub);

var totalmul=mul(number1,number2);   //passing the parameter to a  function multiply
console.log("Multipication of two numbers is "+totalmul);

var totaldivi=divide(number1,number2);   //passing the parameter to a  function divide
console.log("Division of two numbers is "+totaldivi);

// floating and integer
 var num3=10;              //initializing an integer value
 var num4=3.7;             // initializing float value

 //converting float into int
 console.log("Conversion of float into integer is"+Math.floor(num4));  
 
 //round of float value
 console.log("Round of Float number is "+Math.round(num4));

 //conversion of integer into float
 console.log("conversion of integer into float "+parseFloat(num3).toFixed(2));
 
 // adding float and integer values
 var addNum=num3+num4;
 console.log("Adding float and integer value is "+addNum);