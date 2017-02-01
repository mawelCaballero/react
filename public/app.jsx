var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var name = 'Manuel Caballero';


var message = 'This is a custom message defined as var ';

ReactDOM.render( // --> most common react dom method
  <Greeter name={name} message={message}></Greeter>,
  document.getElementById('app')
);
