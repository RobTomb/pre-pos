'use strict';

function createUpdatedCollection(collectionA, objectB) {
	let wordsObj = {};
	let wordsStr = [];
	collectionA.forEach((item)=>{
		if(item in wordsObj)
			wordsObj[item] += 1;
		else{
			wordsObj[item] = 1;
			wordsStr.push(item);
		}
	});
	let wordsList = [];
	wordsStr.forEach((item)=>{
		let words = {};
		words['key'] = item;
		words['count'] = wordsObj[item];
		wordsList.push(words);
	});
	objectB.value.forEach((item)=>{
		if(wordsList[wordsStr.indexOf(item)].count >= 3)
			wordsList[wordsStr.indexOf(item)].count -= 1;
	})

 	return wordsList;
}
