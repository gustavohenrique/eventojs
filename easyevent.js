var EasyEvent = (function () {
    
    var self = this;

    var commonFunctions = {
        bind: function (evt, fn) {
            self._events = self._events || {};
            self._events[evt] = fn;
        },

        trigger: function (evt) {
            self._events = self._events || {};
            if (! self._events.hasOwnProperty(evt)) return;
            self._events[evt].apply();
        }
    };

    var visualFunctions = {
        addClass: function (className) {},
        removeClass: function (className) {},
        show: function (className) {},
        hide: function (className) {},
        addEvent: function (className) {},
        removeEvent: function (className) {}
    };

    var _add = function (func, functions, obj) {
        if (typeof obj === 'function') {
            obj.prototype[func] = functions[func];
        }
        else {
            obj[func] = functions[func];
        }
    };

    self.applyTo = function (obj) {
        for (func in commonFunctions) {
            _add(func, commonFunctions, obj);
        }

        for (func in visualFunctions) {
            if (obj.hasOwnProperty('isHtml') && obj.isHtml) {
                _add(func, visualFunctions, obj);
            }
        }
    };

    return self;

})();

if (typeof module !== 'undefined' && ('exports' in module)) {
    module.exports  = EasyEvent;
}