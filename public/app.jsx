var Greeter = React.createClass({
  render: function(){
    return React.createElement('h1',null, 'Hello React.createElement')

  }
}); // most common react method


ReactDOM.render( // --> most common react dom method
  <Greeter></Greeter>,
  document.getElementById('app')
);
