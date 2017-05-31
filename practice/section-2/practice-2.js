'use strict';
let wordsObj = {};
let wordsStr = [];
function countSameElements(collection) {
	collection.forEach((item)=>{
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
	})
  return wordsObjList;
}
function numInit(str){
	wordsStr.push(str[0]);
	if(str.length == 1)
		wordsObj[str[0]] = 1;
	else
		wordsObj[str[0]] = parseInt(str[2]);
}
