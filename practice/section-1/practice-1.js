'use strict';

function collectSameElements(collectionA, collectionB) {
	let str = [];
	collectionA.forEach((item)=>{
		if( collectionB.indexOf(item) != -1 )
			str.push(item);
	});	
	return str;
}
