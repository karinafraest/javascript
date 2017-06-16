describe("triangles", function(){
	describe("validTriangle()", function(){
		it("expects three arguments", function(){
			expect(validTriangle.length).toBe(3);
		})
		it("returns false if any or all sides are 0 length", function(){
			expect(validTriangle(0,0,0)).toBe(false);
			expect(validTriangle(1,1,0)).toBe(false);
    		expect(validTriangle(1,0,1)).toBe(false);
    		expect(validTriangle(0,1,1)).toBe(false);
		});

		it("returns false if no such triangle exists", function(){
			expect(validTriangle(10,10,100)).toBe(false);
		});

		it("returns true if all the sides are of equal length (equilateral)", function(){
			expect(validTriangle(2,2,2)).toBe(true);
		});

		it("returns true if it is a valid triangle", function(){
			expect(validTriangle(3,4,5)).toBe(true);
		});

		it("returns true if it is a valid triangle", function(){
			expect(validTriangle(5,3,4)).toBe(true);
		});

		it("returns true if it is a valid triangle", function(){
			expect(validTriangle(4,3,5)).toBe(true);
		});
	});
})