#Course about react tech
_________________________________________________________________________
#In this lesson: Custom package Names

Adding to webpack
in resolve an alias configuration. Whar for? We can define our components with the alias and this is going to work for when we change some code in the defined alias components we can reload the browser and the changes will be present. Otherwise we will have to restart the server and package again to see the changes.

```javascript
resolve: {
  root: __dirname,
  alias:{
    Greeter:'public/components/Greeter.jsx',
    GreeterMessage:'public/components/GreeterMessage.jsx',
    GreeterForm:'public/components/GreeterForm.jsx'
  },
  extensions:['','.js','.jsx']
},
```


#Webpack
When we want use a separated js files among them we use webpack.
With webpack, when we dont have or specify a config file, the way for making a bundle is in cmd line:
webpack ./public/app.js ./public/bundle.js

When we specify a config file with webpack, we only have tu run "webpack" command.

an example of webpack.config.file is:

module.exports = {
  entry: './public/app.js',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
    extensions:['','.js','.jsx']
  },
  module:{
    loaders:{
      loader: 'babel-loader',
      query:{
          presets: ['react', 'es2015']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }
  }
}


We are going to use babel-loader for convert jsx into js files
