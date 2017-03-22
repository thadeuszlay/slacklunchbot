var request = require('request'),
	util 	= require('../util');

module.exports = function (param) {
	var	channel		= param.channel,
		endpoint	= param.commandConfig.endpoint.replace('{eat}', param.args[0]),
		go1 = " It only takes ",
		go2 = " minutes to go there!";
		
	var lunchLocation = [{
		name: "Indian",
		location: "<https://goo.gl/Mnx6rC>",
		text: "I love Nan, anyone else? :) ",
		duration: 2}, {
		name: "Italian",
		location: "<https://goo.gl/1Zo09J>",
		text: "La dolce vita!",
		duration: 5}, {
		name: "Greek",
		location: "<https://goo.gl/1zYBu4>",
		text: "I'm hungry for some Greek salad.",
		duration: 8}, {
		name: "Doener bar",
		location: "<https://goo.gl/JUqe3M>",
		text: "Can't wait to eat Doener again!",
		duration: 8}, {
		name: "Curry 73",
		location: "<https://goo.gl/VJUrBp>",
		text: "I long for something hot and spicey!",
		duration: 6}
	];
		
	request(endpoint, function (err, response, body) {
		var info = [];
		console.log(Math.floor((Math.random() * lunchLocation.length) + 1));
		var randomIndex = Math.floor((Math.random() * lunchLocation.length) + 1) -1;
		var lunchSuggestion = lunchLocation[randomIndex];
		info.push('Let\'s go to the ' + lunchSuggestion.name + '. ' + lunchSuggestion.text + go1 + lunchSuggestion.duration + go2 );
		info.push('Direction:\n ' + lunchSuggestion.location);
		util.postMessage(channel, info.join('\n\n'));

	});

};
