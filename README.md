EasyEvent
=========

EasyEvent is a simple and easy library to works with javascript's events.  
You can add a custom events or the common DOM events.

## Installation

    bower install easyevent

Or just add the `easyevent.js` on the HTML file.

    <script src="easyevent.js"></script>

## Usage

Just call `EasyEvent.applyTo` for simple objects or `EasyEvent.applyToHtml` for DOM elements.

### Simple objects

    var person = {
        name: Gustavo
    };
    EasyEvent.applyTo(person);
    person.bind('say', function (message) {
        console.log(message);
    });
    person.trigger('say', 'hello!');

### DOM elements

    var button = document.querySelector('#myButton');
    EasyEvent.applyTo(button);
    button.bind('click', function () {
        console.log('Hello!!!');
    });
    button.trigger('click');

## API

### bind

Atach an event.

### trigger

### addClass

### removeClass

### show

Removes the `hide` class

### hide

Add the `hide` class

## License

MIT
