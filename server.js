const express = require('express');
const  mongoose = require('mongoose');

const users=require('./routes/api/users');
const serviceproviders = require('./routes/api/serviceproviders');

const app=express();

//dbconfig 
const db = require('./config/keys').mongoURI;
//connetc to mongo db
mongoose
.connect(db)
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));

//use routes
app.use('/api/users',users);
app.use('/api/serviceproviders',serviceproviders);



app.get('/',(req,res) => res.send('hello  world'));

const port =process.env.PORT || 5000;

app.listen(port,() => console.log(`Server running on the port ${port}` ));

