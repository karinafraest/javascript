describe("calculations", function(){
 describe("area()", function() {
    it("calculates the area of a rectangle", function() {
      var rectangle = { width: 10, height: 20 };
      expect(area(rectangle)).toBe(200);
    });

    it("calculates the area of a square", function() {
      var square = { width: 20, height: 20 };
      expect(area(square)).toBe(400);
    });
  });
 describe("perimeter()", function(){
 	it("calculates the perimeter of a rectangle", function(){
 		var rectangle = {width: 10, heigth: 20};
 		expect(perimeter(rectangle)).toBe(60);
 	});

 	it("calculates the perimeter of a square", function(){
 		var square = {width: 20, heigth: 20};
 		expect(perimeter(square)).toBe(80);
 	});
 });

});