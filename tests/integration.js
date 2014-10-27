describe('EasyEvent for DOM', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        nav.get(URL);
    });

    it('should have className', function() {
		nav.executeScript( function () {
			var div = document.querySelector('#shape');
			EasyEvent.applyTo(div);
		});
		element(by.id('shape')).getAttribute('class').toBe('circle');
        //element.all(by.css('circle')).then(function(items) {
        //    expect(items.length).toBe(1);
		//});
    });

});