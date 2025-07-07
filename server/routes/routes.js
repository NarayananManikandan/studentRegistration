const express = require('express')
const routes = express.Router();
const servicefile = require('../service/service')
const controllerfile = require('../controller/controller')
routes.get('/', servicefile.indexfile);
routes.get('/data', servicefile.datafile);
routes.post('/pushing',controllerfile.createlogic)
routes.get('/fetching',controllerfile.getting)
 
  
module.exports = routes
