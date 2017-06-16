describe("Totals", function(){
	describe("total()", function(){
		it("sums all the values in the array", function(){
			var array = [2,4,6,8,10];
			expect(total(array)).toBe(30);
		});
	});

	describe("mean()", function(){
		it("calculates the mean of the values in the array", function(){
			var array = [1,2,2,5,5];
			expect(mean(array)).toBe(3);
		});
	});

	describe("median()", function(){
		it("calculates the median of an even number of values in the array", function(){
			var array = [1,2,3,4,5,6];
			expect(median(array)).toBe(3.5);
		});

		it("calculates the median of an odd number of values in the array", function(){
			var array = [1,2,3,4,5];
			expect(median(array)).toBe(3);
		});

		it("calculates the median of an even number of values that are not arranged", function(){
			var array = [6,2,5,1,4,3];
			expect(median(array)).toBe(3.5);
		});
	});

	describe("mode()", function(){
		it("returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency", function(){
			var array = [1,2,3,2,5];
			expect(mode(array)).toEqual([2]);
		});
	});
});