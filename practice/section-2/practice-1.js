'use strict';

function countSameElements(collection) {
	let wordlist = {};
	let str = [];
	collection.forEach((item)=>{
		if( item in wordlist ){
			wordlist.item += 1;
		}
		else{
			wordlist.item = 1;
			str.push(item);
		}
	});
	let countSameElements = [];
	let countlist = {key:'',count:0};
	str.forEach((item)=>{
		countlist.key = item;
		countlist.count = wordlist.item;
		countSameElements.push(countlist);
	});
	return countSameElements;	
}
