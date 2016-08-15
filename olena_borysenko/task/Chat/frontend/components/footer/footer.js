'use strict';

import template from './footer.jade';

export default class Footer {
    constructor(options) {
        this.elem = document.createElement('footer');
        this.elem.className = 'chat__footer footer';
        this.elem.innerHTML = template(options);
    }
}

