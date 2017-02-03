# Example Application
_________________________________________________________________________
### In this lesson: Build an useful application. Weather app
___
## Creating our pages
## Description
We are going to create new 3 components and adding routes an links to our nav component.

- Main: Main component , print a message and contains a child component. This child component is passed by parameter in app.jsx
- Weather: Just to print a message and it will be the componet which be present by the default in Main component container. It's defined in IndexRoute on app.jsx
- About: Another child component of Main Component
- Examples: Another child component of Main Component

### How Can I define the navigation structure in app.jsx?
In app.jsx we have to define the Router structure for navigation.
In this structure, in root we render our Main Component and by default as child is defined WeatherComponent

````javascript
<Route path="/" component={Main}> // Root page
````

````javascript
<IndexRoute component={Weather}></IndexRoute> // Weather component is defined as child component by default in Main Controller
````

### How can I define the child components in  Main Component?
#### UPDATE-->Navigation component was added in Main component
In Main component, we only have to add this sentence:
````javascript
var Main = React.createClass({
  render: function (){
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children} // child component passed by reference and it's going to RENDER it
      </div>
    );
  }
});
````
### What happen if i want to add more pages to our navigation?
No worries mate, we can do it as the following example. always contained in app.jsx as child of Route element.

````javascript
<Route path="/" component={Main}>
  <Route path="/about" component={About}/>
  <Route path="/examples" component={Examples}/>
  <IndexRoute component={Weather}></IndexRoute>
</Route>
````

#### Nav component is updated

In the previous branch we defined a Nav component but it was not doing anything. Now we have added Link components as:

```` javascript

var Nav = React.createClass({
  render: function(){

    return (
      <div>
          <h2>Nav Component</h2>
          <Link to="/" >Get Weather</Link>
          <Link to="/about">About</Link>
          <Link to="/examples">Examples</Link>
      </div>

    );
  }
});

````
