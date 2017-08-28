'use strict';

class AngularBase {
    constructor() {
        this.learn = element(by.linkText('LEARN'));
        this.develop = element(by.linkText('DEVELOP'));
        this.discuss = element(by.linkText('DISCUSS'));
        this.backToTop = element(by.linkText('Back to top'));
    };

    getLearnText() {
        return this.learn.getText();
    };

    getDevelopText() {
        return this.develop.getText();
    };

    getDiscussText() {
        return this.discuss.getText();
    };

    getBackToTop() {
        return this.backToTop;
    };

    getBackToTopText() {
        return this.backToTop.getText();
    };

    clickBackToTop() {
        this.backToTop.click();
    };
};
