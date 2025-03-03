const clear = document.getElementById('clear');
//gloabl elemnt for list to append links to
const list = document.getElementById('itemList');
clear.addEventListener('click', function() {

	chrome.storage.sync.clear();
	chrome.storage.local.clear();
	read();
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
		//console.log(data[store]);
		//get object properties This looks to be 
		//console.log(Object.keys(data[data_keys[store]])); this line is getting the keys of a string and is essentially useless will del soon
		console.log(data[data_keys[store]]); 



		//trying to parse the stored object 
		//console.log(data[0])
		//console.log(JSON.parse(data[store]));

	};
	//outside loop
	console.log('outside loop');
	console.log(data['keyL1']);
	//console.log(object.Keys(data[0]));
	//console.log(data[0]['test']);

};

async function deletefunc(){
	console.log('create storate clear later');
};


//create a function 
async function writeToScreen(txt,link){

	//document.createElement('a');
	let item = document.createElement('a');
	//element.href = elm;
	item.href = link;
	//element.text = txt;
	item.text = txt;
	//list.appendChild(item)
};
//main calls below funcs above
read();
