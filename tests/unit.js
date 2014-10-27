var EasyEvent = require('../easyevent');
var chai = require('chai');
var expect = chai.expect;


describe('EasyEvent', function() {

    describe('applyTo', function() {
        it('simple object should have the EasyEvent methods', function() {
            var myObject = { key: 'value' };
            EasyEvent.applyTo(myObject);
            expect(myObject.bind).to.exist;
            expect(myObject.trigger).to.exist;
        });

        it('a function should have the EasyEvent methods', function() {
            var myObject = function() {};
            EasyEvent.applyTo(myObject);
            expect(myObject.prototype.bind).to.exist;
            expect(myObject.prototype.trigger).to.exist;
        });

        it('methods to manipulate DOM elements', function() {
            var myObject = { key: 'value' };
            myObject.isHtml = true;

            EasyEvent.applyTo(myObject);

            expect(myObject.addClass).to.exist;
            expect(myObject.removeClass).to.exist;
            expect(myObject.show).to.exist;
            expect(myObject.hide).to.exist;
            expect(myObject.addEvent).to.exist;
            expect(myObject.removeEvent).to.exist;
        });
    });

    describe('methods', function() {
        it('bind and trigger', function() {
            var myObject = { key: 'value' };
            EasyEvent.applyTo(myObject);

            var count = 1;
            myObject.bind('inc', function () {
                count++;
            });

            myObject.trigger('inc');
            expect(count).to.equal(2);
        });

    });

});
