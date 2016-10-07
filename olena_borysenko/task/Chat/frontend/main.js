'use strict';

 require("./scss/main.scss");
 require("./font-awesome/font-awesome.scss");

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

document.getElementsByClassName('wrapper__header')[0].appendChild(header.elem);

  let profile = new Profile ({
     user_name: 'Kristen',
     kirstan: {
         name: 'Kirstan McKerrel',
         place: 'Cape Town CRP',
         general: [['Nickname:', 'Kela kela'], ['Tel:', '7345483'], ['Date of Birth:', 'July 12, 2000'], ['Gender:', 'Famale'], ['Language:', 'English']]
     }
  });

document.getElementsByClassName('wrapper__profile')[0].appendChild(profile.elem);

let message = new Message ({
     message: [{
         userId: 1, photo: './img/User.png', time: '12.00', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
     }, {
         userId: 2, photo: './img/User.png', time: '12.30', message: 'Some big text', author: 'user'
     }, {
         userId: 3, photo: './img/User.png', time: '12.31', message: 'Some big text'
     }]
});

document.getElementsByClassName('wrapper__chat')[0].appendChild(message.elem);

let footer = new Footer ( {
    
});

document.getElementsByClassName('wrapper__chat')[0].appendChild(footer.elem);


/*open menu*/

var menuButton = document.querySelector('[data-menu-btn]');
var menu = document.querySelector('[data-menu]');
menuButton.addEventListener('click', function () {
    menu.style.display = (menu.style.display == 'none') ? 'block' : 'none'
});


/*open profile*/

var messageBlock = document.getElementsByClassName('chat__message')[0];
messageBlock.addEventListener('click', function (ev) {
    var elem = ev.target;
    var chat = document.querySelector('[data-chat]');
    var profile = document.querySelector('[data-profile]');
    console.log("Len",elem.getAttribute('data-user'));

    if(elem.getAttribute('data-user') === 'data-user') {
        if(profile.style.display == 'none') {
            profile.style.display = 'block';
            chat.style.width = '75%';
        } else {
            profile.style.display = 'none';
            chat.style.width = '100%';
        }
    }

});

