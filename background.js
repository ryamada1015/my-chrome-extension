
let rule = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'amazon.com', schemes: ['https'] },
            css: ["input[type='submit']"]
        })
    ],
    actions: [ 
        new chrome.declarativeContent.ShowAction(),
        new chrome.declarativeContent.RequestContentScript({js: ['contentScript.js']})
    ]
};

chrome.runtime.onInstalled.addListener((details) => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([rule]);
    });
});

