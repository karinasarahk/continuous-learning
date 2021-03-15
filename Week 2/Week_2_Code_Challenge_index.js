const data = require('./lib/arrayFactory.js');
const test = require('./lib/test.js');

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter(i => typeof i === 'number');
}

// Should return array
function sortAscending(data) {
  // Code Here
  let cleanedData = clean(data);
  for(let i = 0; i < cleanedData.length ; i++ ){
    for(let j = 0; j < cleanedData.length; j++){
      if(cleanedData[j]>cleanedData[j+1]){
      let temp = cleanedData[j];
      cleanedData[j]=cleanedData[j+1];
      cleanedData[j+1]= temp;
      }
    }
  }
  return cleanedData;
}

// Should return array
function sortDecending(data) {
  // Code Here
  let cleanedData = clean(data);
  for(let i = 0; i < cleanedData.length ; i++ ){
    for(let j = 0; j < cleanedData.length; j++){
      if(cleanedData[j]<cleanedData[j+1]){
      let temp = cleanedData[j];
      cleanedData[j]=cleanedData[j+1];
      cleanedData[j+1]= temp;
      }
    }
  }

  return cleanedData;
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);