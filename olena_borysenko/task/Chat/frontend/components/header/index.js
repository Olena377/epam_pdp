'use strict';

import template from './header.jade';

export default class Header {
  constructor(options) {
    this.elem = document.createElement('header');
    this.elem.className = 'header__chat';
    this.elem.innerHTML = template(options);
  }
}

