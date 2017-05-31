'use strict';

let wordsObj = {};
let wordsStr = [];
function createUpdatedCollection(collectionA, objectB) {
	collectionA.forEach((item)=>{
		if(item in wordsObj)
			wordsObj[item]++;
		else
			numInit(item);
	});
	let wordsObjList = [];
	wordsStr.forEach((item)=>{
		let words = {};
		words['key'] = item;
		words['count'] = wordsObj[item];
		wordsObjList.push(words);
	});
	objectB.value.forEach((item)=>{
		if(wordsStr.indexOf(item) !=-1)
			if(wordsObjList[wordsStr.indexOf(item)].count >= 3)
				wordsObjList[wordsStr.indexOf(item)].count -= parseInt(wordsObjList[wordsStr.indexOf(item)].count/3);
	})
  return wordsObjList;

}

function countSameElements(collection) {
  return wordsObjList;
}
function numInit(str){
	wordsStr.push(str[0]);
	if(str.length == 1)
		wordsObj[str[0]] = 1;
	else
		wordsObj[str[0]] = parseInt(str[2]);
}
