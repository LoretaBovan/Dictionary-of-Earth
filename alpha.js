
chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.executeScript(null, {file: "jquery-3.2.1.min.js"});
    chrome.tabs.executeScript(null, {file: "word.js"});
    chrome.tabs.executeScript(null, {file: "definition.js"});
    chrome.tabs.executeScript(null, {file: "explainer.js"});
    chrome.tabs.insertCSS(null, {file: "style.css"});
    chrome.tabs.insertCSS(null, {file: "balloon.css"});
});

//todo
//
//Implement word Database
//Make it work on chrome
//Stilizovanje
