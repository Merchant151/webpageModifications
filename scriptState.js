// script is supposed to enable or disable script funcionality from the popup page
//
// first on load we need to set the tick boxes to the current state
//
// we need to send the script status to storage on trigger. 
//
//
//grab buttons 
//TODO: I would like to change this to be done by looping 
//over a list of elements instead
const scriptToggles = document.getElementById('toggle');

//scriptToggles.click();
async function updateScriptState(){
	//when script state is null we need to set the script to active or inactive
	let scriptState = await chrome.storage.local.get(["script1"]);
	console.log("Script state: "+ scriptState.key);
	if ("undefined"==""+scriptState.key){
		chrome.storage.local.set({script1: "active"});	
		scriptToggles.click();
	}else if ("active" == scriptState.key){
		scriptToggles.click();
	}
};
updateScriptState();
//main sets tickbox from storage 
//run main 
//
//
//listner sets script based on button id 
scriptToggles.addEventListener('click', function() {

	//update crome store based on sleection/
	//chrome.storage.local.set();
	console.log('toggle triggered');

});
