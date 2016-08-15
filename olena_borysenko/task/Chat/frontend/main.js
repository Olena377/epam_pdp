'use strict';

 require("./scss/main.scss");
 require("font-awesome-sass-loader");

 import Header from './components/header';
 import Profile from './components/profile/profile';
 import Message from './components/message/message';
 import Footer from './components/footer/footer';


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

let message = new Message ({
     message: [{
         photo: './img/User.png', time: '12.00', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
     }, {
         photo: './img/User.png', time: '12.00', message: 'Some big text', author: 'user'
     }, {
         photo: './img/User.png', time: '12.00', message: 'Some big text'
     }]
});

document.getElementsByClassName('wrapper__chat')[0].appendChild(message.elem);

let footer = new Footer ( {
    
});

document.getElementsByClassName('wrapper__chat')[0].appendChild(footer.elem);
