window.onkeydown = function(e) {
  return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function() {
  var list = document.getElementById('list');

  list.style.height = (parseInt(document.getElementById('player-screen').offsetHeight) - 135) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function() {
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function(e) {
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },

  "songs": [

    /* song info template

    {
      "name": "123",
      "url": "./musique/123.flac",
      "cover_art_url": "./art/123.jpg",
      "download": '<a href="./musique/123.flac" download>Télécharger (FLAC)</a>',
      "date": '10 janvier 2000',
      "credits": '123'
    },

    */

    { /*Géants - Naître en soif de vide*/
      "name": "Géants - Naître en soif de vide",
      "url": "./musique/Christian Pacaud - Géants - Naître en soif de vide.flac",
      "cover_art_url": "./art/Christian Pacaud - Géants - Naître en soif de vide.jpg",
      "download": '<a href="./musique/Christian Pacaud - Géants - Naître en soif de vide.flac" download>Télécharger (FLAC)</a>',
      "date": '5 septembre 2021',
      "credits": 'Christian Pacaud : musique, arrangements, mixage, guitare et basse<br>Alexandre Hudon : batterie<br><br>Geneviève Savoie : piccolo, flûte traversière<br>Jean-Sébastien Blais : hautbois<br>Stéphane Fontaine : clarinette<br>Yana Ouellet : basson<br><br>Quatuor Crema  (<a href="http://www.quatuorcrema.com" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">www.quatuorcrema.com</a>)<br>Inti Manzi : violon<br>Jean-Michel Marois : violon<br>Annie Morrier : alto<br>Rachel Baillargeon : violoncelle<br><br>Antoine Baril : enregistrement - batterie  (<a href="https://hemispherestudio.com/" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">hemispherestudio.com</a>)<br>Inti Manzi : enregistrement - violons, alto, violoncelle, clarinette<br><br>Photo : Christian Pacaud'
    },
    { /*Orfan*/
      "name": "Orfan",
      "url": "./musique/Christian Pacaud - Orfan.flac",
      "cover_art_url": "./art/Christian Pacaud - Orfan.jpg",
      "download": '<a href="./musique/Christian Pacaud - Orfan.flac" download>Télécharger (FLAC)</a>',
      "date": '4 mai 2021 ',
      "credits": 'Christian Pacaud : musique, arrangements, mixage, guitare et basse <br> Cameron Wisch : batterie  (<a href="http://cameronwisch.com" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">cameronwisch.com</a>) <br> <br> Quatuor Crema  (<a href="http://www.quatuorcrema.com" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">www.quatuorcrema.com</a>) <br> Inti Manzi : violon <br> Jean-Michel Marois : violon <br> Annie Morrier : alto <br> Rachel Baillargeon : violoncelle <br> <br> Photo : Christian Pacaud'
    },
    { /*Anthmèses*/
      "name": 'Anthmèses',
      "url": "./musique/Christian Pacaud - Anthmèses.flac",
      "cover_art_url": "./art/Christian Pacaud - Anthmèses.jpg",
      "download": '<a href="./musique/Christian Pacaud - Anthmèses.flac" download>Télécharger (FLAC)</a>',
      "date": '5 avril 2021',
      "credits": 'Christian Pacaud : musique, mixage, guitare et basse <br> Cameron Wisch : batterie  (<a href="https://cameronwisch.com/" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">cameronwisch.com</a>) <br> Francis Grégoire : claviers  (<a href="https://universeeffects.ca/" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">universeeffects.ca</a>) <br> <br> Photo : Sébastien Fortier  (<a href="https://unsplash.com/photos/AshT365TphA" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">unsplash.com/photos/AshT365TphA</a>)'
    },
    { /*Géants - Assoupis sur les berges*/
      "name": "Géants - Assoupis sur les berges",
      "url": "./musique/Christian Pacaud - Géants - Assoupis sur les berges.flac",
      "cover_art_url": "./art/Christian Pacaud - Géants - Assoupis sur les berges.jpg",
      "download": '<a href="./musique/Christian Pacaud - Géants - Assoupis sur les berges.flac" download>Télécharger (FLAC)</a>',
      "date": '20 mars 2021',
      "credits": 'Christian Pacaud : musique, arrangements, mixage, guitare et basse <br> Cameron Wisch : batterie  (<a href="https://cameronwisch.com/" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">cameronwisch.com</a>) <br> Thomas Feng : piano  (<a href="https://www.thomasfengmusic.com/" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">www.thomasfengmusic.com</a>) <br> Nancy Voiselle : piccolo, flûte traversière <br> Kristin Naigus : hautbois  (<a href="http://field-of-reeds.net/" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">field-of-reeds.net</a>) <br> Lori Syngajewski : clarinette  (<a href="https://lorisyngajewski.com/" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">lorisyngajewski.com</a>) <br> Bassoonify : basson  (<a href="https://www.youtube.com/c/Bassoonify/" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">www.youtube.com/c/Bassoonify/</a>) <br> <br> Quatuor Crema  (<a href="https://www.quatuorcrema.com/" rel="nofollow ugc" referrerpolicy="strict-origin-when-cross-origin">www.quatuorcrema.com</a>) <br> Inti Manzi : violon <br> Jean-Michel Marois : violon <br> Annie Morrier : alto <br> Rachel Baillargeon : violoncelle <br> <br> Photo : Fleuve Saint-Laurent à marée basse, 26 juillet 2020, Trois-Pistoles, Québec / Christian Pacaud'
    },
    { /*Apparoir VX*/
      "name": "Apparoir VX",
      "url": "./musique/Christian Pacaud - Apparoir VX.flac",
      "cover_art_url": "./art/Christian Pacaud - Apparoir VX.jpg",
      "download": '<a href="./musique/Christian Pacaud - Apparoir VX.flac" download>Télécharger (FLAC)</a>',
      "date": '10 mai 2020',
      "credits": 'Christian Pacaud : musique, mixage et basse <br> <br> Photo : Pražský Metronom, 2 décembre 2017, Prague, Tchéquie / Christian Pacaud'
    },
  ]
});
