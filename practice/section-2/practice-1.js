'use strict';
/**
 * @Author:RobTomb
 * @DateTime2017-05-29T18:13:28+0800
 * @param                            {JS}
 * @return                           {zero}
 */
function countSameElements(collection) {
	let wordlist = {};
	let str = [];
	
	collection.forEach( (item)=>{
		if(item in wordlist){
			wordlist[item]+=1;
		}
		else{
			wordlist[item]=1;
			str.push(item);
		}
	});
	
	let countWordsList = [];

	str.forEach( (item)=>{
		let countWords = {key:'',count:0};
		countWords['key'] = item;
		countWords['count'] = wordlist[item];
		countWordsList.push(countWords);
	});
	
	return countWordsList;
}