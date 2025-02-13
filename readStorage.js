const clear = document.getElementByID('clear');

clear.addEventListener('onClick', function() {

	console.log('do something');

	});


async function read(){
	let data = await chrome.storage.local.get(null);
	data_keys = Object.keys(data);
	console.log(data_keys);
	let data = [1,2,3];
	for (var store = 0;store < data.length;store++){
		console.log('doing nothing')
		

	}


};

async function delete(){};
