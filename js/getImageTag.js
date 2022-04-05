/* https://stackoverflow.com/a/2777577 */

var imageURLs_1000px = [
  "photos/fleuve_1000px.jpg"
  , "photos/lichen_1000px.jpg"
  , "photos/montalbert_1000px.jpg"
  , "photos/roche_1000px.jpg"
];

var imageURLs_300px = [
  "photos/fleuve_300px.jpg"
  , "photos/lichen_300px.jpg"
  , "photos/montalbert_300px.jpg"
  , "photos/roche_300px.jpg"
];

var x = window.matchMedia("(min-width: 750px)")

function getImageTag() {
  if (x.matches) {
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs_1000px.length);
    img += imageURLs_1000px[randomIndex];
    img += '\" width=\"600px\" />';
    return img;
  } else {
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs_300px.length);
    img += imageURLs_300px[randomIndex];
    img += '\" width=\"300px\" />';
    return img;
  }
}
