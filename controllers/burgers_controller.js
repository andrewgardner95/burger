var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// route to retrive all data
router.get("/", function(req,res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// route to create new data
router.post("/", function(req,res) {
	burger.create(req.body.name, function () {
		res.redirect("/");
	});
});

// route to edit/update data
router.put("/:id", function(req,res){
	var condition = "id= " + req.params.id;

	console.log("condition", condition);

	burger.update(condition, function(){
		res.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;