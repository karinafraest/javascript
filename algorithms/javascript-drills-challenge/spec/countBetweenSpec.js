describe("count between", function(){
	it("returns the number of integers in the array that are between the two given bounds (including them)", function(){
		var array = [0,2,4,7,3,1];
		var lowerBound = 3;
		var upperBound = 7;
		expect(countBetween(array, lowerBound,upperBound)).toBe(3);
	});

	it("returns 0 if the array is empty", function(){
		var array = []
		expect(countBetween(array, 3, 5));
	});
	
});