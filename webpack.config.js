module.exports = {
  entry: './app/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx'

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
