let arr = [1,23,4121,64,12,46,98,26,72,91896246];

let biggest = arr[0];

let temp = 0;

for(let i=1; i<arr.length; i++){
  if(arr[i] > biggest){
    biggest = arr[i];
  }
  
}
console.log("Current biggest number is: " + biggest);