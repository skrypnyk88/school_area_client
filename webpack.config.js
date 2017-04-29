var path = require('path');
module.exports = {
  entry: './app/js/app.js',
  output: {
<<<<<<< 6591626350f205011fe4ba3afc8ffcf0c584d96b
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
=======
    path: __dirname,
>>>>>>> LVRUBYM-221:Fixed file's name
    filename: 'bundle.js'
  },
  
  module: {

    loaders: [{
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader?resolve url'
    }, {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'url-loader?limit=50000&name=app/img/[name].[ext]'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
};
