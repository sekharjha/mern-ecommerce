const express = require("express")

const app = express();

const port = 8000
// const port = 3000

const admin = (req,res)=>{
    return res.send('Hello There!!');
};
const isAdmin = (req,res,next)=>{
    console.log("is Admin is running");
    next();
};
app.get('/',isAdmin,admin);
app.get('/login',(req,res)=>{
    return res.send('You are in login page');
});
app.get('/signup',(req,res)=>{
    return res.send('Signup Page');
});

app.get('/admin',(req,res)=>{
    return res.send('This is admin');
});

app.listen(port,()=>{
    console.log('Server is up and running..');
})
// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))