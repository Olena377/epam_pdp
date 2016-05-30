'use strict';

window.jQuery = require('jquery');
require('bootstrap');
var myCdpModule = require('cdptask');
var btnHello = document.getElementById('btnHelloWorld');
var str = 'There are some letters "a" in this sentence, which will be capitalized';

btnHello.addEventListener('click', function(){
    myCdpModule(str);
});