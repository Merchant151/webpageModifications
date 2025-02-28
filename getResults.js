//Not the best way to search Query selecter is prob better
//const elmBucket = document.body.getElementsByTagName('span');i
//example for google <span jscontroller="msmzHf" jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc">
//I have identified result text in a h3 elm with class "LC20lb MBeuO DKV0Md"
//I have identified attribute jsname='UWckNb' 
async function main(){
	await new Promise(resolve => setTimeout(resolve, 3000));
	console.log('ran timeout  so get results starts with a delay')
	const elmBucket = document.querySelectorAll('[jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc"]');
	let index = 0
	//elmBucket is a set of google results 'typically ~10 per search'
	
	console.log("Find getresults.js");
	//console.log(elmBucket);/// This returns a node list 
	while(index < elmBucket.length){
	//console.log(elmBucket[0]);
	console.log(elmBucket.item(index));
	let elm = elmBucket.item(index);
	console.log(elm);
	//next this result needs to be set as the result and pushed as string to storage.
	console.log(elm.querySelectorAll('[jsname="UWckNb"]').item(0).getAttribute('href'));
	let href = elm.querySelectorAll('[jsname="UWckNb"]').item(0).getAttribute('href');
	const resultClassElm = elmBucket[index].getElementsByClassName('LC20lb MBeuO DKV0Md');
	const resultText = resultClassElm[0].textContent;
	//console.log("end getresults.js");


	//There are a few things I want to do. 
	//basically save all results and then display them in the extension. 
	//const results = new Array(); //likely don't need an array if my keys are strings
	//results[0] = resultText; 
	//console.log('outputing results after modifying')
	//console.log(results);
	//trying isnert slightyly differently using key value pair 
	let keyR = 'keyR'+index;
	let keyL = 'keyL'+index;
	chrome.storage.local.set({[keyR]:resultText }).then(()=> {console.log("saving search results text as resl1")});
	chrome.storage.local.set({[keyL]:href       }).then(()=> {console.log("saving result Link as href1")});
	index = index +1;
	};
}
main();
