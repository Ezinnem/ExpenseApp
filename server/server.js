const express = require('express');
const router = require('./routes/routes.js');
const path = require('path');
const bodyParser = require('body-parser');
const Expense = require('./models/Expense');

const app = express();
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, "../client"));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0-kgug2.mongodb.net/test?retryWrites=true&w=majority');

app.use('/', router);


module.exports = app;