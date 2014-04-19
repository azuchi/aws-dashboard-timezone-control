// extension icon click event
chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({url: "http://status.aws.amazon.com/"})
});