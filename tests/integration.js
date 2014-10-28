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

    it('show', function() {
        nav.executeScript(function() {
            var div = document.querySelector('#hidden');
            EasyEvent.applyToHtml(div);
            div.show();
        });
        nav.sleep(500);

        expect(element(by.id('hidden')).isDisplayed()).toEqual(true);
    });

    it('hide', function() {
        nav.executeScript(function() {
            var div = document.querySelector('#visible');
            EasyEvent.applyToHtml(div);
            div.hide();
        });

        expect(element(by.id('visible')).isDisplayed()).toEqual(false);
    });

    it('bind and trigger DOM events', function() {
        nav.executeScript(function() {
            var div = document.querySelector('#button');
            EasyEvent.applyToHtml(div);
            div.bind('click', function () {
                document.querySelector('#result').innerHTML += 'the click event.';
            });
            div.bind('dblclick', function () {
                document.querySelector('#result').innerHTML = 'The dblclick event was triggered before ';
            });
            div.trigger('dblclick');
        });

        element(by.id('button')).click();
        //browser.actions().doubleClick(element(by.id('button'))).perform();
        nav.sleep(1000);
        expect(element(by.id('result')).getText()).toEqual('The dblclick event was triggered before the click event.');
    });

    it('bind and trigger custom events with arguments', function() {
        nav.executeScript(function() {
            var div = document.querySelector('#button');
            EasyEvent.applyToHtml(div);
            div.bind('hello', function (text) {
                document.querySelector('#result').innerHTML = text;
            });
            div.trigger('hello', 'The hello event was triggered via code.');
        });

        expect(element(by.id('result')).getText()).toEqual('The hello event was triggered via code.');
    });
});