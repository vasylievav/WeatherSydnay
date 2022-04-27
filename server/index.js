
const express = require('express');
const path  = require('path');

const app = express();


app.use(express.static(path.join(__dirname, '../public')))

//body parsing middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./api')) 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = app