function bubbleSort(array){
	var sorted = true;
	while(sorted === true){
		sorted = false;
		for(var i = 0; i < array.length; i++){
			if (array[i] > array[i+1]){
				var changed = array[i];
				array[i] = array[i+1];
				array[i+1] = changed;
				sorted = true;
			};
		};
	};
	return array;
};
