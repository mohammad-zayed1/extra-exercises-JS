
// Q-1 :

// 1 : 
console.log(-9 * 3);

// 2 :

console.log('value is ' + 50);

// 3 :

console.log(17 % 5);

// 4 :

console.log(5 % 17);

// 5 :

console.log(5 / 10);

// 6 :

console.log(4 == 4);

// 7 :

console.log(4 != 5);

// 8 :

console.log(7 <= 8);

// 9 :

console.log(Math.ceil(2.5) - Math.floor(2.5));


// Q-2 :

const readNumber = prompt('Enter a number');
alert(readNumber);

// Q-3 :

let num1 = Number(prompt('Enter a number 1'));
let num2 = Number(prompt('Enter a number 2'));

if(num1 < num2){
    alert(num1 + " " + num2)
} 
else {  
alert(num2 + " " + num1);
}

// Q-4 :
let n1 = Number(prompt('Enter a number 1'));
let n2 = Number(prompt('Enter a number 2'));
alert('the larger number is ' + Math.max(n1, n2));

// Q-5 :
let x = prompt('Enter a number 1');
let y = prompt('Enter a number 2');

alert(x + y);

// problem : if the user enter 1 and 2 the sum of these value = 12 not 3


// Q-6 :
let num = prompt('Enter a number between 1-9');

switch (num) {
    case '1': alert('ONE');  break;
    case '2': alert('TWO');  break;
    case '3': alert('THREE');  break;
    case '4': alert('FOUR');  break;
    case '5': alert('FIVE');  break;
    case '6': alert('SIX');  break;
    case '7': alert('SEVEN');  break;
    case '8': alert('EIGHT');  break;
    case '9': alert('NINE');  break;

    default:alert('PLEASE TRY AGAIN , THE NUMBER IS NONE OF THE RANGE');
        break;
}