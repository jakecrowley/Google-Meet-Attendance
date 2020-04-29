if(ran == null){
	var ran = true;
	
	var code = document.URL.split("/")[3].split("?")[0];
	var ls = window.localStorage;

	if(ls.getItem(code + "_text") == null){
		ls.setItem(code + "_text", "Name,Event,Time\r\n");
	}

	var attendees = [];

	if(ls.getItem(code + "_json") != null){
		attendees = JSON.parse(ls.getItem(code + "_json"));
	}

	var checkExist = setInterval(function() {
	   if (document.querySelector('#lcsclient') != null) {
			clearInterval(checkExist);
			checkInterval = setInterval(function() {
				var curr = [];
				var names = document.querySelectorAll('div[data-self-name="You"]');
				for(var i = 0; i < names.length; i += 2){
					var name = names[i].innerText;
					if(name != "" && name != "You" && !name.startsWith("Presentation (")){
						curr[curr.length] = name;
					}
				}
				
				var newattendees = curr.filter(d => !attendees.includes(d));
				for(var i = 0; i < newattendees.length; i++){
					var name = newattendees[i];
					var text = ls.getItem(code + "_text");
					text += name + ",Joined," + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + "\r\n";
					ls.setItem(code + "_text", text);
				}
				
				var leftattendees = attendees.filter(d => !curr.includes(d));
				for(var i = 0; i < leftattendees.length; i++){
					var name = leftattendees[i];
					var text = ls.getItem(code + "_text");
					text += name + ",Left," + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + "\r\n";
					ls.setItem(code + "_text", text);
				}
				
				attendees = curr;
				ls.setItem(code + "_json", JSON.stringify(attendees));
			}, 1000);
	   }
	}, 1000);
}