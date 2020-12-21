const path = require("path")
const express = require("express");
const app = express();

var data = require("./public/json/geo_sx_district.json")
var apiRoutes = express.Router();
app.use('/api', apiRoutes)
module.exports = {
  lintOnSave: false,
  // devServer: {
  //   before(app) {
  //     myApp.get('/api/data', (req, res) => {
  //       res.json(data)
  //     })
  //   }
  // },
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'procution'
    } else {
      config.mode = 'development'
      require('./build/mock')
      config.devServer = {
        proxy: {
          '/api': {
            target: 'http://localhost:8081',
            changeOrigin: true,
            pathRewrite: {
              '^/api': '/'
            }
          }
        }
      }
    }
    return {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, './src')
        }
      }
    }
  }
}
