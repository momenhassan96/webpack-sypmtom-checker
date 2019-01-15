
const dev = process.env.NODE_DEV !== 'production';

module.exports =
{
    entry: './js/mine.js',
    output:{
        path:__dirname +'/js',
        filename: 'main.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
            
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
            },
          ],
             test:/\.|png|jpeg|jpg|svg|$/,
              use: [{ 
                loader:'url-loader',
                options:{
                  limit:100000
                }
              },
            ],
              test: /\.css$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
              ],   
        },
            
        ]
      },
    mode: dev ? 'development' : 'production',
    devtool : dev ? 'inline-sourcemap' : ''



}


  