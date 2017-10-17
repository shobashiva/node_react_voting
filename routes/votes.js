var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');


var Vote = require('../model/vote');

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
		Vote.find(function(err, votes) {
			if(err) {
				res.send(err);
			}

			res.json(votes);
		});
	})
	.post(function(req, res) {
		var vote = new Vote();
		vote.date = Date.now();
		vote.skate_id = req.body.skater_id;

		vote.save(function(err) {
			if (err) {
				res.send(err);
			}

			res.json({message: 'vote success'});
		});
	});

module.exports = router;