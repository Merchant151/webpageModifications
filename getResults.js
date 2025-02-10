//Not the best way to search Query selecter is prob better
//const elmBucket = document.body.getElementsByTagName('span');i
//example for google <span jscontroller="msmzHf" jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc">
const elmBucket = document.querySelectorAll('[jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"]');


console.log("Find getresults.js");
console.log(elmBucket);
console.log("end getresults.js");


//There are a few things I want to do. 
//basically save all results and then display them in the extension. 
const results = elmBucket;//here I need to do some work to get the results saved.
chrome.storage.local.set(data).then(()=> {console.log("saving search results to chrome store")});
