let obj = [
  {name:"Umesh",
  gender:"Male"},
  {name:"Priya",
    gender:"Female"},
  {name:"Suresh",
    gender:"Male"},
    {name:"Ashwini",
    gender:"Female"},
    {name:"Rahul",
    gender:"Male"},
]


let output = obj.map((elem, index)=>{
  if(elem.gender === "Male"){
    return console.log({name: elem.name, index: index})
  }
})