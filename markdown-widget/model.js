var MarkdownWidget = function(input, output){
  this.input = $(input).val()
  // this.input =  _.replace(this.input, "\n", "<br>")
  this.outputDiv = $(output)
};
 
MarkdownWidget.prototype.transformAll = function(){
	  html = converter.transform(/\*\*(.*?)\*\*/g, '**',"strong");
    html = converter.transform(/__(.*?)__/g, '__', "strong");
    html = converter.transform(/\*(.*?)\*/g, '*',"i");
    html = converter.transform(/_(.*?)_/g, '_', "i");
    return html;
}

MarkdownWidget.prototype.transform = function(regex, trim, tag){
  var outputArrayStars = _.words(this.input, regex)
  var outputArray = _.map(outputArrayStars,function(string){
    return _.trim(string, trim);
  })
  var output = this.input
  for(var i = 0; i < outputArray.length; i++){
    output = _.replace(output, outputArrayStars[i], '<'+tag+'>'+outputArray[i]+'</'+tag+'>')
  }
  var outputBreak = output.split("\n");
  this.input = outputBreak.join("<br>");
  return this.input
};