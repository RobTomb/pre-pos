'use strict';

function createUpdatedCollection(collectionA, objectB) {
	let wordsList =[];
	collectionA.forEach((item)=>{
		wordsList.push(item.key);
	});
	objectB.value.forEach((item)=>{
		if( collectionA[wordsList.indexOf(item)].count >= 3 )
			collectionA[wordsList.indexOf(item)].count-=parseInt((collectionA[wordsList.indexOf(item)].count/3));
	})
	return collectionA;
}
