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