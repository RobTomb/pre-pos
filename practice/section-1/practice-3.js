'use strict';

function collectSameElements(collectionA, objectB) {
 	let str = [];
	collectionA.forEach((item)=>{
		if( objectB.value.indexOf(item) != -1 )
			str.push(item);
	});		
	return str;
}
