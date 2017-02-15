var names = ['Manu','Julio','Gale'];
/*
names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('ArrowFunc', name);
});

names.forEach((name) => console.log(name));


var returnName = (name) => name + '!';

console.log(returnName('Manu'));

*/
var person = {
  name: 'Manuel',
  greet: function (){
    names.forEach((name) => console.log( this.name + ' Says hello to ' +  name));
  }
};


person.greet();
