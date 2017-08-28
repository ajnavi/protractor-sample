'use strict';

module.exports = {
    scrollIntoView: function (el) {
        browser.executeScript(function (el) {
            el.scrollIntoView();
        }, el.getWebElement());
    },

    scrollToTop: function () {
        return browser.executeScript('window.scrollTo(0,0);');
    },

    scrollToBottom: function() {
        return browser.executeScript('window.scrollTo(0,document.body.scrollHeight);');
    }
};
