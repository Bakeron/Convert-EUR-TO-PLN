"use strict";

var convert = document.getElementById('convert'),
		exchange_rate = 4.2 * (1 + (Math.floor(Math.random() * 101) / 1000)),
		inserted_element = 0;

convert.addEventListener('click', function() {
	inserted_element++;	
	var value = document.getElementById('value').value;
	if (value.indexOf(',') != -1) value = value.replace(",", ".");
	
	var body = document.getElementsByTagName('body')[0],
		output = document.createElement('div'),
		title = document.createElement('h2'),
		score = document.createElement('h3'),
		text_title = document.createTextNode('PLN AMOUNT'),
		time = document.createElement('time');

	var score_value = (value * exchange_rate).toFixed(4);
	if (score_value.indexOf('.') != -1) score_value = score_value.replace(".", ",");
	var score_text = document.createTextNode(score_value);

	var time_now = new Date(),
			text = (time_now.getFullYear()<10?'0':'') + time_now.getFullYear() + "." + 
					(time_now.getMonth()<10?'0':'') + time_now.getMonth() + "." + 
					(time_now.getDate()<10?'0':'') + time_now.getDate() + " " + 
					(time_now.getHours()<10?'0':'') + time_now.getHours() + ":" + 
					(time_now.getMinutes()<10?'0':'') + time_now.getMinutes(),
			show_time = document.createTextNode(text);

	output.appendChild(title);
	output.className = "output " + inserted_element;
	title.appendChild(text_title);
	output.appendChild(score);
	score.appendChild(score_text);
	output.appendChild(time);
	time.appendChild(show_time);

	body.appendChild(output);
});