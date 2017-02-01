# react
Course about react tech

#In this lesson

We are going to make a refacor.
In this case, creating new 2 files and renaming Greeter.js to Greeter.jsx:

These 2 new files are going to be related with the components:
* GreeterForm.jsx
* GreeterMessage.jsx

When we are extracting , for example , the code about GreeterForm in a new file we have to do one simple additional thing (not only copy/paste).
1) create a react variable
2) do export of GreeterMessage to be available in other components.

Once done, in app.jsx we have to import this component as:
var GreeterMessage = require('./components/GreeterMessage');



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
