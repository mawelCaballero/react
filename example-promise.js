function getTempCallback(location, callback){
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Aviles', function(err, temp) {
  if (err){
    console.log('Error',err);
  }else {
    console.log('success',temp);
  }
});

function getTempPromise(location){

  return new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    },1000);

  });
}


getTempPromise('Aviles').then(
    function(temp){
      console.log('promise success',temp);

    },function(err){
      console.log('promise error',err);

    }
);
