var contextMenuItem = {
    "id": "saveAttendance",
    "title": "Save Attendance",
    "documentUrlPatterns": ["https://meet.google.com/*"],
    "contexts": ["page"]
};

chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status === 'complete') {
    if(tab.url.startsWith("https://meet.google.com/") && tab.url.includes("-")){
		chrome.tabs.executeScript(tab.id, {file: "js/startAttendance.js"})
	}
  }
});

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId == "saveAttendance"){
        chrome.tabs.executeScript(tab.id, {file: "js/saveAttendance.js"})
    }
});