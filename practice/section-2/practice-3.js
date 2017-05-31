'use strict';

let wordsObj = {};
let wordsStr = [];

function countSameElements(collection) {
	collection.forEach((item)=>{
		if(item in wordsObj)
			wordsObj[item]++;
		else
			numInit(item);
	})
	let wordsObjList = [];
	wordsStr.forEach((item)=>{
		let words = {};
		words['name'] = item;
		words['summary'] = wordsObj[item];
		wordsObjList.push(words);
	})
	return wordsObjList;
}
function numInit(str){
	if(str[0] in wordsObj){
		wordsObj[str[0]] += maybeNum(str);
	}
	else{
		if(str.length == 1)
			wordsObj[str[0]] = 1;
		else{
			wordsObj[str[0]] = maybeNum(str);			
		}
	wordsStr.push(str[0]);
	}
}
function maybeNum(str){
	let num = ['0','1','2','3','4','5','6','7','8','9'];
	let sum = 0 ;
	let site =[];
	for(let i = 0 ; i < str.length ; i++){
		if(num.indexOf(str[i]) !=-1)
			site.push(num.indexOf(str[i]));
	}
	for(let i = 0 ; i < site.length ; i++){
		sum+=site[i]*Math.pow(10,site.length - 1 - i );
	}
	return sum;
}