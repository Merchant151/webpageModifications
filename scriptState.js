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
let startup = true;

//scriptToggles.click();
async function updateScriptState(){
	console.log 
	setTimeout(async function () {
	//when script state is null we need to set the script to active or inactive
	let scriptState = await chrome.storage.local.get("script1");
	console.log("Script state: "+ scriptState.script1);
	if ("undefined"==""+scriptState.script1){
		chrome.storage.local.set({script1: "active"});	
		await scriptToggles.click();
	}else if ("active" == scriptState.script1){
		console.log("because active trigger")
		await scriptToggles.click();
	}else{
		startup = false;
	}
	//console.log("deactivate startup hold")	
	//startup = false;
	}, "100");
};
//updateScriptState();
//main sets tickbox from storage 
//run main 
//
//
//listner sets script based on button id 
scriptToggles.addEventListener('click', async function() {
	console.log('test setting state to storage')
	let scriptState = await chrome.storage.local.get("script1");
	console.log(""+scriptState.script1);
	console.log("startup state at: "+startup);
	if (!startup){
	if ("active" == scriptState.script1){
		console.log("inactive triggered")
		chrome.storage.local.set({script1: "inactive"});
	}else{
		console.log("active triggered")
		chrome.storage.local.set({script1:"active"});
	}
	}else{
		console.log('startup triggered')
		startup = false;
	}
	//update crome store based on selection/
	//chrome.storage.local.set();
	console.log('toggle triggered');

});

updateScriptState();
