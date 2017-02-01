# react
Course about react tech

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
