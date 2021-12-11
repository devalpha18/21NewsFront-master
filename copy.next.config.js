// in next.config.js (should be located in the root of your project if not create one)
const path = require('path');
const withCSS = require('@zeit/next-css')



module.exports = {
    async redirects() {
      return [
        {
            source: '/home',
            destination: '/',
            permanent: true,
          },
      ]
    },

    module: {
      rules: [
        {
          test: /\.(jpe?g|png|webp)$/i,
          use: {
            loader: 'responsive-loader',
            options: {
            adapter: require('responsive-loader/sharp')
            }
          }
        }
      ]
    },

    webpack: (config,  { isServer, webpack }) => {
      if (!isServer) {
        config.node = {
          dgram: 'empty',
          fs: 'empty',
          net: 'empty',
          tls: 'empty',
          child_process: 'empty',
        };

        // config.externals = {
        //    sharp: 'commonjs sharp',
        //   },

          config.module.rules.push(
          
          {
            test: /\.(eot|gif|otf|png|svg|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [ 'file-loader' ],
          },
          {
            test: /\.(jpe?g|png|webp)$/i,
            use: {
              loader: 'responsive-loader',
              options: {
              adapter: require('responsive-loader/sharp')
              }
            }
          }

          );
  
        config.plugins.push(new webpack.IgnorePlugin(/^(elastic-apm-node|bunyan)$/));
        config.plugins.push(
          new webpack.IgnorePlugin({
            checkResource(resource, context) {
              // If I am including something from my backend directory, I am sure that this shouldn't be included in my frontend bundle
              if (resource.includes('/backend/') && !context.includes('node_modules')) {
                return true;
              }
              return false;
            },
          }),
        );
      }
  
      return config;
    },


    // module: {
    //   loaders: [{
    //     test: /.jsx?$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/
    //   },{
    //     test: /\.node$/,
    //     use: 'node-loader'
    //   },
    //   {
    //     test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    //     loader: 'url-loader?limit=100000' }]
    // },

    


  }