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


/* cpacaud: stop on pressing previous/next */
/* document.getElementById('next-container').addEventListener('click', Amplitude.pause);
document.getElementById('prev-container').addEventListener('click', Amplitude.pause); */


/*
init
*/

Amplitude.init({
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },

  "volume": 100,

  "songs": [

    /* song info template

    {
      "name": "123",
      "artist": "Christian Pacaud",
      "url": "./musique/123.ogg",
      "cover_art_url": "./art/123.webp",
      "download": '<a href="./musique/123.flac" download>Télécharger (FLAC)</a>',
      "date": '10 janvier 2000',
      "credits":
      `
      123
      `
    },

    */

    { /*Géants - Naître en soif de vide*/
      "name": "Géants - Naître en soif de vide",
      "artist": "Christian Pacaud",
      "url": "./musique/Christian Pacaud - Géants - Naître en soif de vide.ogg",
      "cover_art_url": "./art/geants_naitre.webp",
      "download": '<a href="./musique/Christian Pacaud - Géants - Naître en soif de vide.flac" download>Télécharger (FLAC)</a>',
      "date": '5 septembre 2021',
      "credits":
      `
      Christian Pacaud : musique, arrangements, mixage, guitare et basse<br>
      Alexandre Hudon : batterie<br>
      <br>
      Geneviève Savoie : piccolo, flûte traversière<br>
      Jean-Sébastien Blais : hautbois<br>
      Stéphane Fontaine : clarinette<br>
      Yana Ouellet : basson<br>
      <br>
      Quatuor Crema<br>
      Inti Manzi : violon<br>
      Jean-Michel Marois : violon<br>
      Annie Morrier : alto<br>
      Rachel Baillargeon : violoncelle<br>
      <br>
      <a href="https://hemispherestudio.com/" target="_blank">Antoine Baril</a> : enregistrement - batterie<br>
      Inti Manzi : enregistrement - violons, alto, violoncelle, clarinette<br>
      <br>
      Photo : Christian Pacaud
      `
    },
    { /*Orfan*/
      "name": "Orfan",
      "artist": "Christian Pacaud",
      "url": "./musique/Christian Pacaud - Orfan.ogg",
      "cover_art_url": "./art/orfan.webp",
      "download": '<a href="./musique/Christian Pacaud - Orfan.flac" download>Télécharger (FLAC)</a>',
      "date": '4 mai 2021 ',
      "credits":
      `
      Christian Pacaud : musique, arrangements, mixage, guitare et basse<br>
      <a href="https://cameronwisch.com/" target="_blank">Cameron Wisch</a> : batterie<br>
      <br>
      Quatuor Crema<br>
      Inti Manzi : violon<br>
      Jean-Michel Marois : violon<br>
      Annie Morrier : alto<br>
      Rachel Baillargeon : violoncelle<br>
      <br>
      Photo : Christian Pacaud
      `
    },
    { /*Anthmèses*/
      "name": 'Anthmèses',
      "artist": "Christian Pacaud",
      "url": "./musique/Christian Pacaud - Anthmèses.ogg",
      "cover_art_url": "./art/anthmeses.webp",
      "download": '<a href="./musique/Christian Pacaud - Anthmèses.flac" download>Télécharger (FLAC)</a>',
      "date": '5 avril 2021',
      "credits":
      `
      Christian Pacaud : musique, mixage, guitare et basse<br>
      <a href="https://cameronwisch.com/" target="_blank">Cameron Wisch</a> : batterie<br>
      <a href="https://universeeffects.ca/" target="_blank">Francis Grégoire</a> : claviers<br>
      <br>
      Photo : <a href="https://unsplash.com/photos/AshT365TphA" target="_blank"">Sébastien Fortier</a>
      `
    },
    { /*Géants - Assoupis sur les berges*/
      "name": "Géants - Assoupis sur les berges",
      "artist": "Christian Pacaud",
      "url": "./musique/Christian Pacaud - Géants - Assoupis sur les berges.ogg",
      "cover_art_url": "./art/geants_assoupis.webp",
      "download": '<a href="./musique/Christian Pacaud - Géants - Assoupis sur les berges.flac" download>Télécharger (FLAC)</a>',
      "date": '20 mars 2021',
      "credits":
      `
      Christian Pacaud : musique, arrangements, mixage, guitare et basse<br>
      <a href="https://cameronwisch.com/" target="_blank">Cameron Wisch</a> : batterie<br>
      <a href="https://www.thomasfengmusic.com/" target="_blank">Thomas Feng</a> : piano<br>
      Nancy Voiselle : piccolo, flûte traversière<br>
      <a href="http://field-of-reeds.net/" target="_blank">Kristin Naigus</a> : hautbois<br>
      <a href="https://lorisyngajewski.com/" target="_blank">Lori Syngajewski</a> : clarinette<br>
      <a href="https://www.youtube.com/c/Bassoonify/" target="_blank">Bassoonify</a> : basson<br>
      <br>
      Quatuor Crema<br>
      Inti Manzi : violon<br>
      Jean-Michel Marois : violon<br>
      Annie Morrier : alto<br>
      Rachel Baillargeon : violoncelle<br>
      <br>
      Photo : Fleuve Saint-Laurent à marée basse, 26 juillet 2020, Trois-Pistoles, Québec / Christian Pacaud
      `
    },
    { /*Apparoir VX*/
      "name": "Apparoir VX",
      "artist": "Christian Pacaud",
      "url": "./musique/Christian Pacaud - Apparoir VX.ogg",
      "cover_art_url": "./art/apparoir_vx.webp",
      "download": '<a href="./musique/Christian Pacaud - Apparoir VX.flac" download>Télécharger (FLAC)</a>',
      "date": '10 mai 2020',
      "credits":
      `
      Christian Pacaud : musique, mixage et basse<br>
      <br>
      Photo : Pražský Metronom, 2 décembre 2017, Prague, Tchéquie / Christian Pacaud
      `
    },
    { /*Morhpéus*/
      "name": "Morphéus",
      "artist": "Christian Pacaud, Luke Kelly & Bastien Jouvin",
      "url": "./musique/Christian Pacaud, Luke Kelly & Bastien Jouvin - Morphéus.ogg",
      "cover_art_url": "./art/morpheus.webp",
      "download": '<a href="./musique/Christian Pacaud, Luke Kelly & Bastien Jouvin - Morphéus.flac" download>Télécharger (FLAC)</a>',
      "date": '28 décembre 2020',
      "credits":
      `
      Christian Pacaud : musique, arrangements et mixage<br>
      Luke Kelly : musique<br>
      Bastien Jouvin : voix, texte<br>
      <br>
      Photo : <a href="https://unsplash.com/photos/PUMuasx8BPg" target="_blank">Mohamed Rishfaan</a>
      `
    },
    { /*Side A*/
      "name": "Side A",
      "artist": "Christian Pacaud & Pier-André Côté",
      "url": "./musique/Christian Pacaud & Pier-André Côté - Side A.ogg",
      "cover_art_url": "./art/side_a.webp",
      "download": '<a href="./musique/Christian Pacaud & Pier-André Côté - Side A.flac" download>Télécharger (FLAC)</a>',
      "date": '24 décembre 2020',
      "credits":
      `
      Christian Pacaud : musique, mixage, guitare et basse<br>
      Pier-André Côté : batterie, percussions<br>
      <br>
      Photo : <a href="https://unsplash.com/photos/X9k1b5pGX5Y" target="_blank">Dan-Cristian Pădureț</a>
      `
    },
    { /*Timulog*/
      "name": "Timulog",
      "artist": "Christian Pacaud & Francis Thibault",
      "url": "./musique/Christian Pacaud & Francis Thibault - Timulog.ogg",
      "cover_art_url": "./art/timulog.webp",
      "download": '<a href="./musique/Christian Pacaud & Francis Thibault - Timulog.flac" download>Télécharger (FLAC)</a>',
      "date": '19 décembre 2020',
      "credits":
      `
      Christian Pacaud : musique, arrangement et mixage<br>
      Francis Thibault : musique<br>
      <br>
      Photo : <a href="https://unsplash.com/photos/pRiUWB0YVeQ" target="_blank">Marek Piwnicki</a>
      `
    },

  ],
  "callbacks": {
'song_change': function () {
updatenotification();
},
'play': function () {
updatenotification();
}
}
});
