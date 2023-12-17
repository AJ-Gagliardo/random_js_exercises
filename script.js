// Try the following exercises (and don’t forget to use console.log()!):

// Add 2 numbers together! (just type console.log(23 + 97) into your html file)
// Add a sequence of 6 different numbers together.
// Print the solution to the following equation: (4 + 6 + 9) / 77
// Answer should be approximately 0.24675
// Let’s use variables!
// Type this statement at the top of the script tag: let a = 10
// In the console console.log(a) should print 10
// Try the following in the console: 9 * a
// and this: let b = 7 * a (returns undefined *) and then console.log(b)
// You should be getting the hang of this by now… try this sequence:
// Declare a constant variable MAX with the value 57
// Set another variable actual to MAX - 13
// Set another variable percentage to actual / MAX
// If you type percentage in the console and press Enter you should see a value like 0.7719



// console.log('hello world!');

// let x = 'hello world';

// console.log(23+97)

// console.log(1,2,3,4,5,6)

// console.log(4+6+9)

// console.log((4+6+9)/77)

// let a = 10;

// console.log(a); 

// console.log(9*a)

// let b=7*a;
// console.log(b);

// const MAX = 57;
// console.log(MAX)

// let actual = MAX -13;
// console.log(actual)

// let percentage = actual/MAX


// // strings

// const single = 'Single quotes';
// const double = "Double quotes";
// const backtick = `Backtick`;

// console.log(single);
// console.log(double);
// console.log(backtick);

// let name = 'Antonio';
// let greeting = `Hello ${name}`;
// console.log(greeting);

// const one = 'hello,'
// const two = 'wassup!'
// joined = `${one}${two}`
// console.log(joined)

// console.log(one + " "+ two);

// let song = 'hysteria';
// let score = 9
// const highestScore= 10
// let output = `I like the song ${song}, I gave it the score of  ${score / highestScore*100}%`;
// console.log(output);

// const bigmouth = 'I\'ve got no right to take my place…';
// console.log(bigmouth);

// let str = "Apple, Banana, Kiwi";
// let part = str.slice(-4)
// console.log(part);

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

// if (10 > 11){
//     alert("10 is the highestScore");
// }
// else {alert("10 is not the highestScore")}


// let hour = 12;
// if (hour < 10 || hour > 17){alert('The store is closed at this time');}
// else {alert('the store is open at this time!')};


//////////

// let firstName = "";
// let lastName = "";
// let nickName = "";
// alert(firstName || lastName || nickName || "Anonymus");

// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

// let age = 9;

// if (age>14 || age <= 90){alert("age is inside the limits")}


// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

// if(!(age >=14 && age<=90)){alert('Age is off-limits')}

// 



// let user = prompt('Insert your username');

// if (user === 'Admin'){let password = prompt('insert your password');
// if (password === "TheMaster"){alert("welcome!");}
// else if (password == ""){alert("canceled");}
// else{alert("incorrect password");}
// }
    
// else if (user==""){alert("Canceled");}
// else{alert("I dont know you");}


// let accessAllowed;
// let age = prompt('how old are you??');

// if (age>=18){
//    accessAllowed = true; 
// } else {accessAllowed=false;
// }

// alert(accessAllowed);

// let answer = prompt('What is the official name of Javascript?')

// if(answer=="ECMAScript"){alert('Right!');}
// else{alert('Wrong!')};

// let numb = prompt('insert a numbah!')

// if (numb>=1){alert('Number is greater than zero');}
// else if(numb<0){alert('number is negative')}
// else if(numb==0){alert('number is zero')}
// else{alert('this is not a number!')}

/////////////////

// let result;

// a = 4
// b= 1
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

//////// change to '?'

// a = 4
// b= 1
// let result;

// (a+b < 4) ? alert('Below') : alert('Over') ;


//// another exercise change to ?'
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

/////answer


// let login = prompt('Username please')

// let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings': (login == '') ? 'No login' : '';

// alert(message);



// //////
// function favoriteAnimal(animal){
//     return animal + " is my favorite animal"
//   }
//   console.log(favoriteAnimal('Goat'))

//   let UserName= "Antonio";

//   function showMessage(from, text){
//     from = '*'+from +'*';
//     alert(from+': '+ text)
//   }
//   let from = 'anon'
//   showMessage(from,'hi');
//   ///////


//////
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }


// ////answer///
// function checkAge(age){
//     return (age>18) ? true : confirm('Did parents allow you?');
// }

//   checkAge(18);
  //////


  ////Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

/////

// function min(a,b){
//     return (a>b) 
//     ?  a 
//     : (b>a)
//     ? b 
//     : 'error'
// }

// min(2,5)


// function pow(x,n){
//     x=prompt('give me a number');
//     n=prompt('now lets elevate it to the power of...');
//     return x**n;

// }

// console.log(pow())


//exercise 2 of foundations javascript 4 
// const repeatString = function(string, number) {
//   let stringList=[];
//   for (let i=0 ; i<number; i++){
//   stringList.push(string)
// }
// return stringList.join("")

// };


// const reverseString = function(string) {
//   let list = []
//   let reverseList=[]
// for(i=0 ; i<string.length; i++){
// // for(i=string.length; i==0, i--){
//   list.push(string[i])

// }
// // for(i=string.lenth; i<0; i-1){
// // reverseList.push(string[i];
// //   return reverseList)
// // }

// for (letters of list){
//   console.log(letters)
// }
// return list.slice(-1,3)
// };

/* exercise 3 reverse string */
// const reverseString = function(string) {
//   return string.split("").reverse().join("")
// };

// Do not edit below this line
// module.exports = reverseString;

// removeElementFromArray([1, 2, 3, 4], 3); // should return [1, 2, 4]

const removeElementFromArray = function(list, toDelete){
  const index= list.indexOf(toDelete);
  list.splice(index,1);
  return list;

}





// const removeFromArray = function(list, toDel) {
//   let listItems = [];
//   let indexToDel = indexOf(toDel) ;
//   return indexToDel;

// };

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.indexOf("Orange")

