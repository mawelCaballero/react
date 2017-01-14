
var GreeterMessage = React.createClass({
  render: function(){
      return (
        <div>
          <h1>Lore ipsum </h1>
          <p>ksjd ksdj ksj dksj d</p>
         </div>
      );
  }
});

var GreeterForm = React.createClass({
  render: function(){
      return (
        <form>
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
  onButtonClick: function(element){
    element.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0){
      this.setState({
        name : name
      });

    }
  },
  render: function(){
    var name  =  this.state.name;
    var message = this.props.message;
    return (

      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
        <GreeterMessage/>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"></input>
          <button>Set Name</button>
        </form>
        <GreeterForm/>
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
