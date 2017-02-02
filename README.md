#Course about react tech
_________________________________________________________________________
#In this lesson: Create from scratch an application --> Boiler Plate.
___

## Description
This is the starting of a react application.
WebbApp configuration has been configured.
In this branch, we only show a message printed on screen. 

```javascript
module.exports = {
  entry: './app/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{
    },
    extensions:['','.js','.jsx']
  },
  /* To define in the entry property an jsx we have to specify a loader as babel.*/
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query:{
            presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        //Ignore these folders for packaging
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
```
