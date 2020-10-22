// extension icon click event
chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({url: "https://status.aws.amazon.com/"})
});