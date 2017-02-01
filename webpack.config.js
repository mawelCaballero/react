module.exports = {
  entry: './public/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
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
