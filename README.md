# Example Application
_________________________________________________________________________
### In this lesson: Build an useful application. Weather app
___

## Description
Application with a container. inside container we are going to divede it between nav and page component.
See picture:

![Template and structure concept desing](https://drive.google.com/uc?id=0B4Y8n9rDTStjOHI3OUUzbVVXMFk)

---
First of all

````
npm install react-router@2.0.0 --save
````
Using react-router for navigate among different screens.
Adding in our app.jsx the next variable for this propose:

```javascript
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// We are creating a multiple variables about react-router needer for navigation
// in the next sprint i will explain about IndexRoute, hashHistory

ReactDOM.render( // --> most common react dom method
  <Router history={hashHistory}>
    <Route path="/" component={}>
    </Route>
  </Router>,
  document.getElementById('app')
);
```
### Creating 2 new components: Nav and Main

#### Main: container

This component is going to contain Navigation component and Page component
```` javascript

var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function (){
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
      </div>
    );
  }
});

module.exports = Main;

````

#### Navigation

This component is going to contain all the links of the different app pages letting a navigation and showing , in future sprints, the content on Page Component  
```` javascript

var React = require('react');

var Nav = React.createClass({
  render: function(){

    return (
      <h2>Nav Component</h2>
    );
  }
});

module.exports = Nav;

````
