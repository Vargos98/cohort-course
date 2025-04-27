const fs = require('fs');

function readData(){
  return new Promise((resolve,reject)=>{
    fs.readFile('weather.json', 'utf-8',(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(JSON.parse(data))
      }
    });
  });
  
}

readData()
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
})