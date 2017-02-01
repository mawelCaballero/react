var React = require('react');


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

module.exports = GreeterForm;
