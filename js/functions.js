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


/*
init
*/

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
      "artist": "Christian Pacaud",
      "url": "./musique/123.ogg",
      "cover_art_url": "./art/123.jpg",
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
      "cover_art_url": "./art/geants_naitre.jpg",
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
      Quatuor Crema  (<a href="http://www.quatuorcrema.com" target="_blank">www.quatuorcrema.com</a>)<br>
      Inti Manzi : violon<br>
      Jean-Michel Marois : violon<br>
      Annie Morrier : alto<br>
      Rachel Baillargeon : violoncelle<br>
      <br>
      Antoine Baril : enregistrement - batterie  (<a href="https://hemispherestudio.com/" target="_blank">hemispherestudio.com</a>)<br>
      Inti Manzi : enregistrement - violons, alto, violoncelle, clarinette<br>
      <br>
      Photo : Christian Pacaud
      `
    },
    { /*Orfan*/
      "name": "Orfan",
      "artist": "Christian Pacaud",
      "url": "./musique/Christian Pacaud - Orfan.ogg",
      "cover_art_url": "./art/orfan.jpg",
      "download": '<a href="./musique/Christian Pacaud - Orfan.flac" download>Télécharger (FLAC)</a>',
      "date": '4 mai 2021 ',
      "credits":
      `
      Christian Pacaud : musique, arrangements, mixage, guitare et basse<br>
      Cameron Wisch : batterie (<a href="http://cameronwisch.com" target="_blank">cameronwisch.com</a>)<br>
      <br>
      Quatuor Crema (<a href="http://www.quatuorcrema.com" target="_blank">www.quatuorcrema.com</a>)<br>
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
      "cover_art_url": "./art/anthmeses.jpg",
      "download": '<a href="./musique/Christian Pacaud - Anthmèses.flac" download>Télécharger (FLAC)</a>',
      "date": '5 avril 2021',
      "credits":
      `
      Christian Pacaud : musique, mixage, guitare et basse<br>
      Cameron Wisch : batterie  (<a href="https://cameronwisch.com/" target="_blank">cameronwisch.com</a>)<br>
      Francis Grégoire : claviers  (<a href="https://universeeffects.ca/" target="_blank">universeeffects.ca</a>)<br>
      <br>
      Photo : <a href="https://unsplash.com/photos/AshT365TphA" target="_blank"">Sébastien Fortier</a>
      `
    },
    { /*Géants - Assoupis sur les berges*/
      "name": "Géants - Assoupis sur les berges",
      "artist": "Christian Pacaud",
      "url": "./musique/Christian Pacaud - Géants - Assoupis sur les berges.ogg",
      "cover_art_url": "./art/geants_assoupis.jpg",
      "download": '<a href="./musique/Christian Pacaud - Géants - Assoupis sur les berges.flac" download>Télécharger (FLAC)</a>',
      "date": '20 mars 2021',
      "credits": 'Christian Pacaud : musique, arrangements, mixage, guitare et basse <br> Cameron Wisch : batterie  (<a href="https://cameronwisch.com/" target="_blank">cameronwisch.com</a>) <br> Thomas Feng : piano  (<a href="https://www.thomasfengmusic.com/" target="_blank">www.thomasfengmusic.com</a>) <br> Nancy Voiselle : piccolo, flûte traversière <br> Kristin Naigus : hautbois  (<a href="http://field-of-reeds.net/" target="_blank">field-of-reeds.net</a>) <br> Lori Syngajewski : clarinette  (<a href="https://lorisyngajewski.com/" target="_blank">lorisyngajewski.com</a>) <br> Bassoonify : basson  (<a href="https://www.youtube.com/c/Bassoonify/" target="_blank">www.youtube.com/c/Bassoonify/</a>) <br> <br> Quatuor Crema  (<a href="https://www.quatuorcrema.com/" target="_blank">www.quatuorcrema.com</a>) <br> Inti Manzi : violon <br> Jean-Michel Marois : violon <br> Annie Morrier : alto <br> Rachel Baillargeon : violoncelle <br> <br> Photo : Fleuve Saint-Laurent à marée basse, 26 juillet 2020, Trois-Pistoles, Québec / Christian Pacaud'
    },
    { /*Apparoir VX*/
      "name": "Apparoir VX",
      "artist": "Christian Pacaud",
      "url": "./musique/Christian Pacaud - Apparoir VX.ogg",
      "cover_art_url": "./art/apparoir_vx.jpg",
      "download": '<a href="./musique/Christian Pacaud - Apparoir VX.flac" download>Télécharger (FLAC)</a>',
      "date": '10 mai 2020',
      "credits": 'Christian Pacaud : musique, mixage et basse <br> <br> Photo : Pražský Metronom, 2 décembre 2017, Prague, Tchéquie / Christian Pacaud'
    },
    {
      "name": "Morphéus",
      "artist": "Christian Pacaud, Luke Kelly & Bastien Jouvin",
      "url": "./musique/Christian Pacaud, Luke Kelly & Bastien Jouvin - Morphéus.ogg",
      "cover_art_url": "./art/morpheus.jpg",
      "download": '<a href="./musique/Christian Pacaud, Luke Kelly & Bastien Jouvin - Morphéus.flac" download>Télécharger (FLAC)</a>',
      "date": '28 décembre 2020',
      "credits": 'Christian Pacaud : musique, arrangements et mixage <br> Luke Kelly : musique <br> Bastien Jouvin : voix, texte <br><br> Photo : <a href="https://unsplash.com/photos/PUMuasx8BPg" target="_blank">Mohamed Rishfaan</a>' },
    {
      "name": "Side A",
      "artist": "Christian Pacaud & Pier-André Côté",
      "url": "./musique/Christian Pacaud & Pier-André Côté - Side A.ogg",
      "cover_art_url": "./art/side_a.jpg",
      "download": '<a href="./musique/Christian Pacaud & Pier-André Côté - Side A.flac" download>Télécharger (FLAC)</a>',
      "date": '24 décembre 2020',
      "credits": 'Christian Pacaud : musique, mixage, guitare et basse <br> Pier-André Côté : batterie, percussions <br><br> Photo : <a href="https://unsplash.com/photos/X9k1b5pGX5Y" target="_blank">Dan-Cristian Pădureț</a>'
    },
    {
      "name": "Timulog",
      "artist": "Christian Pacaud & Francis Thibault",
      "url": "./musique/Christian Pacaud & Francis Thibault - Timulog.ogg",
      "cover_art_url": "./art/timulog.jpg",
      "download": '<a href="./musique/Christian Pacaud & Francis Thibault - Timulog.flac" download>Télécharger (FLAC)</a>',
      "date": '19 décembre 2020',
      "credits": 'Christian Pacaud : musique, arrangement et mixage <br> Francis Thibault : musique <br><br> Photo : <a href="https://unsplash.com/photos/pRiUWB0YVeQ" target="_blank">Marek Piwnicki</a>'
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
