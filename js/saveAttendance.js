var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var blob = new Blob([text], {type: 'text/plain'}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());

var text = "Name,Time Joined\r\n";
for(var i = 0; i < attendees.length; i++)
{
	text += attendees[i].name + "," + attendees[i].time + "\r\n";
}

var date = new Date();
var dateStr = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '-' + date.getFullYear();
var timeStr = date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3").replace(":", "-");
saveData(text, "attendance " + dateStr + " " + timeStr + ".csv");