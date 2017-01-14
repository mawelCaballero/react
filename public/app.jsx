var Greeter = React.createClass({
  getDefaultProps: function()
  {
    return {
        name: 'React',
        message : 'This is a form component'
    };
  },
  render: function(){
    var name  = this.props.name;
    var message = this.props.message;
    return (

      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
      </div>
    );

  }
}); // most common react method

var name = 'Mawel';
var message = 'This is a custom message defined as var ';

ReactDOM.render( // --> most common react dom method
  <Greeter name={name} message={message}></Greeter>,
  document.getElementById('app')
);
