var string="The white sheeps are looking at black sheeps while brown sheeps are eating the food";
// document.write(string);
var reg= new RegExp('sheep','gi'); //i=tells case sensitive should be ignore and g=globally 
var newString = string.replace(reg,'Cow');
document.write(newString);