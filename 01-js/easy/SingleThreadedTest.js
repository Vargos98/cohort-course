let sum = 0;
// Over hear the the for loop below will run for a very long time as JavaScript is single threaded and the whole thing would run on a single thread/core.
for(let i =0;i<=1000000000000000;i++){
  sum +=i;
}

console.log(sum);