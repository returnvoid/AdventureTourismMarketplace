'use strict'

/*
 * Defining the Package
 */
var Module = require('meanio').Module
var path = require('path')
var Atm = new Module('atm')
/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Atm.register(function(app, system, database) {
  
  /*var permitCrossDomainRequests = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
    if ('OPTIONS' === req.method) {
      res.send(200)
    }else {
      next()
    }
  }*/

  app.set('views', path.join(__dirname, '/server/views'))
  //app.use(permitCrossDomainRequests)
  Atm.routes(app, database)

  return Atm
});
