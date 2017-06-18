describe("sorting", function(){
	describe("bubbleSort()", function(){
		it("sorts an array of n numbers", function(){
			var array = [2,5,4,3,7,1,9,6,8]
			expect(bubbleSort(array)).toEqual([1,2,3,4,5,6,7,8,9])
		});
	});
});