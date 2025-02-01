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
```javascript
await chrome.scritping.executeScript([
    {
        target: [{tabId: 5}],
        files: ['content-script.js'],

    }
]);

```
Content scripts have access to four key namespaces 

chrome.runtime - used to com to other parts of the extension 
chrome.storage - access settings and data 
chrome.i18n - access language and localized messages 
chrome.dom - do dom related operations 

Content script injection time can be controled 

The default time is Document idle (when the page is done loading)

document start or document end are other options 

This can be specified with the option run_at feild in the manifest or runAt in the register content scripts api 

Running at document end will run before images are finnished loading but after the dom is loaded. 

Document start will run before any other processes run and will allow you to modify javascript properties before any other system has had a chance to. 

Content scripts can be injected into an Iframe (This could be useful for acessing other content such as ads)

All_frames: true 
match_origin_as_fallback : true 


Chrome has built in security features. 

Content security policy headers can be used to restrict content scripts from running. 
These can be verified in dev tools. 

to bypass content scripts secrity polices you man need to use a service worker to preform the work instead. 

CROS restrctions also apply to content scripts. 

Content scripts are injected into an 'isolated world' 
you can change this by setting the world pram to MAIN 

Limit the privledges given to content scritps.

Expensive work should be done in the background by sending commands to other parts of the extension. 

Docs at developer.chrome.com

