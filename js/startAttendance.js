var text = "Name,Event,Time\r\n";
var attendees = [];

setInterval(function() {
	var curr = [];
	var names = document.querySelectorAll('div[data-self-name="You"]');
	for(var i = 0; i < names.length; i += 2){
		var name = names[i].innerText;
		if(name != "" && name != "You"){
			curr[curr.length] = name;
		}
	}
	
	var newattendees = curr.filter(d => !attendees.includes(d));
	for(var i = 0; i < newattendees.length; i++){
		var name = newattendees[i];
		text += name + ",Joined," + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + "\r\n";
	}
	
	var leftattendees = attendees.filter(d => !curr.includes(d));
	for(var i = 0; i < leftattendees.length; i++){
		var name = leftattendees[i];
		text += name + ",Left," + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + "\r\n";
	}
	
	attendees = curr;
}, 1000);