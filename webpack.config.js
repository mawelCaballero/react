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
            presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        //Ignore these folders for packaging
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
