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

function findSmallest(array){
	smallest = array[0]; /*asume it is the first*/
		for(var i = 0; i< array.length; i++){
			if(smallest > array[i]){
				smallest = array[i];
			};
		};
	return smallest
};

function insertionSort(array){
	var unsorted = array.slice(0);
	var sorted = [];
	var smallest;
	while(sorted.length < array.length){
		smallest = findSmallest(unsorted)
	sorted.push(smallest);
	unsorted.splice(unsorted.indexOf(smallest),1); /*delete smallest from unsorted*/
	};	
	return sorted;
};