function area(rectangle){
	var width = rectangle.width;
	var height = rectangle.height;
	return width*height;
}

function perimeter(rectangle){
	var width = rectangle.width;
	var height = rectangle.height;
	var perimeter = (width*2) + (height*2);
	return perimeter;
}

function diagonal(rectangle){
	var width = rectangle.width;
	var height = rectangle.height;
	return Math.sqrt(width**2+height**2);
}

function isSquare(rectangle){
	return rectangle.width===rectangle.height;
}
