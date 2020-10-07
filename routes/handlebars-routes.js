// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // // index route loads view.html
  // app.get("/home", function(req, res) {
  //   res.sendFile(path.join(__dirname, "..public/view/hanldesbar/index.html")); 
  // });

  // // cms route loads cms.html
  // app.get("/menu", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/view/hanldesbar/menu.handlebars"));
  // });

  // // blog route loads blog.html
  // app.get("/contact", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/Contact.html"));
  // });
};
