const express = require('express');
const resumesRouter = new express.Router();
const resumesCtrl = require('../controllers/resumes.js');
const {verifyToken} = require('../serverAuth.js');

resumesRouter.get("/", resumesCtrl.index)
resumesRouter.post("/", resumesCtrl.create)

resumesRouter.use(verifyToken)                                  //Any routes declared after this will be protected

resumesRouter.get("/:id", resumesCtrl.show)
resumesRouter.patch("/:id", resumesCtrl.update)
resumesRouter.delete("/:id", resumesCtrl.destroy)

module.exports = resumesRouter