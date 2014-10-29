var Evento = (function () {
    
    var self = this;

    var config = {
        css: {
            hide: 'hide'
        }
    };

    function getDomEvents() {
        var events = [];
        for (attr in document) {
            if (attr.substring(0,2) === 'on') {
                var evt = attr.replace('on', '');
                events.push(evt);
            }
        }
        return events;
    };

    var DOM_EVENTS = getDomEvents();

    var commonFunctions = {
        bind: function (evt, fn) {
            self._events = self._events || {};
            self._events[evt] = fn;
        },

        trigger: function (evt, args) {
            self._events = self._events || {};
            if (! self._events.hasOwnProperty(evt)) return;

            if (args !== undefined && args !== null) {
                self._events[evt].apply(this, [args]);    
            }
            else {
                self._events[evt].apply(this);
            }
        }
    };

    var visualFunctions = {
        addClass: function (className) {
            this.classList.add(className);
        },

        removeClass: function (className) {
            this.classList.remove(className);
        },

        show: function () {
            this.classList.remove(config.css.hide);
        },

        hide: function () {
            this.addClass(config.css.hide);  
        },

        bind: function (evt, fn) {
            var isDomEvent = (DOM_EVENTS.indexOf(evt) >= 0);
            if (isDomEvent) {
                this.addEventListener(evt, fn);
            }
            else {
                commonFunctions.bind(evt, fn);
            }
        },

        trigger: function (evt, args) {
            var isDomEvent = (DOM_EVENTS.indexOf(evt) >= 0);
            if (isDomEvent) {
                this.dispatchEvent(new Event(evt));
            }
            else {
                commonFunctions.trigger(evt, args);
            }  
        }
    };

    var _add = function (func, functions, obj) {
        if (typeof obj === 'function') {
            obj.prototype[func] = functions[func];
        }
        else {
            obj[func] = functions[func];
        }
    };

    self.configure = function (config) {
        self.config = config;
        return self;
    };

    self.applyTo = function (obj) {
        for (func in commonFunctions) {
            _add(func, commonFunctions, obj);
        }
        return self;  
    };

    self.applyToHtml = function (obj) {
        for (func in visualFunctions) {
            _add(func, visualFunctions, obj);
        }
        return self;
    };

    return self;

})();

if (typeof module !== 'undefined' && ('exports' in module)) {
    module.exports  = Evento;
}
