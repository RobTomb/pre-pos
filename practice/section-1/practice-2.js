'use strict';

function collectSameElements(collectionA, collectionB) {
 	let str = [];
	collectionA.forEach((item)=>{
		if( collectionB[0].indexOf(item) != -1 )
			str.push(item);
	});	
	return str;
}
