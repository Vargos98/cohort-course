
function square(n){
  return n*n;
}
function cube(n){
  return n*n*n;
}

function quad(n){
  return n*n*n*n;
}


function doSomething(a,b,fn){
   a = fn(a);
   b = fn(b);
  return a+b
};

let ans = doSomething(2,2, square);

console.log(ans);

// This method is implemented using callbacks as in JS we can pass functions as an arguments to another function.