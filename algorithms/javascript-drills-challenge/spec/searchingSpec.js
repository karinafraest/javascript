describe("Searching", function(){
	describe("search()", function(){
		it("returns true if the element is in the array", function(){
			var item = 6;
			var array = [1,2,3,4,5,6,7];
			expect(search(array,item)).toBe(true);
		});

		it("returns false if the element is not in the array", function(){
			var item = 9;
			var array = [1,2,3,4,5,6,7];
			expect(search(array,item)).toBe(false);
		});
	});

	describe("binarySearch()", function(){
		it("returns the index if the element is in the array", function(){
			var item = 6;
			var array = [1,2,3,4,5,6,7];
			expect(binarySearch(array,item)).toBe(5);
		});

		it("returns -1 if the element is not in the array", function(){
			var item = 9;
			var array = [1,2,3,4,5,6,7];
			expect(binarySearch(array,item)).toBe(-1);
		});
	});


})