//chrome.dom.openOrClosedShadowRoot(
//	  element: HTMLElement,
//)
async function testlog(){
	while(true){
		console.log('heartbeat');
		await new Promise(resolve => setTimeout(resolve, 12000));
		//move single elem arround 
		//not sure why this line is here its thowing an error
		//document.body.getElementsByTagName("*")[8].appendChild(insertElement);
	}
}
console.log('Content-scripts.js starts here! ELEM TEST');
testlog();
async function main(){
// Create a button element
const button = document.createElement("button");

// Set the button's text content
button.textContent = "Click me";

// Set the button's ID
button.id = "clickMe";

// Append the button to the document body
document.body.appendChild(button);

const getElemTest = document.body;

console.log('testing get elm');
//console.log('testing elm?: '+JSON.parse(getElemTest));
//console.log('testing elm content'+JSON.parse(getElemTest.innerHTML));
//this seems to be returning the actual html object which can be intereacted with. 
console.log(document.body);
console.log(getElemTest);
//looks like getting the all element belonging to the body as text which can be easily parced
console.log(getElemTest.innerHTML);
/// Get all elems 
//console.log(document.body.getElementsByTagName("*"));
console.log(document.body.getElementsByTagName("*")[8]);
console.log('elm testing complete');


const insertElement = document.createElement('p');
insertElement.textContent = "This text was inserted to the page"
document.body.appendChild(insertElement);
//document.body.getElementsByTagName("*")[8].appendChild(insertElement);
}

async function runMain(){
	let active = await chrome.storage.local.get("script1");
	if ("active" == active.script1){
		console.log('insert will be attempted')
		main();
	}
	else{
		console.log('autofill skipped')
	}
}

runMain();

