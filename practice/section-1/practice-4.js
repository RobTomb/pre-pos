'use strict';

function collectSameElements(collectionA, collectionB) {
	let str = [];
	collectionA.forEach((item)=>{
		if( collectionB.value.indexOf(item.key) != -1 )
			str.push(item.key);
	});	
	return str;
}
