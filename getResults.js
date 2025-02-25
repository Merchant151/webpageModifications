//Not the best way to search Query selecter is prob better
//const elmBucket = document.body.getElementsByTagName('span');i
//example for google <span jscontroller="msmzHf" jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc">
//I have identified result text in a h3 elm with class "LC20lb MBeuO DKV0Md"
//I have identified attribute jsname='UWckNb' 
async function main(){
	await new Promise(resolve => setTimeout(resolve, 3000));
	console.log('ran timeout  so get results starts with a delay')
	const elmBucket = document.querySelectorAll('[jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"]');
	//elmBucket is a set of google results 'typically ~10 per search'

	console.log("Find getresults.js");
	console.log(elmBucket);/// This returns a node list 

	console.log(elmBucket[0]);
	console.log(elmBucket[].getHTML());
	//console.log('Logging innerChildren');
	//console.log(elmBucket[0].innerHTML);
	const resultClassElm = elmBucket[0].getElementsByClassName('LC20lb MBeuO DKV0Md');
	//This elm class contains the reuslt text 
	//console.log(resultClassElm[0].textContent);
	const resultText = resultClassElm[0].textContent;
	console.log("end getresults.js");


//There are a few things I want to do. 
//basically save all results and then display them in the extension. 
const results = new Array(); //here I need to do some work to get the results saved.
results[0] = resultText; 
	console.log('outputing results after modifying')
	console.log(results);
	//trying isnert slightyly differently using key value pair 
	chrome.storage.local.set({'test':results[0] }).then(()=> {console.log("saving search results to chrome store")});
}
main();
