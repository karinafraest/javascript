describe("calculations", function(){
	describe("area()", function(){
		it ("calculates the area of a rectangle", function(){
			var rectangle = {width: 10, height: 20};
			expect(area(rectangle)).toBe(200);
		});
	});
});