describe('EasyEvent for DOM', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        nav.get(URL);
    });

    it('addClass', function() {
        nav.executeScript(function() {
            var div = document.querySelector('#shape');
            EasyEvent.applyToHtml(div);
            div.addClass('circle');
        });

        expect(element(by.id('shape')).getAttribute('class')).toEqual('triangle circle');
    });

    it('removeClass', function() {
        nav.executeScript(function() {
            var div = document.querySelector('#shape');
            EasyEvent.applyToHtml(div);
            div.removeClass('triangle');
        });

        expect(element(by.id('shape')).getAttribute('class')).toEqual('');
    });
});