$(document).ready(function(){
	//keyup to make it "live"
	$(".user-input").on("keyup", function(){

		converter = new MarkdownWidget(".user-input", ".transformed-input");

		converted = converter.transform

		converter.display(html)
	})
})