var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'keos'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://prueba:123456@35.190.135.121/pruebas'
  },

  test: {
    root: rootPath,
    app: {
      name: 'keos'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/keos-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'keos'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/keos-production'
  }
};

module.exports = config[env];
