var data = require("../data.json");

exports.addFriend = function(req, res) {  
	var name = req.query.name; //query not params bc we are getting the info after the '?'
	var description = req.query.description;
	
	var newFriend = {"name": name,
					"description": description,
					"imageURL" : "https://previews.123rf.com/images/iimages/iimages1207/iimages120700033/14347067-illustration-of-a-girl-on-a-white-background.jpg"
					}
	
	
	console.log("hello");
	console.log(newFriend);

	//add friend to database data
	data.friends.push(newFriend);

	res.render('index', data);
		
}