'use strict';

var utils = require('../utils/utils');
var AngularHomepage = require('../models/angular-homepage');

describe('angularjs homepage', function() {
  it('basic test using PageObject', function(done) {
    var angularHomepage = new AngularHomepage();
    angularHomepage.get();
    /*
    utils.scrollToBottom().then(function() {
        setTimeout(function() {
        utils.scrollToTop().then(function() {
            expect(angularHomepage.getLearnText()).toEqual('LEARN');
        })}, 5000);
    });
    */

    //var flow = protractor.promise.controlFlow();
    //flow.execute(utils.scrollToBottom());

    //expect(angularHomepage.getBackToTop().isDisplayed()).toBe(false);
    utils.scrollToBottom();
    //expect(angularHomepage.getBackToTop().isDisplayed()).toBe(true);

    setTimeout(function() {
        utils.scrollToTop().then(function() {
            expect(angularHomepage.getLearnText()).toEqual('LEARN');
        })}, 5000);

    setTimeout(function() { done(); }, 10000);
  });
});
