// Q-1

// let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
// let num = 5;
// function test(arr , num){
//  arr.includes(num) ? console.log(arr.indexOf(num)) : console.log(-1);
// } 
// test(arr , num);


// Q-2 

// let arr1  = [1 , 2 , 3 , 4 ,5  ,7, 8 , 9 , 10].sort((a , b)   => a - b);

// function missingNumber(arr1){
//   for(let i= 0; i<arr1.length; i++){
//     if(arr1[i] - arr1[i-1] == 2){
//         console.log(arr1[i - 1] + 1);
//     }
//   }
// }


// missingNumber(arr1);


// Q-3
// let arr = [1 , 1 , 2 , 2 , 3, 4, 5] 
// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (uniqueArr.includes(arr[i]) != true ) {
//         uniqueArr.push(arr[i]);
//       }else{
//         continue;
//       }
//     }
//     console.log(uniqueArr);
//   }

//   removeDuplicates(arr);

// Q-4 

// function calculateAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     let avg = sum / arr.length;
//     return avg;
//   }
  
