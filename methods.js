const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";
var regExp = /Spain/g;
var found = text.match(regExp);
var found = text.replace('Spain','France');
console.log(text.replaceAll('rain','sun'));
var found = text.search('plain')
console.log(found)
