
var GreeterMessage = React.createClass({
  render: function(){

    var name = this.props.name;
    var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message + '!!'}</p>
         </div>
      );
  }
});

var GreeterForm = React.createClass({

  onFormSubmit: function(element){
    element.preventDefault();

    var name = this.refs.name.value;

    if (typeof name === 'string' && name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },

  render: function(){
      return (
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"></input>
          <button>Set Name</button>
        </form>
      );
  }
});


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
  handleNewName: function(name){
      this.setState({
        name : name
      });
  },
  render: function(){
    var name  =  this.state.name;
    var message = this.props.message;
    return (

      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
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
