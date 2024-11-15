const express =require('express');
const PORT = 3000
const app = express();
app.use(express.json());
app.get('/',(req, res)=>{
      res.send('Welcome to Simple API project that show case my name, hobby and dream or life Goal!')
})
app.listen(PORT,()=>console.log(`Server is Running and Listen on Port number ${PORT}...`))