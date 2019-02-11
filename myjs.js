chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('newtab.html')}, function(tab) {
    // Tab opened.
  });
});

//onfocus="var temp_value=this.value; this.value=""; this.value=temp_value"