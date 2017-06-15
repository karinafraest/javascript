$(document).ready(function(){
  $(".user-input").on("keyup", function(){

    converter = new MarkdownWidget(".user-input", ".transformed-input");

    html = converter.transform(/\*\*(.*?)\*\*/g, '**',"strong")
    html = converter.transform(/__(.*?)__/g, '__', "strong")
    html = converter.transform(/\*(.*?)\*/g, '*',"i")
    html = converter.transform(/_(.*?)_/g, '_', "i")

    converter.display(html)
  });
});