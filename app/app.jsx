var React = require('react');
var ReactDOM = require('react-dom');

var obj1 = {
  name: 'Manuel',
  location: 'Gijon'
};

var obj2 = {
  age:33,
  ...obj1
};

console.log(obj2);

ReactDOM.render( // --> most common react dom method
  <h1>Boiler Plate app!</h1>,
  document.getElementById('app')
);
