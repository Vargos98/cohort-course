// Question-1

// const nums = [10,20,30]

// for(let i =0;i<nums.length;i++){
//   if(i === nums.length-1){
//     nums[i] = 99;
//   } 
  
// }
// console.log(nums);



// Question 2
// const values = [1,29,30,64,78,98]

// function getLastValue(values){
//   for(let i =0;i<values.length;i++){
//     if(i === values.length-1){
//       return values[i];
//     }
//   }
  
// }

// console.log(getLastValue(values));

// Question 3

// const array = [1,20,22,24,5]
// let temp =0;
// function lastAndFirstSwap(arr){
//   for(let i =0 ;i<arr.length;i++){
//     temp = arr[0];
//     arr[0] = arr[arr.length-1];
//     arr[arr.length-1] = temp;
//     return arr;
//   }

// }

// console.log(lastAndFirstSwap(array))


// Question 4

  // let arr=  [0,1,2,3,4,5,6,7,8,9,10]

  // let count = 0;

  // for(let i =0;i<arr.length;i++)
  // {
  //   if(arr[i]%2 ==0)
  //   {
  //     count++;
  //   }
  // }

  // console.log(count)


// Question 5

  // const arr = [-2,-1,0,99];

  // const brr = arr.map(num=> num+1);

  // console.log(arr);
  // console.log(brr)

// Question 6 

// const arr = [1,2,3];
// let target = 3;
// const addNum= (arr,target)=>{
  
 
//      brr = arr.map(num=> num+target);
//     return brr;
  
// };

//   console.log(arr);
//   console.log(addNum(arr,target))


// Question 7

// const arr=[1,1,2]
// const brr = [1,1,3]

// const addArrays = (arr,brr)=>{
//  const crr =[];
//  for(let i=0;i<arr.length;i++){
//   crr.push(arr[i]+brr[i]);
//  }
//  return crr;

// }

// console.log(addArrays(arr,brr));