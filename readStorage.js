const clear = document.getElementById('clear');

clear.addEventListener('click', function() {

	chrome.storage.sync.clear();
	console.log('do something');

	});


async function read(){
	let data = await chrome.storage.local.get(null);
	data_keys = Object.keys(data);
	console.log(data_keys);
	 //data = [1,2,3];
	
	for (var store = 0;store < data_keys.length;store++){
		console.log('item: '+store);
		//I guess local storage only stores strings so this object has to be parsed as json 
		//console.log(data_keys[store]);	
		console.log(data[store]);
		//get object properties
		console.log(Object.keys(data[store]));

		//trying to parse the stored object 
		console.log(JSON.parse(data[store]));

	}

};

async function deletefunc(){
	console.log('create storate clear later');
};


//main calls below funcs above
read();
