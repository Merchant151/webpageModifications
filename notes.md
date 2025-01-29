I am taking some notes in learning how to inject content scripts into chrome.


THere are 3 standard ways to register a content script 

Manifest Declaration 

```json
{
    "Content_scripts": [
        {
            "matches: ["https://example.com/*"], 
            "js": ["cotent-script.js"]
        }
    ]
}
```

API (scripting.registerContentScripts) -- add and remove at runtime 

```javascript
await chrome.scripting.registerContentScripts([
    {
        id:'1',
        matches:["https://example.com/*"],
        js:['content-script.js'],
}
]);

```

Injection time (scripting.executeScript) -Triggered on command 
await chrome.scritping.executeScript([
    {
        target: [{tabId: 5}],
        files: ['content-script.js'],

    }
]);
