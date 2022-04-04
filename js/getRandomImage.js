ImageArray = new Array();
ImageArray[0] = '20210710_130427_HDR_v1.jpg';
ImageArray[1] = '20190820_124858_HDR~2-edited_v1.jpg';
ImageArray[2] = '20210605_182651_HDR_v1.jpg';
ImageArray[3] = '20210710_110323_HDR_v1.jpg';

function getRandomImage() {
  var num = Math.floor(Math.random() * 4);
  var img = ImageArray[num];
  document.getElementById("randImage").innerHTML = ('<img src="' + 'photos/' + img + '" width="600px">')

}
