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