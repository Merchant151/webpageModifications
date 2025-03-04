const clear = document.getElementById('clear');
//gloabl elemnt for list to append links to
const list = document.getElementById('list');
clear.addEventListener('click', function() {

	chrome.storage.sync.clear();
	chrome.storage.local.clear();
	read();
	});

//data stored under keys named keyL1 KeyR1 
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

		//console.log('outside loop');
		//console.log(data['keyL1']);
		let text = await data['keyR'+store];
		let link = await data['keyL'+store];
		console.log(link);
		if (link !== undefined){
		writeToScreen(text,link);}
	
	};

};

async function deletefunc(){
	console.log('create storate clear later');
};


//create a function 
async function writeToScreen(txt,link){
	let listitem = document.createElement('li');
	//document.createElement('a');
	let item = document.createElement('a');
	//element.href = elm;
	item.href = link;
	//element.text = txt;
	item.text = txt;
	//list.appendChild(item)
	listitem.appendChild(item);
	list.appendChild(listitem);
};
//main calls below funcs above
read();
