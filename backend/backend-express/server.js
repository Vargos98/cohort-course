const express= require('express');
const app= express();
const PORT = 3000;

app.get('/api/router',(req,res)=>{
  res.json({
    name:'John Doe',
    age:30,
  })
})
app.post('/api/convo',(req,res)=>{
  console.log(req.headers.auth)
  res.send({
    msg:'Hello from POST! From ',
  })
})

app.get('/',(req,res)=>{
  res.send('Hello from Express!');
})

app.listen(PORT,()=>{
  console.log('Server is running on port 3000')
})