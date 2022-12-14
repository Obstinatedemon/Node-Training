const express = require('express')
const firstRouter = express.Router();
const controller = require("../controllerFolder/controller")

firstRouter.post('/secondPost',controller.firstControllerMethod);
firstRouter.get('/secondGet',controller.secondControllerMethod);

module.exports={firstRouter}