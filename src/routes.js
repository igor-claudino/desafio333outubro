const express = require("express");

const routes = express.Router();

const UrlPreviewController = require("./controllers/UrlPreviewController");

routes.post("/", UrlPreviewController.store);

module.exports = routes;
