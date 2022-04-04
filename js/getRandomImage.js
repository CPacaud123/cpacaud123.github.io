ImageArray = new Array();
ImageArray[0] = 'fleuve_1000px.jpg';
ImageArray[1] = 'lichen_1000px.jpg';
ImageArray[2] = 'montalbert_1000px.jpg';
ImageArray[3] = 'roche_1000px.jpg';

function getRandomImage() {
  var num = Math.floor(Math.random() * 4);
  var img = ImageArray[num];
  document.getElementById("randImage").innerHTML = ('<img src="' + 'photos/' + img + '" width="600px">')

}
