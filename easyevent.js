var EasyEvent = (function () {
    
    var self = this;

    function _bind (evt, fn) {
        self._events = self._events || {};
        self._events[evt] = fn;
    };

    function _trigger (evt) {
        self._events = self._events || {};
        if (! self._events.hasOwnProperty(evt)) return;
        self._events[evt].apply();
    };

    self.applyTo = function (obj) {
        obj.bind = _bind;
        obj.trigger = _trigger;
    };

    return self;

})();

if (typeof module !== 'undefined' && ('exports' in module)) {
    module.exports  = EasyEvent;
}
