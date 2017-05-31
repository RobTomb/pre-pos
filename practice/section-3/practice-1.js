'use strict';

function createUpdatedCollection(collectionA, objectB) {
	let wordsList =[];
	collectionA.forEach((item)=>{
		wordsList.push(item.key);
	});
	objectB.value.forEach((item)=>{
			collectionA[wordsList.indexOf(item)].count-=1;
	})
	return collectionA;

}
