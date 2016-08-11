'use strict';

 require("./scss/main.scss");
 require("font-awesome-sass-loader");

 import Header from './components/header';
 import Profile from './components/profile/profile';

  let header = new Header ({
     icons: [{
         fa: 'fa fa-star'
     }, {
        fa: 'fa fa-phone'
     }, {
         fa: 'fa fa-video-camera'
     }],
    name: 'Kristen MCKERRAL'
  });

document.getElementsByClassName('wrapper__chat')[0].appendChild(header.elem);

  let profile = new Profile ({
     user_name: 'Kristen',
     kirstan: {
         name: 'Kirstan McKerrel',
         place: 'Cape Town CRP',
         general: [['Nickname', 'Kela kela'], ['Tel', '7345483'], ['Date of Birth', 'July 12, 2000'], ['gender', 'Famale'], ['Language', 'English']]
     }
  });

document.getElementsByClassName('wrapper__profile')[0].appendChild(profile.elem);
