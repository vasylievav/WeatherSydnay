const csv =require('csv-parser');
const fs = require('fs');
const path  = require('path'); 
const weatherSydneyData =[];


 fs.createReadStream(path.join(__dirname, './sydney-temperatures.csv'))
  .pipe(csv({}))
  .on('data', (data) =>weatherSydneyData.push(data))
  .on('end', () =>{
    console.log("CVS file was successfully read: ", weatherSydneyData);
  
  })

 const getWeatherSydney = () => [...weatherSydneyData] 

 module.exports = {
  getWeatherSydney
}
