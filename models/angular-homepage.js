'use strict';

var AngularBase = require('./angular-base');

class AngularHomepage extends AngularBase {
    constructor() {
        super();
    };

    get() {
        browser.get('http://www.angularjs.org');
    };
};

module.exports = AngularHomepage;
