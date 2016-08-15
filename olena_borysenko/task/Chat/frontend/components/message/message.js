'use strict';

import template from './message.jade';

export default class Message {
    constructor(options) {
        this.elem = document.createElement('ul');
        this.elem.className = 'chat__message messages';
        this.elem.innerHTML = template(options);
    }
}

