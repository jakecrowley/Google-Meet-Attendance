var attendees = [];

function isInList(name){
	for(var i = 0; i < attendees.length; i++){
		if(attendees[i].name == name){
			return true;
		}
	}
	return false;
}

setInterval(function() {
	var names = document.querySelectorAll('div[data-self-name="You"]');
	for(var i = 0; i < names.length; i += 2){
		var name = names[i].innerText;
		if(name != "" && name != "You" && !isInList(name)){
			attendees[attendees.length] = {name: name, time: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()};
		}
	}
}, 1000);