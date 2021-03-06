/*TODO[@nitish]: Add hooks here set up callbacks for listening to a click on the extension button to 
add/remove listener on new cards being available to callback on orchestrator.swipe()
*/

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#0000ff'}, function() {
    console.log("The color is blue.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'tinder.com'},
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});