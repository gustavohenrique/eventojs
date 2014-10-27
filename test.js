var EasyEvent = require('./easyevent');
var chai = require('chai');
var expect = chai.expect;
chai.should();
 

describe('EasyEvent', function() {

    describe('applyTo', function() {
        it('should have some methods', function() {
            var myObject = {
                key: 'value'
            };
            EasyEvent.applyTo(myObject);
            myObject.bind.should.be.a('function');
        });
    });

    describe('bind/trigger', function() {
        it('should add a function like an event listener', function() {
            var myObject = { key: 'value' };
            EasyEvent.applyTo(myObject);

            var count = 1;
            myObject.bind('inc', function () {
                count++;
            });

            myObject.trigger('inc');
            expect(count).to.be(2);

        });
    });

});