console.log("Prefill init.");

//trying to prefill the google search bar 
//
//<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="none" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" jsaction="paste:puy29d" data-ved="0ahUKEwjp8dOW6rKLAxXz5MkDHTRSMd4Q39UDCA8" style="" aria-activedescendant=""></textarea>
//
//<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" jsaction="paste:puy29d" data-ved="0ahUKEwjfid7m6bKLAxUk78kDHVZCDR8Q39UDCA8"></textarea>
//
//
const elemlist = document.body.getElementsByClassName('gLFyf');

console.log(elemlist[0]);
console.log(elemlist[1]);
console.log(elemlist);

//attempt to set a value./....
//moved to run prefill
//elemlist[0].value = 'Test autofill';

//console.log('ending prefill.js');

async function runPrefill(){
	//run only if script state is active
	let active = await chrome.storage.local.get("script1");
	if("active"== active.script1){
		elemlist[0].value = 'Test autofill';
		submit();
	}
};
//trying to submit
//htmlCollection.form will return form that is a parent of the element and 
//.submit will submit that form. .click() can be used for buttons
function submit(){
	console.log('testing prefill submit');
	elemlist[0].form.submit();
};
runPrefill();

