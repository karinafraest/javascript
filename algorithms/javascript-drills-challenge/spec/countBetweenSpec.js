describe("count between", function(){
	it("returns the number of integers in the array that are between the two given bounds (including them)", function(){
		var array = [0,2,4,7,3,1];
		var lowerBound = 3;
		var upperBound = 7;
		expect(countBetween(array, lowerBound,upperBound)).toBe(3);
	});

	it("returns 0 if the array is empty", function(){
		var array = []
		expect(countBetween(array, 3, 5)).toBe(0);
	});

	it("returns 0 if the upperBound is smaller than the lowerBound", function(){
		var array = [2,3,4,5,6,7];
		var lowerBound = 7;
		var upperBound = 3;
		expect(countBetween(array, lowerBound, upperBound)).toBe(0);
	});

	it("counts the number of elements even if the lower and upper bounds are the same", function(){
		var array = [1,2,1,3,1,4];
		var lowerBound = 1;
		var upperBound = 1;
		expect(countBetween(array, lowerBound, upperBound)).toBe(3);
	})


});