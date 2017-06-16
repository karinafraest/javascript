function total(array){
	var total = 0;
	array.forEach(function(number){
		total+=number;
	});
	return total;
};

function mean(array){
	return total(array)/array.length;
}

function median(array){
	var median;
	array = array.sort();
	var half = array.length/2
	if (array.length%2 === 0){
		median = (array[half -1]+ array[half])/2
	} else {
		median = array[Math.floor(half)];
	};
	return median;
}

function mode(array){
	array.sort();
	var duplicates = {};
	var mostCommon = 0; /*asume it is the first one until proven otherwise */
	var modeNumbers = [];
	array.forEach(function(number){
		if(!(number in duplicates)){
			duplicates[number] = 0;
		};

		duplicates[number] ++;

		if(duplicates[number] == mostCommon){
			modeNumbers.push(duplicates[number]);
		} else if (duplicates[number]> mostCommon){
			mostCommon = duplicates[number];
			modeNumbers = [number];
		};
	});
	return modeNumbers;
};