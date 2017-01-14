var Greeter = React.createClass({
  getDefaultProps: function()
  {
    return {
        name: 'React',
        message : 'This is a form component'
    };
  },
  getInitialState: function (){
    return {
        name: this.props.name

    };
  },
  onButtonClick: function(element){
    element.preventDefault();
    var name = this.refs.name.value;
    this.refs.name.value = '';
    this.setState({
      name: name
    });

  },
  render: function(){
    var name  =  this.state.name;

    var message = this.props.message;
    return (

      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name">  </input>
          <button>Set Name</button>
        </form>
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
