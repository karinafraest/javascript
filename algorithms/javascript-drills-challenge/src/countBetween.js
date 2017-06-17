function countBetween(array, lowerBound, upperBound){
	var includedNumbers = [];
	if (array.length == 0){
		return 0;
	} else{
		array.forEach(function(number){
			if(number >= lowerBound && upperBound>= number){
				includedNumbers.push(number);
			};
		});
		return includedNumbers.length;
	};
};

