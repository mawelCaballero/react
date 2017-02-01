
var React = require('react');
var ReactDOM = require('react-dom');


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

    var updated = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (typeof name === 'string' && name.length > 0){
      this.refs.name.value = '';
      updated.name = name;

    }

    if (typeof message === 'string' && message.length > 0){
      this.refs.message.value = '';
      updated.message = message;
    }


    this.props.onNewData(updated);
  },

  render: function(){
      return (
        <form onSubmit={this.onFormSubmit}>
          <div><input type="text" ref="name" placeholder="Enter name"></input></div>
          <div><textarea ref="message" placeholder="Enter message"/></div>
          <div><button>Submit</button></div>
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
        name: this.props.name,
        message : this.props.message

    };
  },
  handleNewData: function(updated){
      this.setState({
        name : updated.name ,
        message : updated.message
      });
  },
  render: function(){
    var name  =  this.state.name;
    var message = this.state.message;
    return (

      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
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
