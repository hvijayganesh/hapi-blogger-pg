'use strict'

const Hapi = require('hapi');
const PostRoutes = require('./routes/post-routes');
const config = require('./config/config');
const db = require('./config/database').db;
const path = require('path');
const fs = require('fs');

class AppLoader {
  constructor() {
    this.appData = {};
  }

  createHapiServer() {
    return new Hapi.Server({
      port: config.PORT,
      host: config.HOST
    });
  }

  registerRoutes(server) {
    const me = this;
    const routesDirectoryPath = path.join(__dirname, 'routes');
    fs.readdir(routesDirectoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      } 
      //listing all files using forEach
      files.forEach(function (routeFile) {
        let Routes = require(`./routes/${routeFile}`);
        let routes = new Routes(me.appData);
        routes.register(server);
      });
    });
  }

  initDb() {
    this.appData.pgp = db(config.DATABASE_URL);
  }

  async bootUpApp() {
    const me = this;
    try {
      me.initDb();
      const server = me.createHapiServer();
      me.registerRoutes(server);
      await server.start();
      console.log(`Server running at: ${server.info.uri}`);
    } catch(err) {
      console.error(err);
      throw err;
    }
  }    
}

module.exports = AppLoader;