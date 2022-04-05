/* https://stackoverflow.com/a/2777577 */

var imageURLs_1200px = [
  "photos/fleuve_1200px.jpg"
  , "photos/lichen_1200px.jpg"
  , "photos/montalbert_1200px.jpg"
  , "photos/roche_1200px.jpg"
];

/*
var imageURLs_300px = [
  "photos/fleuve_300px.jpg"
  , "photos/lichen_300px.jpg"
  , "photos/montalbert_300px.jpg"
  , "photos/roche_300px.jpg"
];
*/

var minw750 = window.matchMedia("(min-width: 750px)")
var minw1200 = window.matchMedia("(min-width: 1200px)")

function getImageTag() {
  if (minw1200.matches) {
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs_1200px.length);
    img += imageURLs_1200px[randomIndex];
    img += '\" width=\"900px\" />';
    return img;
  } else if (minw750.matches) {
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs_1200px.length);
    img += imageURLs_1200px[randomIndex];
    img += '\" width=\"600px\" />';
    return img;
  } else {
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs_1200px.length);
    img += imageURLs_1200px[randomIndex];
    img += '\" width=\"300px\" />';
    return img;
  }
}
