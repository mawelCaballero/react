# Example Application
_________________________________________________________________________
## In this lesson: Why using Link?

### Why not use a `<a>` in our render instead of `<Link>` ?

````javascript

<div>
    <h2>Nav Component</h2>
    <Link to="/" >Get Weather</Link>
    <Link to="/about">About</Link>
    <Link to="/examples">Examples</Link>

    <a href="#/about">About alternative</a>
</div>

````
It works, but if we are suing Link we have an extra features like classes and functionalities just for the current page.

So we are going to add new props to out Link component such as:
* activeClassName
* activeStyle

`````javascript
<div>
    <h2>Nav Component</h2>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
    <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
    <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
</div>
````
If we use an anchor `<a>` these properties are not available.

using IndexLink and Link we are extending the functionality.
