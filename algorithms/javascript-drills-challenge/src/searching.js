function search(array, item){
	for(var i = 0; i < array.length; i++){
		if(item == array[i]){
			return true;
		};
	};
	return false;
};

function binarySearch(array, item){
	array.sort(function(a,b){
		return a-b;
	});
	
	var index = -1;
	var min = 0;
	var max = array.length -1;
	var middle = (max + min)/2;
	
	while(min < max){
		if(item === middle){
			index = array.indexOf(middle);
			return index;
		}else if(item < middle){
			max = middle;
		}else if(item > middle){
			min = middle;
		}
		middle =(max+min)/2
	}
	return index;
}