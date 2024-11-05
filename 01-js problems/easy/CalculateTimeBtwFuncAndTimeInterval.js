function calculateSum(){
  let a = 0;
  for(let i = 0; i <1000;i++){
    a= a=+1;

  }
  return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();

const afterDate = new Date();

let afterTimeInMs = beforeDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);