const clear = document.getElementById('clear');

clear.addEventListener('click', function() {

	console.log('do something');

	});


async function read(){
	let data = await chrome.storage.local.get(null);
	data_keys = Object.keys(data);
	console.log(data_keys);
	 data = [1,2,3];
	for (var store = 0;store < data.length;store++){
		console.log('doing nothing')
		

	}


};

async function deletefunc(){
	console.log('create storate clear later');
};


//main calls below funcs above
read()
