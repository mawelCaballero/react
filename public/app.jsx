var Greeter = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello REACT</h1>
        <p>This is a form a component!</p>
      </div>
    );

  }
}); // most common react method


ReactDOM.render( // --> most common react dom method
  <Greeter></Greeter>,
  document.getElementById('app')
);
