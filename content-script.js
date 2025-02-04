//chrome.dom.openOrClosedShadowRoot(
//	  element: HTMLElement,
//)
async function testlog(){
	while(true){
		console.log('heartbeat');
		await new Promise(resolve => setTimeout(resolve, 2000));
	}
}
console.log('Content-scripts.js starts here! Hello, world');
testlog();
