var React = require('react');


//In this way, we are defining a stateless component. This is just because this component is just only printing a message, nothing complex
var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About me</h1>
      <p>This is weather app build on REACT</p>
      <p>Here are some of the tools I used: </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JS FWK used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
