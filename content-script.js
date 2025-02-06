//chrome.dom.openOrClosedShadowRoot(
//	  element: HTMLElement,
//)
async function testlog(){
	while(true){
		console.log('heartbeat');
		await new Promise(resolve => setTimeout(resolve, 2000));
	}
}
console.log('Content-scripts.js starts here! ELEM TEST');
testlog();
// Create a button element
//const button = document.createElement("button");

// Set the button's text content
//button.textContent = "Click me";

// Set the button's ID
//button.id = "clickMe";

// Append the button to the document body
//document.body.appendChild(button);

const getElemTest = document.body;

console.log('testing get elm body');
console.log('testing elm?: '+JSON.parse(getElemTest));

