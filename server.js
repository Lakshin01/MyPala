const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const serviceProviders = require('./routes/api/serviceProviders');
const businessProviders = require('./routes/api/businessProviders');

const app = express();

//Body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//dbconfig
const db = require('./config/keys').mongoURI;
//connect to mongo db
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

//use routes
app.use('/api/users', users);
app.use('/api/serviceProviders', serviceProviders);

//app.get('/',(req,res) => res.send('hello  world'));

const port = process.env.PORT || 1234;

app.listen(port, () => console.log(`Server running on the port ${port}`));
