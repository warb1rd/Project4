const express = require('express');
const usersRouter = new express.Router();
const usersCtrl = require('../controllers/users.js');
const verifyToken = require('../serverAuth.js').verifyToken;

usersRouter.get("/", usersCtrl.index)
usersRouter.post("/", usersCtrl.create)

usersRouter.post('/login', usersCtrl.authenticate)

usersRouter.use(verifyToken)                                  //Any routes declared after this will be protected

usersRouter.get("/:id", usersCtrl.show)
usersRouter.patch("/:id", usersCtrl.update)
usersRouter.delete("/:id", usersCtrl.destroy)

module.exports = usersRouter
