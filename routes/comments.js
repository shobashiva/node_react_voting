var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');


var Comment = require('../model/comments');

router.use(bodyParser.urlencoded({extended: true}))
router.use(methodOverride(function(req, res){
	if (req.body && typeof req.body == 'object' && '_method' in req.body){
		var method = req.body._method
		delete req.body._method
		return method
	}
}))

router.route('/')
	.get(function(req, res) {
		Comment.find(function(err, comments) {
			if(err) {
				res.send(err);
			}

			res.json(comments);
		});
	})
	.post(function(req, res) {
		var comment = new Comment();
		comment.author = req.body.author;
		comment.text = req.body.text;

		comment.save(function(err) {
			if (err) {
				res.send(err);
			}

			res.json({message: 'Comment success'});
		});
	});

module.exports = router;