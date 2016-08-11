'use strict';

import template from './profile.jade';

export default class Profile {
    constructor(options) {
        this.elem = document.createElement('div');
        this.elem.className = 'profile';
        this.elem.innerHTML = template(options);
    }
}

